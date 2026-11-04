import * as Select from "@radix-ui/react-select";
import cx from "classix";
import { HiFlag, HiUsers } from "react-icons/hi";
import { prioritiesMock } from "@domain/priority/priority.mock";
import { IssueFilterParam } from "@domain/filter/filter";
import { PriorityIcon } from "@app/components/priority-icon/priority-icon";
import { UserAvatar } from "@app/components/user-avatar/user-avatar";
import { useIssueFilters } from "@app/hooks/useIssueFilters";
import { useProjectStore } from "@app/ui/main/project/project.store";

const ALL_FILTER_VALUE = "all";

const triggerClass = cx(
  "flex cursor-pointer items-center justify-center rounded border-none bg-background-brand-subtlest px-3 py-1.5 text-xs text-font-brand",
  "hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed"
);

const contentClass =
  "select-none rounded bg-elevation-surface-overlay p-1.5 shadow-blue";

const itemClass = cx(
  "flex cursor-pointer items-center justify-start gap-2 rounded border-none px-2 py-2 text-xs leading-none text-font-brand",
  "outline-none hover:bg-background-brand-subtlest-hovered focus:bg-background-brand-subtlest-hovered",
  "active:bg-background-brand-subtlest-pressed"
);

export const IssueFilters = (): JSX.Element => {
  const { project } = useProjectStore();
  const { filters, setFilter } = useIssueFilters();

  const priorityOptions: FilterOption[] = prioritiesMock.map((priority) => ({
    value: priority.id,
    label: priority.name,
    icon: <PriorityIcon priority={priority.id} size={16} />,
  }));

  const assigneeOptions: FilterOption[] = project.users.map((user) => ({
    value: user.id,
    label: user.name,
    icon: <UserAvatar {...user} size={20} />,
  }));

  return (
    <div className="ml-3 flex items-center gap-2">
      <FilterSelect
        param="priority"
        label="Priority"
        value={filters.priority}
        options={priorityOptions}
        idleIcon={<HiFlag size={16} />}
        onChange={setFilter}
      />
      <FilterSelect
        param="assignee"
        label="Assignee"
        value={filters.assignee}
        options={assigneeOptions}
        idleIcon={<HiUsers size={16} />}
        onChange={setFilter}
      />
    </div>
  );
};

const FilterSelect = (props: FilterSelectProps): JSX.Element => {
  const { param, label, value, options, idleIcon, onChange } = props;
  const selectedOption = options.find((option) => option.value === value);

  const handleValueChange = (nextValue: string): void => {
    onChange(param, nextValue === ALL_FILTER_VALUE ? null : nextValue);
  };

  return (
    <Select.Root
      value={value || ALL_FILTER_VALUE}
      onValueChange={handleValueChange}
    >
      <Select.Trigger
        className={triggerClass}
        aria-label={`Filter by ${label.toLowerCase()}`}
      >
        <div className="mr-2 flex items-center">
          {selectedOption ? selectedOption.icon : idleIcon}
        </div>
        <Select.Value>{`${label}: ${selectedOption ? selectedOption.label : "All"}`}</Select.Value>
      </Select.Trigger>
      <Select.Content className={contentClass}>
        <Select.ScrollUpButton />
        <Select.Viewport>
          <Select.Item value={ALL_FILTER_VALUE} className={itemClass}>
            {idleIcon}
            <Select.ItemText>All</Select.ItemText>
          </Select.Item>
          {options.map((option) => (
            <Select.Item
              key={option.value}
              value={option.value}
              className={itemClass}
            >
              {option.icon}
              <Select.ItemText>{option.label}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Root>
  );
};

interface FilterSelectProps {
  param: IssueFilterParam;
  label: string;
  value: string | null;
  options: FilterOption[];
  idleIcon: JSX.Element;
  onChange: (param: IssueFilterParam, value: string | null) => void;
}

interface FilterOption {
  value: string;
  label: string;
  icon: JSX.Element;
}
