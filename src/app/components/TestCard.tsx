import cx from "classix";
import type { ReactNode } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldClass =
  "flex items-center border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[18px] text-[var(--Neutral700)]";

const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[var(--Orange800)] text-[var(--DarkNeutral600)]";

const FieldLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2 text-[var(--DarkNeutral800)]">
    <span>{children}</span>
    <FiInfo size={15} />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-8 pt-5 font-primary text-[11.5px] leading-[14px] text-[var(--Neutral400)]"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-4">
        UI magician Agent
      </span>
      <FiSettings size={16} />
    </div>

    <div className="mt-5 flex items-center gap-2 text-[var(--DarkNeutral700)]">
      <FiChevronUp size={12} />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[76px] flex items-center gap-2">
      <FiChevronUp size={12} />
      <span className="font-primary-bold text-[13.5px] leading-4">
        Add New Design
      </span>
    </div>

    <div className="mt-7">
      <FieldLabel>Personal Access Token</FieldLabel>
      <div className={cx(fieldClass, "mt-3 h-9 border")}>
        figd_xxxxxxxxxxxxxxxxxx
      </div>
    </div>

    <div className="mt-3">
      <FieldLabel>Design URL</FieldLabel>
      <div
        className={cx(
          fieldClass,
          "mt-3 h-[37px] border-2 text-[10.5px] leading-[13px]"
        )}
      >
        https://www.figma.com/file/:
      </div>
    </div>

    <div className="mt-[22px] flex justify-end gap-[17px]">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={buttonClass}>
          {label}
        </button>
      ))}
    </div>

    <div className="mt-[46px] font-primary-bold text-[13.5px] leading-4">
      Recent Breakdowns
    </div>
  </div>
);
