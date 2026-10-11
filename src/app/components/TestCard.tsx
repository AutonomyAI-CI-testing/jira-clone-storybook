import { FiChevronUp, FiSettings } from "react-icons/fi";
import { IoInformationCircleOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="min-h-[508px] w-[254px] bg-[#1e1e1e] px-5 py-5">
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center text-[#b5b5b5]"
      >
        <FiSettings size={16} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp size={10} aria-hidden="true" className="text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-14 flex items-center gap-2">
      <FiChevronUp size={12} aria-hidden="true" className="text-[#b2b2b1]" />
      <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <label
        htmlFor="personalAccessToken"
        className="text-[11.5px] font-semibold text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <IoInformationCircleOutline
        size={15}
        aria-hidden="true"
        className="text-[#a4a4a3]"
      />
    </div>
    <input
      id="personalAccessToken"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-2 w-full border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#b5b5b5] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-5 flex items-center gap-2">
      <label
        htmlFor="designUrl"
        className="text-[11.5px] font-semibold text-[#a3a3a2]"
      >
        Design URL
      </label>
      <IoInformationCircleOutline
        size={15}
        aria-hidden="true"
        className="text-[#a3a3a2]"
      />
    </div>
    <input
      id="designUrl"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-2 w-full border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#b5b5b5] outline-none placeholder:text-[10.5px] placeholder:text-[#71726e]"
    />

    <div className="mt-6 flex gap-4">
      <button
        type="button"
        className="flex-1 rounded-[4px] bg-[#843a17] py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded-[4px] bg-[#843a17] py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
