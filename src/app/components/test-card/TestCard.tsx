import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test card: a self-contained, static reproduction of the
 * "UI magician Agent" panel. Takes no props and holds no state.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col gap-6 bg-elevation-surface-raised p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-lg">UI magician Agent</h2>
      <FiSettings className="text-font-subtle" size={20} aria-hidden="true" />
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <FiChevronUp size={16} aria-hidden="true" />
      <span className="font-primary-light text-sm">
        From entire frame to a singl...
      </span>
    </div>

    <div className="flex items-center gap-2">
      <FiChevronUp size={16} aria-hidden="true" />
      <h3 className="font-primary-bold text-sm">Add New Design</h3>
    </div>

    <CardField
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <CardField label="Design URL" placeholder="https://www.figma.com/file/:" />

    <div className="flex gap-3">
      <button
        type="button"
        className="flex-1 rounded bg-background-brand-bold px-4 py-2 font-primary text-sm text-font-inverse"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded bg-background-brand-bold px-4 py-2 font-primary text-sm text-font-inverse"
      >
        Prepare
      </button>
    </div>

    <h3 className="font-primary-bold text-sm">Recent Breakdowns</h3>
  </div>
);

const CardField = ({ label, placeholder }: CardFieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="font-primary-light text-sm text-font-subtle">
        {label}
      </span>
      <FiInfo className="text-font-subtle" size={14} aria-hidden="true" />
    </div>
    <input
      readOnly
      className="rounded-md border-none bg-background-input p-3 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtle"
      placeholder={placeholder}
      aria-label={label}
    />
  </div>
);

interface CardFieldProps {
  label: string;
  placeholder: string;
}

export default TestCard;
