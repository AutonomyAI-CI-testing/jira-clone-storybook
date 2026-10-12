import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark mx-auto flex w-[340px] flex-col gap-6 rounded-lg bg-elevation-surface p-5 font-primary text-font"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
        <HiCog size={22} className="text-icon-subtle" aria-hidden="true" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 text-font-subtle">
        <HiChevronUp size={20} aria-hidden="true" />
        <span className="truncate font-primary-light text-sm">
          From entire frame to a singl…
        </span>
      </div>

      {/* Section heading */}
      <div className="flex items-center gap-2 font-primary-bold">
        <HiChevronUp size={22} aria-hidden="true" />
        <span>Add New Design</span>
      </div>

      <TestField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />

      <TestField
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      {/* Actions */}
      <div className="flex gap-4">
        <button
          type="button"
          className="flex-1 rounded bg-background-brand-bold px-6 py-3 font-primary-bold text-font-inverse"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-background-brand-bold px-6 py-3 font-primary-bold text-font-inverse"
        >
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <h2 className="font-primary-bold">Recent Breakdowns</h2>
    </div>
  );
};

const TestField = ({ label, placeholder }: TestFieldProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-font-subtle">
        <span className="font-primary-light text-sm">{label}</span>
        <HiInformationCircle size={18} aria-hidden="true" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded border border-border-input bg-background-input px-3 py-3 font-primary-light text-font placeholder:text-font-subtlest"
      />
    </div>
  );
};

interface TestFieldProps {
  label: string;
  placeholder: string;
}
