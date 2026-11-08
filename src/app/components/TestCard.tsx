import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 *
 * Self-contained and prop-less: every element below is presentational markup, so the
 * inputs and buttons render the frame's content without pretending to be live controls.
 * Colours are raw palette variables rather than semantic roles, because the frame's dark
 * palette is a fixed look that must not follow the app theme.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[var(--DarkNeutral0)] font-primary"
    >
      <div className="h-[9px] w-full bg-[var(--DarkNeutral-100)]" />

      <div className="flex flex-col px-5 pb-[62px] pt-3">
        <div className="flex items-center justify-between">
          <span className="font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
            UI magician Agent
          </span>
          <HiOutlineCog
            size={16}
            aria-hidden="true"
            className="text-[color:var(--DarkNeutral800)]"
          />
        </div>

        <div className="mt-[18px] flex items-center gap-2">
          <HiChevronUp
            size={10}
            aria-hidden="true"
            className="text-[color:var(--DarkNeutral700)]"
          />
          <span className="text-2xs text-[color:var(--DarkNeutral700)]">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-[77px] flex items-center gap-2">
          <HiChevronUp
            size={12}
            aria-hidden="true"
            className="text-[color:var(--DarkNeutral900)]"
          />
          <span className="font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
            Add New Design
          </span>
        </div>

        <div className="mt-[28px] flex items-center gap-3">
          <span className="text-2xs text-[color:var(--DarkNeutral800)]">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle
            size={15}
            aria-hidden="true"
            className="text-[color:var(--DarkNeutral800)]"
          />
        </div>

        <div className="mt-3 flex h-9 items-center border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px]">
          <span className="text-2xs text-[color:var(--DarkNeutral500)]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-2xs text-[color:var(--DarkNeutral800)]">
            Design URL
          </span>
          <HiOutlineInformationCircle
            size={15}
            aria-hidden="true"
            className="text-[color:var(--DarkNeutral800)]"
          />
        </div>

        <div className="mt-3 flex h-[37px] items-center border-2 border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-[19px]">
          <span className="text-2xs text-[color:var(--DarkNeutral500)]">
            https://www.figma.com/file/:
          </span>
        </div>

        <div className="mt-[22px] flex justify-end gap-4">
          <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)]">
            <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]">
              Awesome
            </span>
          </div>
          <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)]">
            <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]">
              Prepare
            </span>
          </div>
        </div>

        <div className="mt-[46px] font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};
