import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const INPUT_CLASSES =
  "mt-3 w-full rounded-[2px] border-2 border-[#6e6e6e] bg-[#262626] px-5 py-4 text-[17px] text-[#8a8a8a] placeholder:text-[#8a8a8a]";

const BUTTON_CLASSES =
  "rounded bg-[#8b3a1a] px-10 py-4 text-xl text-[#c9c9c9]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[#1e1e1e] p-10 font-[system-ui,sans-serif] text-[#d4d4d4]"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-xl font-bold">UI magician Agent</h1>
      <button type="button" aria-label="Settings">
        <FiSettings size={22} aria-hidden />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2 text-[#9b9b9b]">
      <FiChevronUp size={18} aria-hidden />
      <span className="truncate text-[17px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-2">
      <FiChevronUp size={22} aria-hidden />
      <h2 className="text-xl font-bold">Add New Design</h2>
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-3">
        <span className="text-[17px]">Personal Access Token</span>
        <FiInfo size={20} aria-hidden />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className={INPUT_CLASSES}
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-3">
        <span className="text-[17px]">Design URL</span>
        <FiInfo size={20} aria-hidden />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className={INPUT_CLASSES}
      />
    </div>

    <div className="mt-10 flex justify-end gap-8">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-28 text-xl font-bold">Recent Breakdowns</h2>
  </div>
);
