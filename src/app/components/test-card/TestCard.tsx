import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const INPUT_CLASS =
  "mt-4 w-full rounded-md border border-[#6b6b6b] bg-[#2b2b2b] px-5 py-4 text-[17px] text-[#d0d0d0] placeholder:text-[#8a8a8a]";

const BUTTON_CLASS =
  "h-14 w-[170px] rounded-md bg-[#8a3d14] text-lg text-[#d99a6c]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1c1c1c] px-10 py-8 font-primary text-[#d0d0d0]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#c8c8c8]"
        >
          <FiSettings size={26} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-10 flex items-center gap-3 text-[#a0a0a0]">
        <FiChevronUp size={16} className="shrink-0" aria-hidden="true" />
        <span className="truncate text-[17px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-3 text-[#cfcfcf]">
        <FiChevronUp size={20} className="shrink-0" aria-hidden="true" />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <div className="mt-10">
        <label
          htmlFor="personal-access-token"
          className="flex items-center gap-6 text-lg text-[#c8c8c8]"
        >
          Personal Access Token
          <FiInfo size={20} className="shrink-0" aria-hidden="true" />
        </label>
        <input
          id="personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={INPUT_CLASS}
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="design-url"
          className="flex items-center gap-6 text-lg text-[#c8c8c8]"
        >
          Design URL
          <FiInfo size={20} className="shrink-0" aria-hidden="true" />
        </label>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={INPUT_CLASS}
        />
      </div>

      <div className="mt-10 flex items-center gap-9">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h2 className="mt-14 font-primary-bold text-xl text-[#cfcfcf]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
