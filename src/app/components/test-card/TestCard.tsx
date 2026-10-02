import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="mx-auto flex min-h-[1016px] w-[508px] max-w-full flex-col gap-8 bg-[#1e1e1e] p-6 font-primary text-[#d7d7d7]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <FiSettings size={20} className="text-[#bdbdbd]" aria-hidden />
    </div>

    {/* Collapsed summary row */}
    <div className="flex items-center gap-2 text-[#8f8f8f]">
      <FiChevronUp size={18} aria-hidden />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    {/* Add New Design */}
    <div className="flex flex-col gap-6">
      <h2 className="flex items-center gap-2 font-primary-bold text-base">
        <FiChevronUp size={20} aria-hidden />
        Add New Design
      </h2>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="pat" className="text-sm">
            Personal Access Token
          </label>
          <FiInfo size={16} className="text-[#8f8f8f]" aria-hidden />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className="w-full rounded-sm border border-[#3d3d3d] bg-[#2b2b2b] px-3 py-2.5 text-sm placeholder:text-[#7d7d7d] focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="design-url" className="text-sm">
            Design URL
          </label>
          <FiInfo size={16} className="text-[#8f8f8f]" aria-hidden />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="w-full rounded-sm border border-[#3d3d3d] bg-[#2b2b2b] px-3 py-2.5 text-sm placeholder:text-[#7d7d7d] focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <button
          type="button"
          className="rounded-md bg-[#b04a24] px-8 py-2.5 text-sm text-[#d0d0d0] hover:bg-[#9c3f1d]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-md bg-[#b04a24] px-8 py-2.5 text-sm text-[#d0d0d0] hover:bg-[#9c3f1d]"
        >
          Prepare
        </button>
      </div>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="font-primary-bold text-base">Recent Breakdowns</h2>
  </div>
);
