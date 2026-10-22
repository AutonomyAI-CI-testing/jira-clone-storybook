import cx from "classix";
import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const inputClass = cx(
  "mt-1 w-full rounded-md border-none bg-background-input px-2 py-2",
  "outline outline-2 outline-border-input duration-200 ease-in-out",
  "placeholder:font-primary-light placeholder:text-sm placeholder:text-font-subtlest",
  "hover:bg-background-input-hovered focus:bg-background-input-pressed focus:outline-border-brand"
);

const actionButtonClass = cx(
  "flex-1 cursor-pointer rounded bg-[var(--Orange700)] px-4 py-2.5",
  "font-primary-bold text-sm text-white",
  "hover:bg-[var(--Orange800)] active:bg-[var(--Orange800)]"
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded bg-elevation-surface p-5 font-primary text-font"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-font-subtle hover:text-font"
      >
        <HiOutlineCog size={20} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <HiOutlineChevronUp
        size={16}
        aria-hidden="true"
        className="shrink-0 text-font-subtle"
      />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <HiOutlineChevronUp size={20} aria-hidden="true" className="shrink-0" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-6 space-y-5">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-6 flex gap-4">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center justify-between gap-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <HiOutlineInformationCircle
        size={16}
        aria-hidden="true"
        className="shrink-0 text-font-subtle"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={inputClass}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
