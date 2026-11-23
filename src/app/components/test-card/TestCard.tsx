import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASSNAME =
  "mt-3 h-[70px] w-full border-2 border-border-bold bg-elevation-surface-raised px-8 font-primary text-[18px] text-font placeholder:text-font-subtlest";

const LABEL_CLASSNAME = "font-primary text-[19px] text-font-subtle";

const ACTION_BUTTON_CLASSNAME =
  "h-[70px] w-[170px] cursor-pointer rounded-lg bg-[#a83e1a] font-primary text-[19px] text-white";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[508px] bg-elevation-surface-sunken p-10">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[22px] leading-tight text-font">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Open settings"
          className="flex cursor-pointer items-center text-font"
        >
          <FiSettings size={28} aria-hidden />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3 text-font-subtle">
        <FiChevronUp size={20} aria-hidden />
        <span className="truncate font-primary text-[17px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-3">
        <FiChevronUp size={24} aria-hidden />
        <h2 className="font-primary-bold text-[22px] leading-tight text-font">
          Add New Design
        </h2>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <label htmlFor="test-card-token" className={LABEL_CLASSNAME}>
          Personal Access Token
        </label>
        <FiInfo size={28} className="text-font-subtle" aria-hidden />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASSNAME}
      />

      <div className="mt-6 flex items-center gap-4">
        <label htmlFor="test-card-design-url" className={LABEL_CLASSNAME}>
          Design URL
        </label>
        <FiInfo size={28} className="text-font-subtle" aria-hidden />
      </div>
      <input
        id="test-card-design-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={FIELD_CLASSNAME}
      />

      <div className="mt-8 flex justify-center gap-9">
        <button type="button" className={ACTION_BUTTON_CLASSNAME}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASSNAME}>
          Prepare
        </button>
      </div>

      <h2 className="mt-16 font-primary-bold text-[22px] leading-tight text-font">
        Recent Breakdowns
      </h2>
    </div>
  );
};
