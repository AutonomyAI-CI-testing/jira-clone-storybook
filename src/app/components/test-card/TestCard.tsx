import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col gap-5 bg-[#000000] p-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <IoSettingsOutline
          aria-hidden
          className="h-4 w-4 text-[#b5b5b5]"
        />
      </div>

      <div className="flex items-center gap-2">
        <IoChevronUp aria-hidden className="h-3 w-3 text-[#8b9291]" />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="flex items-center gap-2">
        <IoChevronUp aria-hidden className="h-4 w-4 text-[#b2b2b1]" />
        <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="testElem-token"
            className="text-[11.5px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <IoInformationCircleOutline
            aria-hidden
            className="h-3.5 w-3.5 text-[#a4a4a3]"
          />
        </div>
        <input
          id="testElem-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="testElem-url"
            className="text-[11.5px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <IoInformationCircleOutline
            aria-hidden
            className="h-3.5 w-3.5 text-[#a3a3a2]"
          />
        </div>
        <input
          id="testElem-url"
          placeholder="https://www.figma.com/file/:"
          className="w-full border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
        />
      </div>

      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
