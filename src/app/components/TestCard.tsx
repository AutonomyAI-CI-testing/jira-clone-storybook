import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine, RiInformationLine } from "react-icons/ri";

/**
 * Self-contained reproduction of the "UI magician Agent" Figma frame.
 * Smoke test only: the palette below is literal (a fixed dark surface with
 * no matching semantic role), so it is expressed as Tailwind arbitrary values.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-[#1a1a1a] px-10 py-10 font-primary text-[#c9c9c9]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[20px]">UI magician Agent</span>
        <MdSettings size={26} className="text-[#c9c9c9]" />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[15px] text-[#8a8a8a]">
        <RiArrowUpSLine size={22} />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-28 flex items-center gap-2 font-primary-bold text-[20px]">
        <RiArrowUpSLine size={26} />
        <span>Add New Design</span>
      </div>

      <div className="mt-14 flex items-center gap-3">
        <span className="text-[16px]">Personal Access Token</span>
        <RiInformationLine size={22} />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[72px] w-full rounded-none border-2 border-[color:#8a8a8a] bg-[#232323] px-6 text-[22px] text-[#7a7a7a] placeholder:text-[#7a7a7a]"
      />

      <div className="mt-8 flex items-center gap-3">
        <span className="text-[16px]">Design URL</span>
        <RiInformationLine size={22} />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[72px] w-full rounded-none border-2 border-[color:#8a8a8a] bg-[#232323] px-6 text-[22px] text-[#7a7a7a] placeholder:text-[#7a7a7a]"
      />

      <div className="mt-12 flex justify-center gap-9">
        <button
          type="button"
          className="h-[70px] w-[168px] rounded-lg bg-[#8a3a15] text-[19px] text-[#a89a92]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[70px] w-[168px] rounded-lg bg-[#8a3a15] text-[19px] text-[#a89a92]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-28 font-primary-bold text-[20px]">
        Recent Breakdowns
      </div>
    </div>
  );
};
