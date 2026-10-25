import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static recreation of the "UI magician Agent" panel from the Figma frame.
 * Self-contained: takes no props, holds no state and wires nothing up.
 *
 * The frame's warm brown panel and burnt orange buttons have no matching
 * semantic token in this repo's scale, so they are written as literal values.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#3a2a21] px-10 py-12 font-primary text-[#c9c3bf]"
  >
    <header className="flex items-center justify-between">
      <h1 className={headingClass}>UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="cursor-pointer rounded p-1 hover:bg-[#4a362b] active:bg-[#543d30]"
      >
        <FiSettings size={22} />
      </button>
    </header>

    <div className="mt-8 flex items-center gap-3 text-[17px] text-[#a89f99]">
      <FiChevronUp size={22} aria-hidden="true" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <FiChevronUp size={22} aria-hidden="true" />
      <h2 className={headingClass}>Add New Design</h2>
    </div>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex gap-9">
      <button type="button" className={actionClass}>
        Awesome
      </button>
      <button type="button" className={actionClass}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-24 ${headingClass}`}>Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-10">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[18px]">
        {label}
      </label>
      <FiInfo size={20} aria-hidden="true" />
    </div>
    <input id={id} readOnly placeholder={placeholder} className={inputClass} />
  </div>
);

const headingClass = "font-primary-bold text-[22px] leading-none";

const inputClass =
  "mt-5 w-full rounded border border-[#d9d5d2] bg-transparent px-5 py-5 text-[17px] text-[#c9c3bf] placeholder:text-[#8a8079]";

const actionClass =
  "cursor-pointer rounded-md bg-[#8e4b2a] px-10 py-5 font-primary-bold text-[18px] text-[#e8d9cf] hover:bg-[#7d4124] active:bg-[#6d391f]";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
