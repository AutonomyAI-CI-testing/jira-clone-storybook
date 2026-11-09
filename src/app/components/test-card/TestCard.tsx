import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELD_INPUT_CLASS =
  "mt-2 w-full rounded-md border border-border-bold bg-background-input p-4 text-base placeholder:text-font-subtle";

const ACTION_BUTTON_CLASS =
  "flex-1 rounded-md bg-[var(--Orange800)] p-4 text-base text-white";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <IoSettingsOutline size={26} aria-hidden="true" />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <IoChevronUp size={20} aria-hidden="true" />
      <span className="truncate text-base text-font-subtle">
        From entire frame to a single component
      </span>
    </div>

    <section className="mt-[150px]">
      <div className="flex items-center gap-2">
        <IoChevronUp size={20} aria-hidden="true" />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <div className="mt-8">
        <Field
          id="test-personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-6">
        <Field
          id="test-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-[70px] font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <IoInformationCircleOutline size={18} aria-hidden="true" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={FIELD_INPUT_CLASS}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
