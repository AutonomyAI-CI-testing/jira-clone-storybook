/**
 * Smoke-test component reproducing the "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no imports, no state. Colours are the
 * frame's literal values rather than theme tokens, so the panel renders
 * identically in every app theme.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 py-5 font-primary"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span
        aria-hidden="true"
        className="text-[16px] leading-[16px] text-[#b5b5b5]"
      >
        ⚙
      </span>
    </div>

    {/* Collapsed row */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <span
        aria-hidden="true"
        className="h-[5px] w-[5px] rotate-45 border-l-2 border-t-2 border-[#8b9291]"
      />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-[77px] flex items-center gap-[9px]">
      <span
        aria-hidden="true"
        className="h-[8px] w-[8px] rotate-45 border-l-2 border-t-2 border-[#b2b2b1]"
      />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex items-center gap-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <span
        aria-hidden="true"
        className="flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#a4a4a3] text-[9px] leading-none text-[#a4a4a3]"
      >
        i
      </span>
    </div>

    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <span
        aria-hidden="true"
        className="flex h-[15px] w-[15px] items-center justify-center rounded-full border border-[#a3a3a2] text-[9px] leading-none text-[#a3a3a2]"
      >
        i
      </span>
    </div>

    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-[23px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
