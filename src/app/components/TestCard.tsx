import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const sectionTitle = "text-xs font-primary-bold text-[color:var(--Neutral400)]";
const fieldLabel =
  "text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]";
const fieldInput =
  "h-9 w-full rounded bg-[var(--DarkNeutral200)] py-2 pl-[19px] pr-2 text-2xs font-primary-bold text-[color:var(--Neutral400)] placeholder:text-[color:var(--Neutral700)] border-[color:var(--DarkNeutral800)]";
const panelButton =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-center text-2xs font-primary-bold text-[color:var(--Neutral600)]";

export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-[var(--DarkNeutral-100)] font-primary">
    <div className="h-[9px] w-full bg-black" />

    <div className="px-5 pb-[62px]">
      <div className="flex items-start justify-between pt-3">
        <span className={sectionTitle}>UI magician Agent</span>
        <FaCog size={15} aria-hidden className="text-[color:var(--Neutral400)]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FaChevronUp
          size={8}
          aria-hidden
          className="shrink-0 text-[color:var(--Neutral500)]"
        />
        <span className="text-2xs font-primary-bold text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[74px] flex items-center gap-[5px]">
        <FaChevronUp
          size={12}
          aria-hidden
          className="shrink-0 text-[color:var(--Neutral400)]"
        />
        <span className={sectionTitle}>Add New Design</span>
      </div>

      <div className="mt-[28px]">
        <div className="flex items-center justify-between">
          <label htmlFor="testElem-access-token" className={fieldLabel}>
            Personal Access Token
          </label>
          <FaInfoCircle
            size={15}
            aria-hidden
            className="shrink-0 text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          id="testElem-access-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`${fieldInput} mt-[10px] border`}
        />
      </div>

      <div className="mt-[11px]">
        <div className="flex items-center gap-2">
          <label htmlFor="testElem-design-url" className={fieldLabel}>
            Design URL
          </label>
          <FaInfoCircle
            size={15}
            aria-hidden
            className="shrink-0 text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          id="testElem-design-url"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className={`${fieldInput} mt-[9px] border-2`}
        />
      </div>

      <div className="mt-[22px] flex justify-end gap-[17px]">
        <button type="button" className={panelButton}>
          Awesome
        </button>
        <button type="button" className={panelButton}>
          Prepare
        </button>
      </div>

      <h2 className={`mt-[47px] ${sectionTitle}`}>Recent Breakdowns</h2>
    </div>
  </div>
);
