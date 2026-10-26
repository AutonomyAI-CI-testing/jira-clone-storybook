import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Smoke-test component: takes no props, holds no state and does nothing when
 * clicked. The `dark` class on the root is what makes the semantic tokens
 * resolve to their dark-theme values.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="dark h-[508px] w-[254px] bg-elevation-surface-sunken px-5 py-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs text-font">UI magician Agent</h2>
      <IoSettingsOutline aria-hidden className="h-4 w-[14px] text-icon" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <IoChevronUp aria-hidden className="h-[10px] w-[10px] text-icon-subtle" />
      <span className="font-primary-bold text-2xs text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px]">
      <IoChevronUp aria-hidden className="h-[14px] w-[14px] text-font" />
      <h3 className="font-primary-bold text-xs text-font">Add New Design</h3>
    </div>

    <div className="mt-[28px] flex items-center justify-between">
      <label
        htmlFor="test-card-token"
        className="font-primary-bold text-2xs text-font-subtle"
      >
        Personal Access Token
      </label>
      <IoInformationCircleOutline
        aria-hidden
        className="h-[15px] w-[15px] text-icon"
      />
    </div>
    <input
      id="test-card-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded border border-border-bold bg-elevation-surface-overlay px-[19px] font-primary-bold text-2xs text-font placeholder:text-font-subtlest"
    />

    <div className="mt-[11px] flex items-center justify-between">
      <label
        htmlFor="test-card-url"
        className="font-primary-bold text-2xs text-font-subtle"
      >
        Design URL
      </label>
      <IoInformationCircleOutline
        aria-hidden
        className="h-[15px] w-[15px] text-icon"
      />
    </div>
    <input
      id="test-card-url"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full rounded border-2 border-border-bold bg-elevation-surface-overlay px-5 font-primary-bold text-2xs text-font placeholder:text-font-subtlest"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-font"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-font"
      >
        Prepare
      </button>
    </div>

    <p className="mt-[47px] font-primary-bold text-xs text-font">
      Recent Breakdowns
    </p>
  </div>
);
