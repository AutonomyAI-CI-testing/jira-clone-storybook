import cx from "classix";
import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const INPUT_CLASS = cx(
  "h-[69px] w-full rounded-[2px] border border-[color:var(--DarkNeutral600)]",
  "bg-[var(--DarkNeutral250)] px-10 text-[15px] text-[var(--DarkNeutral1100)]",
  "outline-none placeholder:text-[var(--Neutral500)]"
);

const SECONDARY_TEXT_CLASS = "text-[var(--Neutral500)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-10 pb-10 pt-8 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[18px]">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className={cx(
          "outline-none outline-2 outline-transparent",
          "hover:outline-border-brand focus-visible:outline-border-brand",
          SECONDARY_TEXT_CLASS
        )}
      >
        <IoSettingsOutline size={28} aria-hidden="true" />
      </button>
    </div>

    <div className={cx("mt-3 flex items-center gap-3", SECONDARY_TEXT_CLASS)}>
      <IoChevronUpOutline size={20} aria-hidden="true" />
      <span className="truncate text-[15px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <IoChevronUpOutline size={22} aria-hidden="true" />
      <h3 className="font-primary-bold text-[19px]">Add New Design</h3>
    </div>

    <Field
      className="mt-14"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-10"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-14 flex justify-end gap-9">
      <button
        type="button"
        className={cx(
          "h-[68px] w-[170px] rounded-lg bg-[var(--Orange800)]",
          "text-[15px] text-[var(--DarkNeutral1100)]"
        )}
      >
        Awesome
      </button>
      <button
        type="button"
        className={cx(
          "h-[68px] w-[170px] rounded-lg bg-[var(--Orange800)]",
          "text-[15px] text-[var(--DarkNeutral1100)]"
        )}
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-[70px] font-primary-bold text-[19px]">
      Recent Breakdowns
    </h3>
  </div>
);

const Field = ({ label, placeholder, className }: FieldProps): JSX.Element => (
  <div className={cx("flex flex-col gap-3", className)}>
    <div className="flex items-center gap-3">
      <span className="text-[15px]">{label}</span>
      <IoInformationCircleOutline
        size={30}
        className={SECONDARY_TEXT_CLASS}
        aria-hidden="true"
      />
    </div>
    <input type="text" placeholder={placeholder} className={INPUT_CLASS} />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
