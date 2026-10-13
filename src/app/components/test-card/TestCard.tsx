import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component reproducing the "UI magician Agent" settings panel from
 * the attached Figma frame.
 *
 * Self-contained: no props, no state, no event handling. The colours and sizes
 * are the design's own approximate values rather than this app's semantic
 * tokens, because the frame carries a rust accent and a near-black panel that
 * the token set has no equivalent for.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col bg-[#1a1a1a] px-8 py-11 text-[#c9c9c9]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex items-center justify-center"
      >
        <FiSettings size={24} />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-3">
      <FiChevronUp size={18} aria-hidden />
      <span className="text-base text-[#b5b5b5]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-14 flex items-center gap-3">
      <FiChevronUp size={22} aria-hidden />
      <h2 className="text-xl font-bold">Add New Design</h2>
    </div>

    <div className="mt-10 flex flex-col gap-8">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex gap-6">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-16 text-xl font-bold">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-4">
      <span className="text-[17px]">{label}</span>
      <FiInfo size={22} aria-hidden />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 h-14 w-full rounded-[2px] border border-[#8f8f8f] bg-[#2f2f2f] px-4 text-[15px] text-[#e0e0e0] placeholder:text-[#9a9a9a]"
    />
  </div>
);

const PanelButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="rounded-lg bg-[#9a4a1e] px-10 py-3 text-[17px] text-[#c98a5e]"
  >
    {children}
  </button>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
