import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke-test component: a dark settings panel built from a Figma frame.
 * Self-contained and static — no props, no state, no handlers.
 */
export const TestCard = (): JSX.Element => {
  const headingClass =
    "text-xs font-primary-bold text-[color:var(--DarkNeutral900)]";
  const fieldClass =
    "flex h-9 items-center border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-4 text-2xs text-[color:var(--DarkNeutral600)]";
  const buttonClass =
    "flex h-9 w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs text-[color:var(--DarkNeutral800)]";

  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-black p-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className={headingClass}>UI magician Agent</span>
        <HiOutlineCog
          size={16}
          className="shrink-0 text-[color:var(--DarkNeutral900)]"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp
          size={12}
          className="shrink-0 text-[color:var(--DarkNeutral700)]"
        />
        <span className="truncate text-2xs text-[color:var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[70px] flex items-center gap-2">
        <HiChevronUp
          size={12}
          className="shrink-0 text-[color:var(--DarkNeutral900)]"
        />
        <span className={headingClass}>Add New Design</span>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-2xs text-[color:var(--DarkNeutral800)]">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle
            size={15}
            className="shrink-0 text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <div className={fieldClass}>figd_xxxxxxxxxxxxxxxxxx</div>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-2xs text-[color:var(--DarkNeutral800)]">
            Design URL
          </span>
          <HiOutlineInformationCircle
            size={15}
            className="shrink-0 text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <div className={fieldClass}>https://www.figma.com/file/:</div>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <div className={buttonClass}>Awesome</div>
        <div className={buttonClass}>Prepare</div>
      </div>

      <h2 className="mt-12 font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
