import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary text-2xs text-[color:var(--Neutral400)]"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-primary-bold">UI magician Agent</h2>
        <FaCog size={16} aria-hidden="true" />
      </div>

      <div className="mt-4 flex items-center gap-2 font-primary-bold text-[color:var(--Neutral500)]">
        <FaChevronUp size={10} aria-hidden="true" />
        <span>From entire frame to a singl...</span>
      </div>

      <h3 className="mt-20 flex items-center gap-2 text-xs font-primary-bold">
        <FaChevronUp size={12} aria-hidden="true" />
        Add New Design
      </h3>

      <label className="mt-7 block">
        <span className="flex items-center gap-2 font-primary-bold text-[color:var(--DarkNeutral800)]">
          Personal Access Token
          <FaInfoCircle size={15} aria-hidden="true" />
        </span>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 font-primary-bold text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
        />
      </label>

      <label className="mt-3 block">
        <span className="flex items-center gap-2 font-primary-bold text-[color:var(--DarkNeutral800)]">
          Design URL
          <FaInfoCircle size={15} aria-hidden="true" />
        </span>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-9 w-full border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 font-primary-bold text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
        />
      </label>

      <div className="mt-5 flex justify-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[color:var(--Neutral600)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[color:var(--Neutral600)]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-11 text-xs font-primary-bold">Recent Breakdowns</h3>
    </div>
  );
};
