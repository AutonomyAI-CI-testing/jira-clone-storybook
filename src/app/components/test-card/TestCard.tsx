import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[420px] flex-col bg-[#1c1a19] px-4 py-6 font-primary text-[#e8e6e3]"
  >
    {/* Title bar */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-white">UI magician Agent</h1>
      <FiSettings size={22} />
    </div>

    {/* Collapsed/expanded summary row */}
    <div className="mt-6 flex items-center gap-2 text-base">
      <FiChevronUp size={18} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <section className="mt-10 flex flex-col gap-6">
      <h2 className="flex items-center gap-2 font-primary-bold text-xl text-white">
        <FiChevronUp size={20} className="shrink-0" />
        Add New Design
      </h2>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-base text-[#d6d3d1]">
          <span>Personal Access Token</span>
          <FiInfo size={16} />
        </div>
        <input
          type="text"
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="w-full rounded-sm border border-[#57534e] bg-[#2a2724] px-4 py-3 text-base placeholder:text-[#8b8682]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-base text-[#d6d3d1]">
          <span>Design URL</span>
          <FiInfo size={16} />
        </div>
        <input
          type="text"
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className="w-full rounded-sm border border-[#57534e] bg-[#2a2724] px-4 py-3 text-base placeholder:text-[#8b8682]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="rounded-md bg-[#8a3f16] px-4 py-3 text-base text-[#d6d3d1]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-md bg-[#8a3f16] px-4 py-3 text-base text-[#d6d3d1]"
        >
          Prepare
        </button>
      </div>
    </section>

    {/* Recent Breakdowns */}
    <h2 className="mt-12 font-primary-bold text-2xl text-white">
      Recent Breakdowns
    </h2>
  </div>
);
