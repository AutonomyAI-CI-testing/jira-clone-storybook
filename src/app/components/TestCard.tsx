import { FaChevronUp, FaCircleInfo, FaGear } from "react-icons/fa6";

const buttonClassName =
  "h-14 w-[170px] cursor-pointer rounded-lg bg-[#a04a17] font-primary text-base text-[#c8c8c8]";

const inputClassName =
  "mt-4 h-16 w-full rounded-lg border border-[#8a8a8a] bg-[#2a2a2a] px-6 font-primary text-base text-[#d4d4d4] outline-none placeholder:text-[#8a8a8a]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 pt-10 pb-20 text-[#d4d4d4]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary text-xl">UI magician Agent</h1>
      <FaGear aria-hidden="true" size={22} className="mt-0.5 shrink-0" />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FaChevronUp aria-hidden="true" size={16} className="shrink-0 text-[#9a9a9a]" />
      <span className="truncate font-primary-light text-base text-[#9a9a9a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <FaChevronUp aria-hidden="true" size={20} className="shrink-0" />
      <h2 className="font-primary text-2xl">Add New Design</h2>
    </div>

    <div className="mt-14">
      <div className="flex items-center gap-3">
        <span className="font-primary-light text-base text-[#c4c4c4]">
          Personal Access Token
        </span>
        <FaCircleInfo aria-hidden="true" size={18} className="shrink-0 text-[#c4c4c4]" />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={inputClassName}
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-3">
        <span className="font-primary-light text-base text-[#c4c4c4]">
          Design URL
        </span>
        <FaCircleInfo aria-hidden="true" size={18} className="shrink-0 text-[#c4c4c4]" />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={inputClassName}
      />
    </div>

    <div className="mt-8 flex gap-6">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary text-xl">Recent Breakdowns</h2>
  </div>
);
