import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const TestField = ({ id, label, placeholder }: TestFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label htmlFor={id} className="text-lg text-font">
        {label}
      </label>
      <FiInfo aria-hidden="true" size={22} className="text-icon" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={cx(
        "w-full rounded-md border border-border-bold bg-transparent",
        "p-3 text-lg text-font placeholder:text-font-subtlest"
      )}
    />
  </div>
);

const TestButton = ({ label }: TestButtonProps): JSX.Element => (
  <button
    type="button"
    className={cx(
      "h-[74px] w-[169px] rounded-md font-primary-bold text-xl",
      "bg-[var(--Red800)] text-[var(--DarkNeutral1000)]",
      "hover:bg-[var(--Red700)]"
    )}
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  // The dark class is this repo's own theme mechanism: it re-points every
  // semantic --color-* alias, so the panel's dark surfaces come from tokens.
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-6 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-3xl text-font">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Settings"
        className="text-icon hover:text-icon-brand"
      >
        <FiSettings size={26} />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-2 text-font-subtle">
      <FiChevronUp size={22} className="shrink-0" />
      <span className="truncate text-xl">From entire frame to a singl...</span>
    </div>

    <h3 className="mt-16 flex items-center gap-2 font-primary-black text-2xl text-font">
      <FiChevronUp size={24} className="shrink-0" />
      Add New Design
    </h3>

    <div className="mt-8 flex flex-col gap-6">
      <TestField
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <TestField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex gap-8">
      <TestButton label="Awesome" />
      <TestButton label="Prepare" />
    </div>

    <h3 className="mt-16 font-primary-black text-2xl text-font">
      Recent Breakdowns
    </h3>
  </div>
);

interface TestFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface TestButtonProps {
  label: string;
}
