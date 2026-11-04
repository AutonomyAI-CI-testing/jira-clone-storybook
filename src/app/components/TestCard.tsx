import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const INPUT_CLASSES =
  "rounded-md border border-[var(--DarkNeutral350)] bg-[var(--DarkNeutral200)] p-3 font-primary text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]";

const ACTION_BUTTON_CLASSES =
  "w-[170px] rounded bg-[var(--Orange800)] px-8 py-5 font-primary text-lg text-[var(--DarkNeutral800)] hover:bg-[var(--Orange700)]";

const SectionHeading = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3">
    <IoChevronUpOutline size={24} aria-hidden />
    <h3 className="font-primary-black text-2xl">{children}</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary text-lg">
        {label}
      </label>
      <IoInformationCircleOutline
        size={20}
        className="text-[var(--DarkNeutral1000)]"
        aria-hidden
      />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={INPUT_CLASSES}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 rounded bg-[var(--DarkNeutral100)] p-6 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <IoSettingsOutline
        size={24}
        className="text-[var(--DarkNeutral800)]"
        aria-hidden
      />
    </div>

    <div className="flex items-center gap-3">
      <IoChevronUpOutline size={20} aria-hidden />
      <span className="truncate font-primary-light text-base text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="flex flex-col gap-4 pt-6">
      <SectionHeading>Add New Design</SectionHeading>

      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-4 pt-2">
        <button type="button" className={ACTION_BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASSES}>
          Prepare
        </button>
      </div>
    </div>

    <h3 className="pt-6 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
