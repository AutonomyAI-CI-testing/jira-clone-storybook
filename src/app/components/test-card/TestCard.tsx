import cx from "classix";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELD_CLASS =
  "h-9 w-full rounded border border-border-bold bg-elevation-surface-raised px-4 text-2xs font-primary-bold text-font-subtlest placeholder:text-font-subtlest";

const ACTION_BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-2xs font-primary-bold text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[254px] flex-col bg-elevation-surface px-5 pb-16 pt-5 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <span className="text-xs font-primary-bold text-font">
        UI magician Agent
      </span>
      <IoSettingsOutline
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-icon"
      />
    </div>

    <div className="mt-4 flex items-center gap-2 text-2xs font-primary-bold text-font-subtlest">
      <IoChevronUp aria-hidden="true" className="h-[5px] w-2 shrink-0" />
      <span className="min-w-0 truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-2 text-xs font-primary-bold text-font">
      <IoChevronUp aria-hidden="true" className="h-2 w-3 shrink-0" />
      <span>Add New Design</span>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-6 flex justify-end gap-4">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <span className="mt-12 text-xs font-primary-bold text-font">
      Recent Breakdowns
    </span>
  </div>
);

const Field = ({
  label,
  placeholder,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className="text-2xs font-primary-bold text-font-subtle">
        {label}
      </span>
      <IoInformationCircleOutline
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 text-icon-subtle"
      />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={cx(FIELD_CLASS, "mt-2")}
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
