import cx from "classix";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const ACTION_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078] transition-colors hover:bg-[#96431c]";

const INPUT_CLASS =
  "mt-3 h-9 w-full rounded border border-border-bold bg-background-input px-3 font-primary-light text-2xs text-font placeholder:text-font-subtlest";

const ActionButton = ({ label }: ActionButtonProps): JSX.Element => (
  <button type="button" className={ACTION_CLASS}>
    {label}
  </button>
);

const Field = ({ label, placeholder, className }: FieldProps): JSX.Element => (
  <div className={cx("flex flex-col", className)}>
    <div className="flex items-center justify-between text-font-subtle">
      <span className="font-primary-light text-2xs">{label}</span>
      <IoInformationCircleOutline size={15} />
    </div>
    <input
      aria-label={label}
      placeholder={placeholder}
      className={INPUT_CLASS}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[254px] flex-col rounded bg-elevation-surface-raised p-5 text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-0.5 text-font-subtle transition-colors hover:bg-background-neutral-hovered"
      >
        <IoSettingsOutline size={16} />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-3 text-font-subtlest">
      <IoChevronUp size={10} />
      <span className="truncate font-primary-light text-2xs">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <IoChevronUp size={12} className="text-font-subtle" />
      <h3 className="font-primary-bold text-xs">Add New Design</h3>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-7"
    />
    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3"
    />

    <div className="mt-6 flex gap-4 pl-6">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h3 className="mt-12 font-primary-bold text-xs">Recent Breakdowns</h3>
  </div>
);

interface ActionButtonProps {
  label: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
