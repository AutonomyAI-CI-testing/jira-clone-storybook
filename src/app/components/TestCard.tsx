import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1C1D17] px-5 pb-14 pt-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline
          size={16}
          className="text-[#b5b5b5]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <IoChevronUp
          size={12}
          className="shrink-0 text-[#8b9291]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[72px] flex items-center gap-3">
        <IoChevronUp
          size={14}
          className="shrink-0 text-[#b2b2b1]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          size={15}
          className="shrink-0 text-[#a4a4a3]"
          aria-hidden="true"
        />
      </div>
      <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-3">
        <span className="font-primary-bold text-[11.5px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] text-[#a3a3a2]">
          Design URL
        </span>
        <IoInformationCircleOutline
          size={15}
          className="shrink-0 text-[#a3a3a2]"
          aria-hidden="true"
        />
      </div>
      <div className="mt-3 flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-3">
        <span className="font-primary-bold text-[10.5px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-6 flex gap-4 pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-11 block font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
