import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" panel from the reference Figma
 * frame. Self-contained smoke test: no props, no state, no event handlers.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-elevation-surface px-5 pb-[48px] pt-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-sm">UI magician Agent</span>
      <MdSettings
        size={16}
        aria-label="Settings"
        className="text-font-subtle"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <MdKeyboardArrowUp size={12} className="text-font-subtlest" />
      <span className="truncate text-xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <MdKeyboardArrowUp size={12} className="text-font-subtle" />
      <span className="font-primary-bold text-sm text-font-subtle">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex flex-col">
      <div className="flex items-center gap-2">
        <span className="text-xs text-font-subtle">Personal Access Token</span>
        <MdInfoOutline size={15} className="text-font-subtle" />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full rounded border border-border-bold bg-background-input px-3 text-xs text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-[11px] flex flex-col">
      <div className="flex items-center gap-2">
        <span className="text-xs text-font-subtle">Design URL</span>
        <MdInfoOutline size={15} className="text-font-subtle" />
      </div>
      <input
        type="text"
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full rounded border border-border-bold bg-background-input px-3 text-xs text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-xs text-font-subtle"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-xs text-font-subtle"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[47px] font-primary-bold text-sm text-font-subtle">
      Recent Breakdowns
    </span>
  </div>
);
