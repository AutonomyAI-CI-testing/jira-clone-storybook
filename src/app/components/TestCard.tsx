import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const LABEL_CLASS = "font-primary-bold text-base text-[#e8e8e8]";
const INPUT_CLASS =
  "w-full rounded border border-[#4a4a4a] bg-[#262626] px-4 py-4 font-primary-light text-base text-[#e8e8e8] outline-none placeholder:text-[#8a8a8a]";
const SECTION_CLASS = "flex items-center gap-2 font-primary-bold text-xl";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] max-w-full bg-[#1a1a1a] px-11 pb-11 pt-11 font-primary text-[#e8e8e8]"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="shrink-0 text-[#e8e8e8]"
        >
          <IoSettingsOutline size={22} />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <IoChevronUp aria-hidden="true" className="shrink-0" size={20} />
        <span className="truncate font-primary text-base text-[#a0a0a0]">
          From entire frame to a singl...
        </span>
      </div>

      <div className={`${SECTION_CLASS} mt-24`}>
        <IoChevronUp aria-hidden="true" className="shrink-0" size={22} />
        <span>Add New Design</span>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-3">
          <span className={LABEL_CLASS}>Personal Access Token</span>
          <IoInformationCircleOutline
            aria-hidden="true"
            className="shrink-0 text-[#e8e8e8]"
            size={20}
          />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className={`${INPUT_CLASS} mt-4`}
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <span className={LABEL_CLASS}>Design URL</span>
          <IoInformationCircleOutline
            aria-hidden="true"
            className="shrink-0 text-[#e8e8e8]"
            size={20}
          />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`${INPUT_CLASS} mt-4`}
        />
      </div>

      <div className="mt-10 flex gap-8">
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a33e1d] px-6 py-4 font-primary-bold text-base text-[#e8e8e8]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a33e1d] px-6 py-4 font-primary-bold text-base text-[#e8e8e8]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-20 font-primary-bold text-xl">Recent Breakdowns</h3>
    </div>
  );
};
