import { HiChevronUp, HiCog, HiOutlineInformationCircle } from "react-icons/hi";

/**
 * Self-contained card reproduced from the "UI magician Agent" Figma frame.
 * Takes no props, holds no state and wires no behaviour — it is a smoke test
 * of the design-to-code path, not a working form.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1e1e1e] px-5 pt-5 pb-16 font-primary-bold text-xs text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span>UI magician Agent</span>
      <button type="button" aria-label="Settings" className="flex">
        <HiCog size={16} aria-hidden />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-3 text-2xs text-[#8b9291]">
      <HiChevronUp size={12} aria-hidden />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <HiChevronUp size={14} aria-hidden />
      <span>Add New Design</span>
    </div>

    <label
      htmlFor="test-card-token"
      className="mt-7 flex items-center gap-2 text-2xs text-[#a4a4a3]"
    >
      Personal Access Token
      <HiOutlineInformationCircle size={15} aria-hidden />
    </label>
    <input
      id="test-card-token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-2.5 h-9 w-full border border-[#a5adad] bg-[#272822] px-2 text-2xs text-[#737470] placeholder:text-[#737470]"
    />

    <label
      htmlFor="test-card-url"
      className="mt-3 flex items-center gap-2 text-2xs text-[#a3a3a2]"
    >
      Design URL
      <HiOutlineInformationCircle size={15} aria-hidden />
    </label>
    <input
      id="test-card-url"
      placeholder="https://www.figma.com/file/:"
      className="mt-2 h-9 w-full border-2 border-[#929291] bg-[#272822] px-2 text-2xs text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-6 ml-6 flex gap-4 text-2xs text-[#8c8078]">
      <button type="button" className="h-[37px] w-[85px] rounded bg-[#843a17]">
        Awesome
      </button>
      <button type="button" className="h-[37px] w-[85px] rounded bg-[#843a17]">
        Prepare
      </button>
    </div>

    <div className="mt-12">Recent Breakdowns</div>
  </div>
);
