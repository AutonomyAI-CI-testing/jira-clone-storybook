import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const INPUT_CLASSES =
  "mt-2 h-9 w-full rounded-md bg-background-input px-3 text-2xs font-primary-light text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus:outline-border-brand";

const ACTION_CLASSES =
  "h-9 w-[85px] rounded bg-[#843a17] text-2xs font-primary-bold text-white";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded-md bg-elevation-surface-sunken p-5 pb-16 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-sm font-primary-bold text-font">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex-center rounded text-font-subtle"
      >
        <HiOutlineCog size={16} />
      </button>
    </div>

    <div className="mt-3 flex items-center gap-2">
      <HiChevronUp size={10} className="shrink-0 text-font-subtlest" />
      <p className="truncate text-2xs font-primary-light text-font-subtlest">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <HiChevronUp size={14} className="shrink-0 text-font-subtle" />
      <h2 className="text-sm font-primary-bold text-font">Add New Design</h2>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-token"
          className="text-2xs font-primary-light text-font-subtle"
        >
          Personal Access Token
        </label>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-font-subtle"
        />
      </div>
      <input
        id="test-card-token"
        name="personalAccessToken"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className={INPUT_CLASSES}
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-url"
          className="text-2xs font-primary-light text-font-subtle"
        >
          Design URL
        </label>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-font-subtle"
        />
      </div>
      <input
        id="test-card-url"
        name="designUrl"
        type="url"
        placeholder="https://www.figma.com/file:"
        className={INPUT_CLASSES}
      />
    </div>

    <div className="mt-6 flex gap-4 pl-6">
      <button type="button" className={ACTION_CLASSES}>
        Awesome
      </button>
      <button type="button" className={ACTION_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-sm font-primary-bold text-font">
      Recent Breakdowns
    </h2>
  </div>
);
