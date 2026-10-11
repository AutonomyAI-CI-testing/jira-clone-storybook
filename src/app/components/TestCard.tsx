import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => (
  <div id="testElem" className="min-h-screen w-full bg-[#1a1a1a] px-8 py-10">
    <div className="mx-auto flex w-full max-w-[420px] flex-col">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <FaCog aria-hidden="true" size={20} className="text-[#c9c9c9]" />
      </div>

      <div className="mt-2 flex items-center gap-2">
        <FaChevronUp aria-hidden="true" size={14} className="text-[#8f8f8f]" />
        <span className="truncate text-sm text-[#8f8f8f]">
          From entire frame to a singl...
        </span>
      </div>

      <h2 className="mt-16 flex items-center gap-2 font-primary-bold text-xl text-[#e8e8e8]">
        <FaChevronUp aria-hidden="true" size={18} />
        Add New Design
      </h2>

      <label
        htmlFor="test-access-token"
        className="mt-8 flex items-center gap-2 text-sm text-[#a8a8a8]"
      >
        Personal Access Token
        <FaInfoCircle aria-hidden="true" size={14} />
      </label>
      <input
        id="test-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded-sm border border-[#6b6b6b] bg-[#202020] px-4 py-3 text-sm text-[#e8e8e8] placeholder:text-[#8f8f8f]"
      />

      <label
        htmlFor="test-design-url"
        className="mt-6 flex items-center gap-2 text-sm text-[#a8a8a8]"
      >
        Design URL
        <FaInfoCircle aria-hidden="true" size={14} />
      </label>
      <input
        id="test-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded-sm border border-[#6b6b6b] bg-[#202020] px-4 py-3 text-sm text-[#e8e8e8] placeholder:text-[#8f8f8f]"
      />

      <div className="mt-10 flex gap-8">
        <button
          type="button"
          className="flex-1 rounded-sm bg-[#a4471f] py-3 text-sm text-[#e2d9d1]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-sm bg-[#a4471f] py-3 text-sm text-[#e2d9d1]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-16 font-primary-bold text-xl text-[#e8e8e8]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
