import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained and deliberately non-interactive: it renders the frame's
 * layout, type hierarchy and palette and nothing more.
 *
 * Colours come from the raw ramp variables declared in
 * `src/app/styles/app.css` rather than the semantic theme tokens, because the
 * frame has a fixed dark palette that is not meant to follow the app themes.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[var(--Neutral400)]">
        UI magician Agent
      </span>
      <FaCog size={15} className="text-[var(--Neutral400)]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FaChevronUp size={9} className="shrink-0 text-[var(--Neutral500)]" />
      <span className="truncate text-2xs text-[var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FaChevronUp size={12} className="shrink-0 text-[var(--Neutral400)]" />
      <span className="font-primary-bold text-xs text-[var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center justify-between">
      <span className="text-2xs text-[var(--Neutral400)]">
        Personal Access Token
      </span>
      <FaInfoCircle size={14} className="shrink-0 text-[var(--Neutral400)]" />
    </div>

    <div className="mt-3 flex h-9 items-center rounded border border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px]">
      <span className="truncate text-2xs text-[var(--Neutral700)]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-[11px] flex items-center justify-between">
      <span className="text-2xs text-[var(--Neutral400)]">Design URL</span>
      <FaInfoCircle size={14} className="shrink-0 text-[var(--Neutral400)]" />
    </div>

    <div className="mt-[11px] flex h-[37px] items-center rounded border-2 border-[var(--Neutral500)] bg-[var(--DarkNeutral200)] px-[19px]">
      <span className="truncate text-2xs text-[var(--Neutral700)]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="ml-6 mt-[21px] flex items-center gap-[17px]">
      <span className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs text-[var(--Neutral600)]">
        Awesome
      </span>
      <span className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs text-[var(--Neutral600)]">
        Prepare
      </span>
    </div>

    <span className="mt-[48px] font-primary-bold text-xs text-[var(--Neutral400)]">
      Recent Breakdowns
    </span>
  </div>
);
