import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static mock-up of the "UI magician Agent" panel from the Figma test frame.
 * Self-contained: no props, no state, no data source.
 *
 * Design values are approximated with the nearest declared design tokens:
 * the panel fill uses `bg-black`, the input wells `--DarkNeutral200`, their
 * edges `--DarkNeutral800`, the orange buttons `--Orange800`, and the text
 * roles `--Neutral400` / `--Neutral500` / `--Neutral600` / `--Neutral700`.
 */
export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-black font-primary text-xs">
    <div className="h-[9px] w-full bg-[var(--DarkNeutral100)]" />

    <div className="px-5 pb-[62px] pt-5">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold leading-4 text-[color:var(--Neutral400)]">
          UI magician Agent
        </h1>
        <FaCog size={16} className="text-[color:var(--Neutral400)]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FaChevronUp size={8} className="text-[color:var(--Neutral500)]" />
        <span className="font-primary-bold leading-4 text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[7px]">
        <FaChevronUp size={12} className="text-[color:var(--Neutral400)]" />
        <h2 className="font-primary-bold leading-4 text-[color:var(--Neutral400)]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[28px]">
        <div className="flex items-center gap-[7px]">
          <label
            htmlFor="test-card-token"
            className="font-primary-bold leading-4 text-[color:var(--DarkNeutral800)]"
          >
            Personal Access Token
          </label>
          <FaInfoCircle
            size={15}
            className="text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          id="test-card-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[36px] w-full rounded-none border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px] text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
        />
      </div>

      <div className="mt-[11px]">
        <div className="flex items-center gap-[7px]">
          <label
            htmlFor="test-card-url"
            className="font-primary-bold leading-4 text-[color:var(--DarkNeutral800)]"
          >
            Design URL
          </label>
          <FaInfoCircle
            size={15}
            className="text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          id="test-card-url"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-full rounded-none border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px] text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
        />
      </div>

      <div className="mt-[22px] flex items-center gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[47px] font-primary-bold leading-4 text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
