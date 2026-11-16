import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button/button";

/**
 * Smoke-test card laying out the "UI magician Agent" Figma frame.
 * Presentational only: no props, no state, no data.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[508px] flex-col gap-6 rounded-md bg-elevation-surface-overlay p-5 text-font"
    >
      <header className="flex items-center justify-between gap-4">
        <h2 className="font-primary-black text-xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Open settings"
          className="flex-center rounded-full p-1 text-font-subtle hover:bg-background-neutral-hovered hover:text-font"
        >
          <FiSettings size={24} aria-hidden="true" />
        </button>
      </header>

      <div className="flex items-center gap-2 text-font-subtle">
        <FiChevronUp size={20} aria-hidden="true" />
        <span className="truncate font-primary-bold text-sm">
          From entire frame to a singl…
        </span>
      </div>

      <h3 className="flex items-center gap-2 font-primary-black text-xl">
        <FiChevronUp size={24} aria-hidden="true" />
        Add New Design
      </h3>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex items-center justify-center gap-4">
        <Button>Awesome</Button>
        <Button>Prepare</Button>
      </div>

      <h3 className="font-primary-black text-xl">Recent Breakdowns</h3>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-2">
      <span className="flex items-center gap-2 font-primary-bold text-sm text-font-subtle">
        {label}
        <FiInfo size={16} aria-hidden="true" />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-md border-none bg-background-input p-3 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus-visible:outline-border-brand"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
