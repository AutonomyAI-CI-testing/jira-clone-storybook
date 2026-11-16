import { HiChevronUp, HiInformationCircle, HiOutlineCog } from "react-icons/hi";

const BUTTON_LABELS = ["Awesome", "Prepare"];

/**
 * Smoke-test component: a self-contained render of the "UI magician Agent"
 * panel from the Figma frame. It takes no props and holds no state — the
 * fields and buttons are inert markup.
 *
 * The colours are the frame's own extracted values rather than design-system
 * tokens: this repo replaces Tailwind's default palette and has no dark-panel
 * or rust token to reach for.
 */
export const TestCard = (): JSX.Element => {
  const labelClass = "text-[11.5px] leading-[14px]";

  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1e] px-5 pb-10 pt-5 font-primary text-[11.5px] leading-[14px] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-[13.5px] leading-[16px]">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-4 w-4 shrink-0 items-center justify-center text-[#b5b5b5]"
        >
          <HiOutlineCog size={16} />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp size={12} className="shrink-0" />
        <span className="truncate text-[#8b9291]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <HiChevronUp size={14} className="shrink-0" />
        <h3 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-token" className={`${labelClass} text-[#a4a4a3]`}>
            Personal Access Token
          </label>
          <HiInformationCircle size={15} className="shrink-0 text-[#a4a4a3]" />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[36px] w-full border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-url" className={`${labelClass} text-[#a3a3a2]`}>
            Design URL
          </label>
          <HiInformationCircle size={15} className="shrink-0 text-[#a3a3a2]" />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-2 text-[11.5px] text-[#b5b5b5] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-6 flex justify-center gap-4">
        {BUTTON_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <h3 className="mt-12 font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
