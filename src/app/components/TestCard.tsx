import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";
import cx from "classix";

const LABEL = "font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]";

const FIELD =
  "mt-3 h-9 w-full rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 font-primary-bold text-2xs text-[color:var(--Neutral400)] placeholder:text-[color:var(--Neutral700)]";

const ACTION =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]";

const Field = ({
  id,
  label,
  placeholder,
  className = "",
}: {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}) => (
  <div className={cx("flex flex-col", className)}>
    <div className="flex items-center gap-4">
      <label htmlFor={id} className={LABEL}>
        {label}
      </label>
      <FaInfoCircle
        aria-hidden
        size={15}
        className="text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <input id={id} readOnly placeholder={placeholder} className={FIELD} />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[var(--DarkNeutral-100)] font-primary"
  >
    <div className="h-[9px] w-full bg-black" />

    <div className="flex flex-col px-5 pt-3 pb-16">
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          UI magician Agent
        </span>
        <FaCog
          aria-hidden
          size={16}
          className="text-[color:var(--Neutral400)]"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FaChevronUp
          aria-hidden
          size={10}
          className="text-[color:var(--Neutral500)]"
        />
        <span className="font-primary-bold text-2xs text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-2">
        <FaChevronUp
          aria-hidden
          size={12}
          className="text-[color:var(--Neutral400)]"
        />
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <Field
        id="testElem-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-7"
      />

      <Field
        id="testElem-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-3"
      />

      <div className="mt-5 flex gap-4 pl-6">
        <button type="button" className={ACTION}>
          Awesome
        </button>
        <button type="button" className={ACTION}>
          Prepare
        </button>
      </div>

      <h2 className="mt-12 font-primary-bold text-xs text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);

export default TestCard;
