import type { ReactNode } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const INPUT_CLASSES =
  "mt-3 w-full rounded-md border-none bg-background-input p-3 text-sm text-font outline-2 outline-border-input placeholder:text-font-subtle";

// The rust fill of the two buttons has no semantic token in this repo's palette
// (the nearest semantic colours resolve to a salmon red), so it is kept as a
// literal taken from the design.
const BUTTON_CLASSES = "rounded bg-[#b23a0e] px-6 py-3 text-sm text-[#e08b6a]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <FiSettings className="text-icon" size={24} aria-hidden />
      </div>

      <div className="mt-8">
        <ChevronRow>
          <span className="truncate text-sm text-font-subtle">
            From entire frame to a singl...
          </span>
        </ChevronRow>
      </div>

      <div className="mt-16">
        <ChevronRow>
          <h2 className="font-primary-bold text-xl">Add New Design</h2>
        </ChevronRow>
      </div>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-8 flex gap-4">
        <button type="button" className={BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSES}>
          Prepare
        </button>
      </div>

      <h2 className="mt-16 font-primary-bold text-xl text-font-subtle">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ChevronRow = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className="flex items-center gap-2">
    <FiChevronUp size={20} aria-hidden />
    {children}
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-6">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-sm text-font-subtle">
        {label}
      </label>
      <FiInfo className="text-icon-subtle" size={16} aria-hidden />
    </div>
    <input id={id} placeholder={placeholder} className={INPUT_CLASSES} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
