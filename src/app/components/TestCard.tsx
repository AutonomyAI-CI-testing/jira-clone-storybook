import type { ReactNode } from "react";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";
import cx from "classix";

const inputClass =
  "h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px] font-primary-bold text-2xs text-[color:var(--Neutral700)] outline-none placeholder:text-[color:var(--Neutral700)]";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]";

const FieldLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-3">
    <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
      {children}
    </span>
    <FaInfoCircle
      size={15}
      aria-hidden
      className="text-[color:var(--Neutral400)]"
    />
  </div>
);

export const TestCard = () => (
  <div id="testElem" className="flex w-[254px] flex-col bg-black font-primary">
    <div className="h-[9px] w-full bg-[var(--DarkNeutral0)]" />

    <div className="flex flex-col px-5 pb-[62px] pt-3">
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-xs leading-4 text-[color:var(--Neutral400)]">
          UI magician Agent
        </h2>
        <FaCog
          size={16}
          aria-hidden
          className="text-[color:var(--Neutral400)]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FaChevronUp
          size={10}
          aria-hidden
          className="text-[color:var(--Neutral500)]"
        />
        <span className="font-primary-bold text-2xs leading-4 text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[74px] flex items-center gap-2">
        <FaChevronUp
          size={12}
          aria-hidden
          className="text-[color:var(--Neutral400)]"
        />
        <h3 className="font-primary-bold text-xs leading-4 text-[color:var(--Neutral400)]">
          Add New Design
        </h3>
      </div>

      <div className="mt-[28px] flex flex-col">
        <FieldLabel>Personal Access Token</FieldLabel>
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx("mt-[10px]", inputClass)}
        />
      </div>

      <div className="mt-[11px] flex flex-col">
        <FieldLabel>Design URL</FieldLabel>
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className={cx("mt-[9px]", inputClass)}
        />
      </div>

      <div className="mt-[22px] flex items-center gap-[17px] pl-6">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h3 className="mt-[47px] font-primary-bold text-xs leading-4 text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </h3>
    </div>
  </div>
);
