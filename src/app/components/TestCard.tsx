import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const panelLabel = "text-xs font-primary-bold text-[color:var(--Neutral400)]";
const fieldLabel =
  "text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]";
const iconColor = "shrink-0 text-[color:var(--DarkNeutral800)]";
const inputBase =
  "mt-2 h-9 w-full bg-[var(--DarkNeutral200)] px-3 text-2xs font-primary-bold text-[color:var(--Neutral700)] outline-none border-[color:var(--DarkNeutral800)] placeholder:text-[color:var(--Neutral700)]";
const actionButton =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral600)]";

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <span className={fieldLabel}>{children}</span>
    <FaInfoCircle aria-hidden="true" size={14} className={iconColor} />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black font-primary"
  >
    <div className="h-[9px] w-full bg-[var(--DarkNeutral-100)]" />

    <div className="flex flex-1 flex-col px-5 pb-6 pt-3">
      <div className="flex items-start justify-between">
        <span className={panelLabel}>UI magician Agent</span>
        <FaCog
          aria-hidden="true"
          size={15}
          className="shrink-0 text-[color:var(--Neutral400)]"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FaChevronUp
          aria-hidden="true"
          size={9}
          className="shrink-0 text-[color:var(--Neutral500)]"
        />
        <span className="text-2xs font-primary-bold text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[70px] flex items-center gap-2">
        <FaChevronUp
          aria-hidden="true"
          size={12}
          className="shrink-0 text-[color:var(--Neutral400)]"
        />
        <span className={panelLabel}>Add New Design</span>
      </div>

      <div className="mt-6">
        <FieldLabel>Personal Access Token</FieldLabel>
        <input
          readOnly
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`border ${inputBase}`}
        />
      </div>

      <div className="mt-4">
        <FieldLabel>Design URL</FieldLabel>
        <input
          readOnly
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`border-2 ${inputBase}`}
        />
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button type="button" className={actionButton}>
          Awesome
        </button>
        <button type="button" className={actionButton}>
          Prepare
        </button>
      </div>

      <h3 className={`mt-11 ${panelLabel}`}>Recent Breakdowns</h3>
    </div>
  </div>
);
