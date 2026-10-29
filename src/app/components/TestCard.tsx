import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#2b2b2b] px-10 py-8 font-primary text-[#d6d6d6]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl text-white">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="text-white">
        <LuSettings size={24} aria-hidden />
      </button>
    </div>

    {/* Collapsed summary */}
    <div className="mt-10 flex items-center gap-2 text-[#c4c4c4]">
      <LuChevronUp size={20} className="shrink-0" aria-hidden />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-24 flex items-center gap-2">
      <LuChevronUp size={24} className="shrink-0 text-white" aria-hidden />
      <h2 className="font-primary-bold text-2xl text-white">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-10 flex items-center gap-2">
      <label htmlFor="personal-access-token" className="text-base">
        Personal Access Token
      </label>
      <LuInfo size={20} className="text-white" aria-hidden />
    </div>
    <input
      id="personal-access-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-3 w-full rounded border-2 border-[#c4c4c4] bg-transparent px-4 py-3 text-base text-[#e8e8e8] placeholder:text-[#8f8f8f]"
    />

    {/* Design URL */}
    <div className="mt-8 flex items-center gap-2">
      <label htmlFor="design-url" className="text-base">
        Design URL
      </label>
      <LuInfo size={20} className="text-white" aria-hidden />
    </div>
    <input
      id="design-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-3 w-full rounded border-2 border-[#c4c4c4] bg-transparent px-4 py-3 text-base text-[#e8e8e8] placeholder:text-[#8f8f8f]"
    />

    {/* Actions */}
    <div className="mt-14 flex items-center gap-8">
      <button
        type="button"
        className="w-[172px] rounded bg-[#b8450e] px-4 py-4 font-primary-bold text-xl text-white"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[172px] rounded bg-[#b8450e] px-4 py-4 font-primary-bold text-xl text-white"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-24 font-primary-bold text-2xl text-white">
      Recent Breakdowns
    </h2>
  </div>
);
