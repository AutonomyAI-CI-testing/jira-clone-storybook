import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-8">
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="text-[16px]">
        {label}
      </label>
      <FiInfo aria-hidden="true" className="text-[20px]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-4 h-[64px] w-full rounded-[2px] border border-[#8a8a8a] bg-[#232323] px-4 text-[18px] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const BUTTON_CLASS =
  "h-[70px] w-[170px] cursor-pointer rounded-lg bg-[#8b3a12] font-primary-bold text-[20px] text-[#d09a78]";

/**
 * Static reproduction of the Figma panel: a dark, plugin-style card with a
 * title bar, two labelled fields and a button pair. Self-contained and
 * prop-less, and deliberately not wired into any route.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1a1a1a] px-10 py-6 font-primary text-[#e6e6e6]"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px]">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="cursor-pointer text-[24px] text-[#b0b0b0]"
      >
        <FiSettings aria-hidden="true" />
      </button>
    </header>

    <div className="mt-4 flex items-center gap-3 text-[15px] text-[#9a9a9a]">
      <FiChevronUp aria-hidden="true" className="shrink-0 text-[16px]" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <FiChevronUp aria-hidden="true" className="text-[24px]" />
      <h2 className="font-primary-bold text-[26px]">Add New Design</h2>
    </div>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-8 flex gap-[30px]">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={BUTTON_CLASS}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-bold text-[24px]">Recent Breakdowns</h2>
  </div>
);
