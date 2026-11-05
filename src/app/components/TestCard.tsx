import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const inputClasses =
  "mt-3 h-14 w-full rounded border border-border-bold bg-transparent px-4 font-primary text-font placeholder:text-font-subtlest";

const buttonClasses =
  "h-14 w-[170px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--DarkNeutral900)]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="text-base text-font-subtle">
        {label}
      </label>
      <IoInformationCircleOutline
        size={20}
        className="text-font-subtle"
        aria-hidden="true"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={inputClasses}
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
    className="dark w-[508px] bg-elevation-surface p-8 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <IoSettingsOutline
        size={28}
        className="text-icon"
        aria-hidden="true"
      />
    </div>

    <div className="mt-6 flex items-center gap-2 text-lg text-font-subtle">
      <IoChevronUp size={20} aria-hidden="true" />
      <span className="min-w-0 truncate">
        From entire frame to a single component
      </span>
    </div>

    <h2 className="mt-24 flex items-center gap-2 font-primary-black text-2xl">
      <IoChevronUp size={24} aria-hidden="true" />
      Add New Design
    </h2>

    <Field
      id="testElem-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="testElem-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-10 flex gap-8">
      <button type="button" className={buttonClasses}>
        Awesome
      </button>
      <button type="button" className={buttonClasses}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
