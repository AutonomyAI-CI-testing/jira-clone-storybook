import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * The frame's action buttons use a rust fill that has no counterpart in this
 * repo's token palette — the nearest, Orange800 (#974f0c), is a visibly
 * different shade — so this single value stays a literal.
 */
const ACTION_BUTTON =
  "w-[175px] rounded-lg bg-[#a34a2b] py-6 text-lg text-white hover:bg-[#8f3f24] active:bg-[#7c3620]";

const INPUT =
  "mt-3 w-full rounded-md border border-border-bold bg-background-input px-4 py-3 text-font placeholder:text-font-subtlest focus-visible:outline-none";

const ACTION_LABELS = ["Awesome", "Prepare"];

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2 text-font-subtle">
      <label htmlFor={id}>{label}</label>
      <FiInfo size={18} aria-hidden />
    </div>
    <input id={id} readOnly placeholder={placeholder} className={INPUT} />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface-sunken p-10 text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="text-icon-subtle hover:text-icon"
      >
        <FiSettings size={22} />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3 text-font-subtle">
      <FiChevronUp size={20} aria-hidden />
      <span>From entire frame to a singl...</span>
    </div>

    <h2 className="mt-24 flex items-center gap-2 font-primary-black text-2xl">
      <FiChevronUp size={22} aria-hidden />
      Add New Design
    </h2>

    <div className="mt-12 space-y-8">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex justify-center gap-8">
      {ACTION_LABELS.map((label) => (
        <button type="button" className={ACTION_BUTTON} key={label}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
