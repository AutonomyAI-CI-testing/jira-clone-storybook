import {
  MdKeyboardArrowUp,
  MdOutlineInfo,
  MdOutlineSettings,
} from "react-icons/md";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="text-xs font-primary-bold text-font-subtle">
        UI magician Agent
      </h2>
      <MdOutlineSettings
        size={16}
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
      />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <MdKeyboardArrowUp
        size={12}
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
      />
      <span className="truncate text-2xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-2">
      <MdKeyboardArrowUp
        size={14}
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
      />
      <h3 className="text-xs font-primary-bold text-font-subtle">
        Add New Design
      </h3>
    </div>

    <div className="mt-10">
      <div className="flex items-center justify-between">
        <label htmlFor="test-card-access-token" className="text-2xs text-font-subtle">
          Personal Access Token
        </label>
        <MdOutlineInfo
          size={15}
          aria-hidden="true"
          className="shrink-0 text-icon-subtle"
        />
      </div>
      <input
        id="test-card-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-2 h-[39px] w-full rounded-none border border-border-bold bg-elevation-surface-overlay px-2 text-2xs text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-2.5">
      <div className="flex items-center justify-between">
        <label htmlFor="test-card-design-url" className="text-2xs text-font-subtle">
          Design URL
        </label>
        <MdOutlineInfo
          size={15}
          aria-hidden="true"
          className="shrink-0 text-icon-subtle"
        />
      </div>
      <input
        id="test-card-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-2 h-[41px] w-full rounded-none border-2 border-border-bold bg-elevation-surface-overlay px-2 text-2xs text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-5 flex gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-font-subtle"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-font-subtle"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-11 text-xs font-primary-bold text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);
