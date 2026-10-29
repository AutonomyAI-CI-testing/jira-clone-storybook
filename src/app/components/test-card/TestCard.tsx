import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained by design: no props, no state, no behaviour. The frame is a
 * bespoke dark plugin panel whose near-black surface and rust buttons have no
 * semantic token in this project's palette, so the values are literals.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1c1c1c] p-5 font-primary text-[#c8c8c8]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-sm">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[#c8c8c8]"
      >
        <FiSettings size={18} />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-2 text-[#9a9a9a]">
      <FiChevronUp size={16} />
      <span className="truncate font-primary-light text-xs">
        From entire frame to a singl…
      </span>
    </div>

    <h2 className="mt-20 flex items-center gap-2 font-primary-bold text-base">
      <FiChevronUp size={18} />
      Add New Design
    </h2>

    <div className="mt-5">
      <Field label="Personal Access Token" value="figd_xxxxxxxxxxxxxxxxxxxx" />
    </div>

    <div className="mt-5">
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-7 flex justify-end gap-[18px]">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-[52px] font-primary-bold text-base">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, value, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center justify-between">
      <span className="font-primary text-xs">{label}</span>
      <FiInfo aria-hidden size={14} className="text-[#8f8f8f]" />
    </div>
    <input
      type="text"
      readOnly
      tabIndex={-1}
      aria-label={label}
      value={value}
      placeholder={placeholder}
      className="w-full rounded-[2px] border border-[#6f6f6f] bg-[#2a2a2a] px-3 py-1.5 font-primary-light text-xs placeholder:text-[#8f8f8f]"
    />
  </div>
);

const PanelButton = ({ children }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="w-[84px] rounded-[6px] bg-[#9d4a1e] py-2.5 font-primary text-sm"
  >
    {children}
  </button>
);

interface FieldProps {
  label: string;
  value?: string;
  placeholder?: string;
}

interface PanelButtonProps {
  children: React.ReactNode;
}
