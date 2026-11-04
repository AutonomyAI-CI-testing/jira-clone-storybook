import { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useSearchParams } from "react-router";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Category } from "@domain/category/category";
import { User, UserId } from "@domain/user/user";
import { PriorityId } from "@domain/priority/priority";
import { prioritiesMock } from "@domain/priority/priority.mock";
import {
  EMPTY_FILTERS,
  IssueFilters,
  boardSearchParams,
  countActiveFilters,
  isFiltering,
  issueMatchesSearch,
  parseIssueFilters,
} from "@domain/filter/filter";
import { useSortBy } from "@app/hooks/useSortBy";
import { PriorityIcon } from "@app/components/priority-icon/priority-icon";
import { selectItemClass } from "@app/components/select/select";
import { UserAvatar } from "@app/components/user-avatar/user-avatar";
import { useProjectStore } from "@app/ui/main/project/project.store";

// The board's faceted filters. Every value the user picks is written to the
// board's query string, so the filtered board can be shared or reloaded as it
// is. Each facet collects the values it holds; an empty facet restricts
// nothing, so "no filters" is the empty state of every list rather than an
// "everything selected" one.
export const FilterBar = ({ users, categories }: FilterBarProps): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = useSortBy();
  const filters = parseIssueFilters(searchParams);

  const { search } = useProjectStore();
  const totalIssues = categories.reduce(
    (total, category) => total + (category.issueCount ?? category.issues.length),
    0
  );
  const matchingIssues = categories.reduce(
    (total, category) =>
      total +
      category.issues.filter((issue) => issueMatchesSearch(issue, search)).length,
    0
  );
  const activeFilters = countActiveFilters(filters);

  // Copy the current parameters first: setting them replaces the whole query
  // string, which would drop the sort the user picked.
  const applyFilters = (nextFilters: IssueFilters): void =>
    setSearchParams(boardSearchParams(sortBy, nextFilters));

  const togglePriority = (id: PriorityId): void =>
    applyFilters({
      ...filters,
      priorities: toggleValue(filters.priorities, id),
    });

  const toggleAssignee = (id: UserId): void =>
    applyFilters({
      ...filters,
      assignees: toggleValue(filters.assignees, id),
    });

  const clearFilters = (): void => applyFilters(EMPTY_FILTERS);

  return (
    <section className="mt-3 flex flex-wrap items-center gap-2">
      <Facet label="Priority" isActive={filters.priorities.length > 0}>
        {prioritiesMock.map((priority) => (
          <FacetItem
            key={priority.id}
            checked={filters.priorities.includes(priority.id)}
            onCheckedChange={() => togglePriority(priority.id)}
          >
            <PriorityIcon priority={priority.id} size={16} />
            <span className="text-xs uppercase">{priority.name}</span>
          </FacetItem>
        ))}
      </Facet>

      <Facet label="Assignee" isActive={filters.assignees.length > 0}>
        {users.map((user) => (
          <FacetItem
            key={user.id}
            checked={filters.assignees.includes(user.id)}
            onCheckedChange={() => toggleAssignee(user.id)}
          >
            <UserAvatar {...user} size={20} />
            <span>{user.name}</span>
          </FacetItem>
        ))}
      </Facet>

      {filters.priorities.map((id) => (
        <FilterChip
          key={id}
          label={priorityName(id)}
          icon={<PriorityIcon priority={id} size={14} />}
          onRemove={() => togglePriority(id)}
        />
      ))}
      {filters.assignees.map((id) => (
        <FilterChip
          key={id}
          label={userName(users, id)}
          onRemove={() => toggleAssignee(id)}
        />
      ))}

      <span className="ml-auto flex items-center gap-2">
        <span className="font-primary-light text-xs text-font-subtlest">
          {isFiltering(filters, search)
            ? `Showing ${matchingIssues} of ${totalIssues} issues`
            : `${totalIssues} issues`}
        </span>
        {activeFilters > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            aria-label="Clear all filters"
            className="cursor-pointer rounded border-none bg-transparent px-2 py-1 text-xs text-font-brand hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed"
          >
            Clear all
          </button>
        )}
      </span>
    </section>
  );
};

const Facet = ({ label, isActive, children }: FacetProps): JSX.Element => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger
      aria-label={`Open ${label} filter`}
      className={cx(
        "flex cursor-pointer items-center gap-1 rounded border-none px-3 py-1.5 text-xs",
        isActive
          ? "bg-background-selected text-font-brand"
          : "bg-background-neutral text-font hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
      )}
    >
      {label}
      <RiArrowDropDownLine size={18} />
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        sideOffset={4}
        align="start"
        className="z-50 max-h-[320px] min-w-[180px] overflow-y-auto rounded bg-elevation-surface-overlay p-1.5 shadow-md"
      >
        <DropdownMenu.Label className="px-2 py-1 font-primary-light text-2xs uppercase text-font-subtlest">
          {label}
        </DropdownMenu.Label>
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);

const FacetItem = ({
  checked,
  onCheckedChange,
  children,
}: FacetItemProps): JSX.Element => (
  <DropdownMenu.CheckboxItem
    checked={checked}
    onCheckedChange={onCheckedChange}
    // Keep the menu open so several values can be picked in one go.
    onSelect={(e) => e.preventDefault()}
    className={selectItemClass}
  >
    <DropdownMenu.ItemIndicator className="absolute left-3 top-1/2 -translate-y-1/2">
      <BsCheckLg size={14} />
    </DropdownMenu.ItemIndicator>
    {children}
  </DropdownMenu.CheckboxItem>
);

const FilterChip = ({ label, icon, onRemove }: FilterChipProps): JSX.Element => (
  <span className="flex items-center gap-1 rounded bg-background-selected py-1 pl-2 pr-1 text-xs text-font-brand">
    {icon}
    {label}
    <button
      type="button"
      onClick={onRemove}
      aria-label={`Remove ${label} filter`}
      className="flex cursor-pointer items-center justify-center rounded border-none bg-transparent p-0.5 hover:bg-background-selected-pressed"
    >
      <MdClose size={14} />
    </button>
  </span>
);

const toggleValue = <T extends string>(values: T[], value: T): T[] =>
  values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];

const priorityName = (id: PriorityId): string =>
  prioritiesMock.find((priority) => priority.id === id)?.name ?? id;

const userName = (users: User[], id: UserId): string =>
  users.find((user) => user.id === id)?.name ?? id;

interface FilterBarProps {
  users: User[];
  categories: Category[];
}

interface FacetProps {
  label: string;
  isActive: boolean;
  children: ReactNode;
}

interface FacetItemProps {
  checked: boolean;
  onCheckedChange: () => void;
  children: ReactNode;
}

interface FilterChipProps {
  label: string;
  icon?: ReactNode;
  onRemove: () => void;
}
