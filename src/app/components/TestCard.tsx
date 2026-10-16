import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1E1E1E] px-5 py-6 font-primary text-[#C7C7C7]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex-center flex text-[#C7C7C7]"
        >
          <FiSettings size={22} aria-hidden />
        </button>
      </div>

      <div className="mt-5 flex items-center gap-2 text-[#9E9E9E]">
        <FiChevronUp size={18} aria-hidden className="shrink-0" />
        <span className="truncate text-sm">From entire frame to a singl...</span>
      </div>

      <div className="mt-28 flex items-center gap-2">
        <FiChevronUp size={20} aria-hidden className="shrink-0" />
        <h2 className="font-primary-bold text-base">Add New Design</h2>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <label htmlFor="test-elem-token" className="font-primary-bold text-sm">
            Personal Access Token
          </label>
          <FiInfo size={16} aria-hidden className="text-[#C7C7C7]" />
        </div>
        <input
          id="test-elem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full border border-[#8B8B8B] bg-[#2B2B2B] px-4 py-3 text-sm text-[#C7C7C7] placeholder:text-[#9E9E9E]"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <label htmlFor="test-elem-url" className="font-primary-bold text-sm">
            Design URL
          </label>
          <FiInfo size={16} aria-hidden className="text-[#C7C7C7]" />
        </div>
        <input
          id="test-elem-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 w-full border border-[#8B8B8B] bg-[#2B2B2B] px-4 py-3 text-sm text-[#C7C7C7] placeholder:text-[#9E9E9E]"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#8F3A15] px-6 py-3 font-primary-bold text-sm text-[#C9A395]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#8F3A15] px-6 py-3 font-primary-bold text-sm text-[#C9A395]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-16 font-primary-bold text-base">Recent Breakdowns</h2>
    </div>
  );
};
