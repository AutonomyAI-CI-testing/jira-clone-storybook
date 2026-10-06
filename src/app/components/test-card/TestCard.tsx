import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col gap-6 bg-elevation-surface p-5 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xs text-font">UI magician Agent</h1>
        <FiSettings className="h-4 w-4 text-font-subtle" aria-hidden />
      </div>

      <div className="flex items-center gap-2">
        <FiChevronUp
          className="h-3.5 w-3.5 shrink-0 text-font-subtle"
          aria-hidden
        />
        <p className="min-w-0 flex-1 truncate text-2xs text-font-subtle">
          From entire frame to a single component
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <FiChevronUp
            className="h-3.5 w-3.5 shrink-0 text-font-subtle"
            aria-hidden
          />
          <h2 className="text-xs text-font">Add New Design</h2>
        </div>

        <LabeledField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <LabeledField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />

        <div className="mt-1 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded bg-background-brand-bold px-4 py-2 text-2xs text-font-inverse"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-background-brand-bold px-4 py-2 text-2xs text-font-inverse"
          >
            Prepare
          </button>
        </div>
      </div>

      <h2 className="text-xs text-font">Recent Breakdowns</h2>
    </div>
  );
};

const LabeledField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <label className="flex flex-col gap-1">
    <span className="flex items-center gap-2 text-2xs text-font-subtle">
      {label}
      <FiInfo className="h-3.5 w-3.5 shrink-0 text-font-subtle" aria-hidden />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-border-input bg-background-input px-2 py-2 text-2xs text-font placeholder:text-font-subtlest"
    />
  </label>
);

export default TestCard;
