import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" panel from the Test Page frame.
 * Fixed-look dark surface: the root pins the `dark` theme class, so the panel
 * renders the same whichever of the app's five themes is active.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface font-primary text-font"
  >
    <div className="h-[9px] bg-elevation-surface-sunken" />

    <div className="px-5 pb-5 pt-5">
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="text-font-subtle"
        >
          <FiSettings size={16} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FiChevronUp
          size={12}
          aria-hidden="true"
          className="text-font-subtlest"
        />
        <span className="text-2xs text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[62px] flex items-center gap-2">
        <FiChevronUp
          size={14}
          aria-hidden="true"
          className="text-font-subtle"
        />
        <h3 className="font-primary-bold text-xs text-font-subtle">
          Add New Design
        </h3>
      </div>

      <div className="mt-3 flex items-center gap-4">
        <label htmlFor="test-card-token" className="text-2xs text-font-subtle">
          Personal Access Token
        </label>
        <FiInfo size={15} aria-hidden="true" className="text-font-subtle" />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-border-bold bg-elevation-surface-raised px-3 text-2xs text-font placeholder:text-font-subtlest"
      />

      <div className="mt-[11px] flex items-center gap-4">
        <label htmlFor="test-card-url" className="text-2xs text-font-subtle">
          Design URL
        </label>
        <FiInfo size={15} aria-hidden="true" className="text-font-subtle" />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-9 w-full border border-border-bold bg-elevation-surface-raised px-3 text-2xs text-font placeholder:text-font-subtlest"
      />

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-[47px] font-primary-bold text-xs">Recent Breakdowns</h3>
    </div>
  </div>
);
