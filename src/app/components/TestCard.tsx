import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASSES =
  "mt-4 w-full rounded bg-background-input px-3 py-3 text-lg outline outline-2 outline-border-input placeholder:text-font-subtlest";
const BUTTON_CLASSES =
  "flex-1 cursor-pointer rounded-md bg-[var(--Orange700)] px-4 py-3 text-lg text-font-subtlest";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <FiInfo size={22} className="text-font-subtlest" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={FIELD_CLASSES}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] max-w-full flex-col bg-elevation-surface px-10 pb-12 pt-11 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center text-font"
      >
        <FiSettings size={26} />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <FiChevronUp size={24} className="shrink-0" />
      <span className="truncate text-lg">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <FiChevronUp size={30} className="shrink-0" />
      <span className="font-primary-bold text-2xl">Add New Design</span>
    </div>

    <div className="mt-11">
      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-7">
      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-16 flex gap-6">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={BUTTON_CLASSES}>
          {label}
        </button>
      ))}
    </div>

    <div className="mt-32 font-primary-bold text-2xl">Recent Breakdowns</div>
  </div>
);
