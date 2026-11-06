import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pb-5 pt-5 font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-xs leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <IoSettingsOutline
        size={16}
        aria-hidden="true"
        className="shrink-0 text-[#b5b5b5]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <IoChevronUpOutline
        size={10}
        aria-hidden="true"
        className="shrink-0 text-[#8b9291]"
      />
      <p className="truncate text-2xs leading-[13.92px] text-[#8b9291]">
        From entire frame to a single component
      </p>
    </div>

    <div className="-mx-5 mt-[62px] flex items-center gap-2 bg-[#141414] px-5 py-[15px]">
      <IoChevronUpOutline
        size={12}
        aria-hidden="true"
        className="shrink-0 text-[#b2b2b1]"
      />
      <h2 className="text-xs leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-3 flex items-center gap-2">
      <label
        htmlFor="testElem-access-token"
        className="text-2xs leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <IoInformationCircleOutline
        size={15}
        aria-hidden="true"
        className="shrink-0 text-[#a4a4a3]"
      />
    </div>
    <input
      id="testElem-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[18px] text-2xs leading-[13.92px] text-[#b5b5b5] placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-2">
      <label
        htmlFor="testElem-design-url"
        className="text-2xs leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <IoInformationCircleOutline
        size={15}
        aria-hidden="true"
        className="shrink-0 text-[#a3a3a2]"
      />
    </div>
    <input
      id="testElem-design-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-2xs leading-[13.92px] text-[#b5b5b5] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-4 pl-6">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center rounded bg-[#843a17] pl-4 text-2xs leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center rounded bg-[#843a17] pl-4 text-2xs leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[46px] text-xs leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
