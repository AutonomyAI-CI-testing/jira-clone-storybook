import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import cx from "classix";
import { MdFilterList } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import {
  Filter,
  filterTypeDict,
  isFilterOn,
  toFilterId,
} from "@domain/filter/filter";
import { prioritiesMock } from "@domain/priority/priority.mock";
import { useFilters } from "@app/hooks/useFilters";
import { useProjectStore } from "@app/ui/main/project/project.store";
import { Button } from "@app/components/button/button";
import { PriorityIcon } from "@app/components/priority-icon/priority-icon";
import { UserAvatar } from "@app/components/user-avatar/user-avatar";

export const Filters = (): JSX.Element => {
  const { project } = useProjectStore();
  const { filters, toggleFilter, clearFilters } = useFilters();
  const hasFilters = filters.length > 0;

  const itemStyle = cx(
    "flex cursor-pointer select-none items-center gap-2 rounded p-2",
    "font-primary-bold text-sm text-font",
    "hover:bg-background-selected focus:bg-background-selected",
    "focus-visible:outline-border-brand"
  );

  const groupLabelStyle = cx(
    "px-2 pb-1 pt-0.5",
    "font-primary-light text-2xs uppercase text-font-subtlest"
  );

  const renderItem = (
    filter: Filter,
    label: string,
    icon: JSX.Element
  ): JSX.Element => (
    <DropdownMenu.CheckboxItem
      key={toFilterId(filter.type, filter.value)}
      checked={isFilterOn(filters, filter)}
      onCheckedChange={() => toggleFilter(filter)}
      // Keep the menu open so several filters can be picked in one go
      onSelect={(e) => e.preventDefault()}
      className={itemStyle}
    >
      <span className="flex w-4 items-center justify-center">
        <DropdownMenu.ItemIndicator>
          <BsCheckLg size={12} />
        </DropdownMenu.ItemIndicator>
      </span>
      {icon}
      <span>{label}</span>
    </DropdownMenu.CheckboxItem>
  );

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="subtlest"
          className="px-[12px] py-[6px] text-xs"
          aria-label={
            hasFilters ? `Open filters, ${filters.length} active` : "Open filters"
          }
        >
          <MdFilterList size={16} />
          <span>Filter</span>
          {hasFilters && (
            <span className="rounded-full bg-background-neutral px-1.5 py-0.5 font-primary-bold text-2xs text-font">
              {filters.length}
            </span>
          )}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        align="start"
        className="z-50 rounded-md bg-elevation-surface-overlay p-2 shadow-blue"
      >
        <DropdownMenu.Label className={groupLabelStyle}>
          {filterTypeDict.assignee}
        </DropdownMenu.Label>
        {/* The user list is the long one, so it scrolls on its own and keeps
            the priority group and Clear all in view */}
        <div className="max-h-[240px] overflow-y-auto scrollbar-hide">
          {project.users.map((user) =>
            renderItem({ type: "assignee", value: user.id }, user.name, (
              <UserAvatar {...user} size={24} />
            ))
          )}
        </div>
        <DropdownMenu.Separator className="my-1 h-px bg-border" />
        <DropdownMenu.Label className={groupLabelStyle}>
          {filterTypeDict.priority}
        </DropdownMenu.Label>
        {prioritiesMock.map((priority) =>
          renderItem({ type: "priority", value: priority.id }, priority.name, (
            <PriorityIcon priority={priority.id} size={16} />
          ))
        )}
        <DropdownMenu.Separator className="my-1 h-px bg-border" />
        <DropdownMenu.Item
          onSelect={clearFilters}
          disabled={!hasFilters}
          title={hasFilters ? "Clear all filters" : "No filters applied"}
          className={cx(
            itemStyle,
            "justify-center",
            !hasFilters && "cursor-not-allowed opacity-50"
          )}
        >
          Clear all
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
