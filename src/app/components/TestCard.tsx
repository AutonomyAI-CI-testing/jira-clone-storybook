import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

// Static reproduction of the "UI magician Agent" Figma frame. Colours are
// literal values read from that frame rather than the app's semantic tokens,
// because the frame's dark palette has no role in this theme set.
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] rounded-md bg-[#1a1a1a] p-10 font-primary text-base text-[#e6e6e6]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-lg">UI magician Agent</h1>
        <HiOutlineCog aria-hidden className="text-[22px] text-[#c9c9c9]" />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <HiOutlineChevronUp
          aria-hidden
          className="shrink-0 text-[18px] text-[#c9c9c9]"
        />
        <span className="truncate font-primary-light text-sm text-[#b9b9b9]">
          From entire frame to a singl
        </span>
      </div>

      <div className="mt-32 flex items-center gap-3">
        <HiOutlineChevronUp
          aria-hidden
          className="shrink-0 text-[18px] text-[#c9c9c9]"
        />
        <h2 className="font-primary-black text-lg">Add New Design</h2>
      </div>

      <div className="mt-8">
        <label
          htmlFor="personal-access-token"
          className="flex items-center gap-2 font-primary-light text-sm text-[#cfcfcf]"
        >
          Personal Access Token
          <HiOutlineInformationCircle
            aria-hidden
            className="text-[16px] text-[#c9c9c9]"
          />
        </label>
        <input
          id="personal-access-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded-sm border border-[#6e6e6e] bg-[#2c2c2c] px-4 py-3.5 font-primary-light placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="mt-3">
        <label
          htmlFor="design-url"
          className="flex items-center gap-2 font-primary-light text-sm text-[#cfcfcf]"
        >
          Design URL
          <HiOutlineInformationCircle
            aria-hidden
            className="text-[16px] text-[#c9c9c9]"
          />
        </label>
        <input
          id="design-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className="mt-2 w-full rounded-sm border border-[#6e6e6e] bg-[#2c2c2c] px-4 py-3.5 font-primary-light placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="mt-8 flex gap-8 px-7">
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a03e12] px-8 py-4 font-primary text-[#ded3cd]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a03e12] px-8 py-4 font-primary text-[#ded3cd]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-32 font-primary-black text-lg">Recent Breakdowns</h2>
    </div>
  );
};
