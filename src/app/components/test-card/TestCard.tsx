import cx from "classix";
import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-elevation-surface px-6 pb-12 pt-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-icon hover:bg-background-brand-subtlest hover:text-icon-brand"
      >
        <MdOutlineSettings size={22} />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-2 text-font-subtlest">
      <HiChevronUp className="shrink-0" size={20} />
      <span className="truncate text-sm">
        From entire frame to a single component with every layer and style
      </span>
    </div>

    <div className="mt-44 flex items-center gap-2">
      <HiChevronUp className="shrink-0 text-font-subtle" size={22} />
      <h2 className="font-primary-bold text-lg">Add New Design</h2>
    </div>

    <Field
      className="mt-20"
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-10"
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-14 flex gap-9">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[72px] w-[174px] cursor-pointer rounded-lg bg-[var(--Orange800)] font-primary text-font-subtle"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);

const Field = ({
  className,
  id,
  label,
  placeholder,
}: FieldProps): JSX.Element => (
  <div className={cx("flex flex-col gap-3", className)}>
    <div className="flex items-center gap-2">
      <label className="text-sm text-font-subtle" htmlFor={id}>
        {label}
      </label>
      <HiOutlineInformationCircle
        aria-hidden="true"
        className="shrink-0 text-font-subtle"
        size={18}
      />
    </div>
    <input
      className="h-16 w-full rounded border border-border-bold bg-background-input px-5 text-sm text-font placeholder:text-font-subtlest"
      id={id}
      placeholder={placeholder}
      type="text"
    />
  </div>
);

interface FieldProps {
  className?: string;
  id: string;
  label: string;
  placeholder: string;
}
