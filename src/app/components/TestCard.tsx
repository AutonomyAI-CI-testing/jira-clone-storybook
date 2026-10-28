import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no state and no handlers — the fields and
 * buttons are the frame's appearance, not working controls. Colours, sizes and
 * spacing are read off the design's exported style guide and are approximations,
 * not pixel matches.
 */

const BUTTON_LABELS = ["Awesome", "Prepare"];

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3">
    <p className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">{children}</p>
    <FiInfo aria-hidden size={15} className="shrink-0 text-[#a4a4a3]" />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <h2 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <FiSettings aria-hidden size={16} className="shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp aria-hidden size={10} className="shrink-0 text-[#8b9291]" />
      <p className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FiChevronUp aria-hidden size={14} className="shrink-0 text-[#b2b2b1]" />
      <h3 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <div className="mt-[28px]">
      <FieldLabel>Personal Access Token</FieldLabel>
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px]">
      <FieldLabel>Design URL</FieldLabel>
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-4">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
