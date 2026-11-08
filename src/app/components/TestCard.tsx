import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel from
 * the Figma frame behind this smoke test.
 *
 * Smoke test only: the layout, colours and type approximate the frame rather
 * than matching it exactly, the component takes no props, and its controls are
 * inert placeholders. The frame's off-palette greys and rust fill are mapped
 * onto the nearest declared palette steps (the `--DarkNeutral*` ramp and
 * `--Orange800`), which resolve identically under every theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 font-primary"
  >
    {/* Title */}
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-xs text-[var(--DarkNeutral900)]">
        UI magician Agent
      </span>
      <HiOutlineCog size={16} className="text-[var(--DarkNeutral900)]" />
    </div>

    {/* Collapsed summary */}
    <div className="mt-[18px] flex items-center gap-2 pl-[3px]">
      <HiChevronUp size={12} className="text-[var(--DarkNeutral700)]" />
      <span className="text-2xs text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <HiChevronUp size={14} className="text-[var(--DarkNeutral900)]" />
      <span className="font-primary-bold text-xs text-[var(--DarkNeutral900)]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center">
      <span className="w-[150px] text-2xs text-[var(--DarkNeutral800)]">
        Personal Access Token
      </span>
      <HiOutlineInformationCircle
        size={15}
        className="text-[var(--DarkNeutral800)]"
      />
    </div>
    <input
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-5 text-2xs text-[var(--DarkNeutral600)] placeholder:text-[var(--DarkNeutral600)]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center">
      <span className="w-[80px] text-2xs text-[var(--DarkNeutral800)]">
        Design URL
      </span>
      <HiOutlineInformationCircle
        size={15}
        className="text-[var(--DarkNeutral800)]"
      />
    </div>
    <input
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-5 text-2xs text-[var(--DarkNeutral600)] placeholder:text-[var(--DarkNeutral600)]"
    />

    {/* Actions */}
    <div className="mt-[23px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-[var(--DarkNeutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-[var(--DarkNeutral600)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <span className="mt-[46px] font-primary-bold text-xs text-[var(--DarkNeutral900)]">
      Recent Breakdowns
    </span>
  </div>
);

export default TestCard;
