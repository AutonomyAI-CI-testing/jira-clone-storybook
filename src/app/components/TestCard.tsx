import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Panel from the "UI magician Agent" Figma design. Self-contained: no props, no
 * state, no data.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] max-w-full bg-elevation-surface p-8 text-font"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="rounded-full p-1 hover:bg-background-neutral"
        >
          <IoSettingsOutline className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <IoChevronUpOutline className="h-5 w-5 shrink-0 text-font-subtlest" />
        <span className="text-font-subtlest">
          From entire frame to a singl…
        </span>
      </div>

      {/* Empty gap the original panel keeps between the two sections. */}
      <div className="mt-36" />

      <div className="flex items-center gap-3">
        <IoChevronUpOutline className="h-5 w-5 shrink-0" />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <Field
        id="testcard-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testcard-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      <div className="mt-8 flex gap-9">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-20 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-8">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <IoInformationCircleOutline aria-hidden className="h-5 w-5" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 h-16 w-full rounded-md border border-border-bold bg-background-input px-4 text-font placeholder:text-font-subtlest"
    />
  </div>
);

/**
 * The frame's rust has no semantic token in this design system, so the value is a
 * deliberate literal rather than a borrowed status colour.
 */
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="h-[72px] w-[170px] rounded-md bg-[#a8502a] font-primary text-lg text-font-inverse hover:bg-[#93441f] active:bg-[#7d3a1b]"
  >
    {children}
  </button>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
