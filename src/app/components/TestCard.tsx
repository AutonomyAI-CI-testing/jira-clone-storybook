import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

// The frame's rust-orange button fill has no token in this palette (its nearest
// neighbours are --Orange700 and --Red700), so it is the only literal here.
const buttonClass =
  "flex h-16 w-40 items-center justify-center rounded bg-[#b5451f] text-lg text-font";

const fieldClass =
  "h-16 w-full rounded border border-border-bold bg-background-input px-4 text-lg text-font placeholder:text-font-subtlest";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface p-10 text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[22px]">UI magician Agent</span>
      <HiOutlineCog className="text-icon-subtle" size={24} />
    </div>

    <div className="mt-6 flex items-center gap-4 text-font-subtle">
      <HiChevronUp size={20} />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-[150px] flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <HiChevronUp size={24} />
        <span className="font-primary-bold text-2xl">Add New Design</span>
      </div>

      <div>
        <div className="flex items-center gap-4">
          <label className="text-lg" htmlFor="test-card-token">
            Personal Access Token
          </label>
          <HiOutlineInformationCircle className="text-icon-subtle" size={22} />
        </div>
        <input
          className={`mt-4 ${fieldClass}`}
          id="test-card-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div>
        <div className="flex items-center gap-4">
          <label className="text-lg" htmlFor="test-card-url">
            Design URL
          </label>
          <HiOutlineInformationCircle className="text-icon-subtle" size={22} />
        </div>
        <input
          className={`mt-4 ${fieldClass}`}
          id="test-card-url"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-2 flex gap-8">
        <button className={buttonClass} type="button">
          Awesome
        </button>
        <button className={buttonClass} type="button">
          Prepare
        </button>
      </div>
    </div>

    <span className="mt-24 font-primary-bold text-[22px]">
      Recent Breakdowns
    </span>
  </div>
);
