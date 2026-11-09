import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const fieldLabel = "text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]";

const fieldInput =
  "w-full rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-2 text-2xs font-primary-bold text-[color:var(--Neutral700)] outline-none placeholder:text-[color:var(--Neutral700)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black p-5 font-primary text-[color:var(--Neutral400)]"
  >
    <div className="flex items-center justify-between">
      <span className="text-xs font-primary-bold">UI magician Agent</span>
      <FaCog aria-hidden="true" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[color:var(--Neutral500)]">
      <FaChevronUp aria-hidden="true" size={10} />
      <span className="text-2xs font-primary-bold">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-3">
      <FaChevronUp aria-hidden="true" size={12} />
      <span className="text-xs font-primary-bold">Add New Design</span>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-3">
        <span className={fieldLabel}>Personal Access Token</span>
        <FaInfoCircle aria-hidden="true" size={15} />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`mt-3 h-9 ${fieldInput}`}
      />
    </div>

    <div className="mt-[11px]">
      <div className="flex items-center gap-3">
        <span className={fieldLabel}>Design URL</span>
        <FaInfoCircle aria-hidden="true" size={15} />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={`mt-[11px] h-[37px] ${fieldInput}`}
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral600)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-xs font-primary-bold">Recent Breakdowns</h2>
  </div>
);
