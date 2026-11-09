import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pt-5 pb-[62px] font-primary text-2xs"
  >
    <div className="flex items-center justify-between">
      <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
        UI magician Agent
      </span>
      <FaCog
        aria-hidden="true"
        size={14}
        className="text-[color:var(--Neutral400)]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FaChevronUp
        aria-hidden="true"
        size={8}
        className="text-[color:var(--Neutral500)]"
      />
      <span className="font-primary-bold text-[color:var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FaChevronUp
        aria-hidden="true"
        size={12}
        className="text-[color:var(--Neutral400)]"
      />
      <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <label
        htmlFor="test-card-token"
        className="font-primary-bold text-[color:var(--DarkNeutral800)]"
      >
        Personal Access Token
      </label>
      <FaInfoCircle
        aria-hidden="true"
        size={15}
        className="text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <input
      id="test-card-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded-none border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-5 text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
    />

    <div className="mt-3 flex items-center gap-2">
      <label
        htmlFor="test-card-design-url"
        className="font-primary-bold text-[color:var(--DarkNeutral800)]"
      >
        Design URL
      </label>
      <FaInfoCircle
        aria-hidden="true"
        size={15}
        className="text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <input
      id="test-card-design-url"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-9 w-full rounded-none border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-5 text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
    />

    <div className="mt-[22px] ml-6 flex gap-4">
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

    <h2 className="mt-[46px] text-xs font-primary-bold text-[color:var(--Neutral400)]">
      Recent Breakdowns
    </h2>
  </div>
);
