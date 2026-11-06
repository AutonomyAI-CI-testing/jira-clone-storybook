import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

/**
 * Static reproduction of a Figma frame — a small dark "UI magician Agent" form.
 * Self-contained smoke test: no props, no state, no data.
 * The `dark` class pins the panel's look so it renders the same under every app theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[254px] flex-col bg-elevation-surface px-5 pb-16 pt-5 font-primary text-font"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-font">
        UI magician Agent
      </span>
      <MdSettings size={16} className="text-font-subtle" aria-hidden="true" />
    </div>

    {/* Collapsible summary row */}
    <div className="mt-4 flex items-center gap-2">
      <RiArrowUpSLine
        size={16}
        className="shrink-0 text-font-subtle"
        aria-hidden="true"
      />
      <span className="truncate font-primary-bold text-2xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-20 flex items-center gap-2">
      <RiArrowUpSLine
        size={18}
        className="shrink-0 text-font"
        aria-hidden="true"
      />
      <span className="font-primary-bold text-xs text-font">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-2xs text-font-subtle">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={14}
          className="shrink-0 text-font-subtle"
          aria-hidden="true"
        />
      </div>
      <input
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-border-bold bg-elevation-surface-overlay px-3 py-2 font-primary-bold text-2xs text-font placeholder:text-font-subtlest"
      />
    </div>

    {/* Design URL */}
    <div className="mt-3">
      <div className="flex items-center gap-2">
        <span className="font-primary-bold text-2xs text-font-subtle">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={14}
          className="shrink-0 text-font-subtle"
          aria-hidden="true"
        />
      </div>
      <input
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border border-border-bold bg-elevation-surface-overlay px-3 py-2 font-primary-bold text-2xs text-font placeholder:text-font-subtlest"
      />
    </div>

    {/* Actions */}
    <div className="mt-5 flex gap-4 pl-6">
      <button
        type="button"
        className="w-[85px] rounded bg-[var(--Orange800)] py-2.5 font-primary-bold text-2xs text-[var(--Neutral0)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[85px] rounded bg-[var(--Orange800)] py-2.5 font-primary-bold text-2xs text-[var(--Neutral0)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-11 font-primary-bold text-xs text-font">
      Recent Breakdowns
    </h2>
  </div>
);
