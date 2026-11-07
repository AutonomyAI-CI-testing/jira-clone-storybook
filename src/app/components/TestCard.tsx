import cx from "classix";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";

const fieldInputClass =
  "mt-3 h-9 w-full rounded border border-border-bold bg-elevation-surface-raised px-[19px] font-primary-bold text-2xs text-font placeholder:text-font-subtlest";

const actionButtonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-font-subtle";

const ACTIONS = ["Awesome", "Prepare"];

interface FieldProps {
  className?: string;
  label: string;
  placeholder: string;
}

const Field = ({ className, label, placeholder }: FieldProps) => (
  <label className={cx("block", className)}>
    <span className="flex items-center gap-2 font-primary-bold text-2xs text-font-subtle">
      {label}
      <HiInformationCircle
        size={15}
        aria-hidden
        className="shrink-0 text-font-subtlest"
      />
    </span>
    <input type="text" placeholder={placeholder} className={fieldInputClass} />
  </label>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex min-h-[508px] w-[254px] flex-col rounded bg-elevation-surface font-primary text-font"
  >
    <div className="h-[9px] w-full bg-elevation-surface-sunken" />

    <div className="flex flex-col px-5 pb-5">
      <div className="flex items-center justify-between pt-5">
        <span className="font-primary-bold text-xs">UI magician Agent</span>
        <MdOutlineSettings
          size={16}
          aria-hidden
          className="shrink-0 text-font-subtle"
        />
      </div>

      <div className="mt-3.5 flex items-center gap-2">
        <HiChevronUp
          size={12}
          aria-hidden
          className="shrink-0 text-font-subtle"
        />
        <span className="truncate font-primary-bold text-2xs text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[72px] flex items-center gap-2">
        <HiChevronUp
          size={12}
          aria-hidden
          className="shrink-0 text-font-subtle"
        />
        <span className="font-primary-bold text-xs text-font-subtle">
          Add New Design
        </span>
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

      <div className="mt-[22px] flex justify-center gap-4">
        {ACTIONS.map((action) => (
          <button key={action} type="button" className={actionButtonClass}>
            {action}
          </button>
        ))}
      </div>

      <span className="mt-[46px] font-primary-bold text-xs">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
