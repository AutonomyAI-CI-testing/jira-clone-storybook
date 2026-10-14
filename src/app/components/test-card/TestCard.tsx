import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * A self-contained smoke-test card, drawn from a Figma frame of the "UI
 * magician Agent" panel. It takes no props and holds no state: every value
 * below is fixed content from the design.
 *
 * Colours use this repo's own dark-neutral ramp rather than the frame's hex
 * values; the button fill has no matching token, so it uses the nearest
 * palette step.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[var(--DarkNeutral0)] text-[var(--DarkNeutral900)]"
    >
      <div className="h-[9px] w-full bg-[var(--DarkNeutral-100)]" />

      <div className="px-5 pb-16 pt-[11px]">
        <div className="flex h-4 items-center justify-between">
          <span className="font-primary-bold text-[13.5px] leading-4">
            UI magician Agent
          </span>
          <button
            type="button"
            aria-label="Open settings"
            className="cursor-pointer text-[var(--DarkNeutral800)] hover:text-[var(--DarkNeutral900)]"
          >
            <FiSettings aria-hidden="true" size={16} />
          </button>
        </div>

        <div className="mt-[18px] flex items-center gap-2">
          <FiChevronUp
            aria-hidden="true"
            size={12}
            className="shrink-0 text-[var(--DarkNeutral900)]"
          />
          <span className="truncate text-[11.5px] leading-[14px] text-[var(--DarkNeutral700)]">
            From entire frame to a single component
          </span>
        </div>

        <div className="mt-[77px] flex items-center gap-2">
          <FiChevronUp
            aria-hidden="true"
            size={12}
            className="shrink-0 text-[var(--DarkNeutral900)]"
          />
          <span className="font-primary-bold text-[13.5px] leading-4">
            Add New Design
          </span>
        </div>

        <div className="mt-[28px] flex items-center gap-2">
          <label
            htmlFor="test-card-token"
            className="text-[11.5px] leading-[14px] text-[var(--DarkNeutral800)]"
          >
            Personal Access Token
          </label>
          <FiInfo
            aria-hidden="true"
            size={15}
            className="shrink-0 text-[var(--DarkNeutral800)]"
          />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[12px] h-[36px] w-full border border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] pl-[18px] text-[11.5px] text-[var(--DarkNeutral900)] outline-none placeholder:text-[var(--DarkNeutral600)]"
        />

        <div className="mt-[11px] flex items-center gap-2">
          <label
            htmlFor="test-card-url"
            className="text-[11.5px] leading-[14px] text-[var(--DarkNeutral800)]"
          >
            Design URL
          </label>
          <FiInfo
            aria-hidden="true"
            size={15}
            className="shrink-0 text-[var(--DarkNeutral800)]"
          />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-[11px] h-[37px] w-full border-2 border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] pl-[18px] text-[10.5px] text-[var(--DarkNeutral900)] outline-none placeholder:text-[var(--DarkNeutral600)]"
        />

        <div className="mt-[21px] flex gap-[17px] pl-6">
          <button
            type="button"
            className="h-[40px] w-[87px] cursor-pointer rounded-[4px] border-2 border-[var(--DarkNeutral-100)] bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[var(--DarkNeutral600)]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[40px] w-[87px] cursor-pointer rounded-[4px] border-2 border-[var(--DarkNeutral-100)] bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[var(--DarkNeutral600)]"
          >
            Prepare
          </button>
        </div>

        <h3 className="mt-[45px] font-primary-bold text-[13.5px] leading-4">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
