import { useState } from "react";
import cx from "classix";
import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const MUTED_TEXT = "text-[var(--Neutral500)]";

const FIELD_CLASS =
  "mt-3 w-full rounded-md border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral100)] p-3 font-primary text-base text-[var(--DarkNeutral1100)] outline-none placeholder:text-[var(--Neutral500)]";

const ACTION_LABELS = ["Awesome", "Prepare"];

const SECTION_TITLE = "font-primary-black text-2xl";

const SectionHeader = ({ children }: { children: string }): JSX.Element => (
  <div className="flex items-center gap-3">
    <IoChevronUpOutline aria-hidden="true" size={20} className={MUTED_TEXT} />
    <span className={SECTION_TITLE}>{children}</span>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="font-primary text-base">
          {label}
        </label>
        <IoInformationCircleOutline
          aria-hidden="true"
          size={18}
          className={MUTED_TEXT}
        />
      </div>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
        className={FIELD_CLASS}
      />
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-10 pb-10 pt-11 text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <button
        type="button"
        aria-label="Settings"
        className={cx("rounded-full p-1", MUTED_TEXT)}
      >
        <IoSettingsOutline aria-hidden="true" size={22} />
      </button>
    </div>

    <div className={cx("mt-12 flex items-center gap-3", MUTED_TEXT)}>
      <IoChevronUpOutline aria-hidden="true" size={18} />
      <span className="font-primary-light text-base">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-40">
      <SectionHeader>Add New Design</SectionHeader>
    </div>

    <div className="mt-12">
      <Field
        id="testcard-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field
        id="testcard-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex gap-5">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className={cx(
            "rounded-md bg-[var(--Orange800)] px-8 py-3 font-primary-bold text-lg",
            MUTED_TEXT
          )}
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-24">
      <span className={SECTION_TITLE}>Recent Breakdowns</span>
    </div>
  </div>
);
