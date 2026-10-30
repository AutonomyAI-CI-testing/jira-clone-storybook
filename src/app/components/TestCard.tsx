import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const inputClassName =
  "mt-6 h-[74px] w-full rounded-[4px] border border-[#8a8a8a] bg-[#2b2b2b] px-6 text-[18px] text-[#e8e8e8] placeholder:text-[#8c8c8c]";

const actionButtonClassName =
  "h-[66px] w-[168px] rounded-[6px] bg-[#b4532a] text-[20px] text-[#d9d9d9] hover:bg-[#9e4826]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] p-[42px] font-primary text-[#e8e8e8]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[22px]">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center rounded-full p-1 hover:bg-[#2b2b2b]"
      >
        <FiSettings size={26} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp size={20} aria-hidden="true" />
      <span className="truncate text-[18px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <FiChevronUp size={20} aria-hidden="true" />
      <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
    </div>

    <div className="mt-[60px]">
      <div className="flex items-center gap-2">
        <label htmlFor="personal-access-token" className="text-[18px]">
          Personal Access Token
        </label>
        <span title="More information about Personal Access Token">
          <FiInfo size={20} aria-hidden="true" />
        </span>
      </div>
      <input
        id="personal-access-token"
        name="personal-access-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={inputClassName}
      />
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-2">
        <label htmlFor="design-url" className="text-[18px]">
          Design URL
        </label>
        <span title="More information about Design URL">
          <FiInfo size={20} aria-hidden="true" />
        </span>
      </div>
      <input
        id="design-url"
        name="design-url"
        placeholder="https://www.figma.com/file/"
        className={inputClassName}
      />
    </div>

    <div className="mt-8 flex justify-center gap-9">
      <button type="button" className={actionButtonClassName}>
        Awesome
      </button>
      <button type="button" className={actionButtonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[110px] font-primary-bold text-[22px]">
      Recent Breakdowns
    </h2>
  </div>
);
