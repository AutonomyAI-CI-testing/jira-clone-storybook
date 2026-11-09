import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] bg-black px-5 py-5 font-primary-bold text-xs text-[color:var(--Neutral400)]"
  >
    <div className="flex items-center justify-between">
      <span>UI magician Agent</span>
      <FaCog aria-hidden="true" size={14} />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FaChevronUp aria-hidden="true" size={9} />
      <span className="text-2xs text-[color:var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <FaChevronUp aria-hidden="true" size={12} />
      <span>Add New Design</span>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-4">
        <label
          htmlFor="test-card-access-token"
          className="text-2xs text-[color:var(--DarkNeutral800)]"
        >
          Personal Access Token
        </label>
        <FaInfoCircle aria-hidden="true" size={15} />
      </div>
      <input
        id="test-card-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-2 py-2 text-2xs text-[color:var(--Neutral400)] placeholder:text-[color:var(--Neutral700)]"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-4">
        <label
          htmlFor="test-card-design-url"
          className="text-2xs text-[color:var(--DarkNeutral800)]"
        >
          Design URL
        </label>
        <FaInfoCircle aria-hidden="true" size={15} />
      </div>
      <input
        id="test-card-design-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 w-full border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-2 py-2 text-2xs text-[color:var(--Neutral400)] placeholder:text-[color:var(--Neutral700)]"
      />
    </div>

    <div className="mt-6 flex justify-center gap-4">
      <button
        type="button"
        className="w-[85px] rounded bg-[var(--Orange800)] py-2.5 text-2xs text-[color:var(--Neutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[85px] rounded bg-[var(--Orange800)] py-2.5 text-2xs text-[color:var(--Neutral600)]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-12">Recent Breakdowns</div>
  </div>
);
