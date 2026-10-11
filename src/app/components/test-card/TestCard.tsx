import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a static reproduction of a Figma frame ("UI magician
 * Agent" settings panel).
 *
 * Deliberately self-contained and deliberately outside this repo's semantic
 * design-token system — it uses raw hex literals instead of theme tokens
 * (`text-font`, `bg-elevation-surface`, …). That is an intentional exception
 * for a throwaway design-to-code smoke test, not a pattern to copy into
 * product components.
 */

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp size={12} className="text-[#8b9291]" />
      <span className="font-primary-bold text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp size={14} className="text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      labelColor="text-[#a4a4a3]"
      borderClassName="border border-[#a5adad]"
      value="figd_xxxxxxxxxxxxxxxxxx"
      valueColor="text-[#737470]"
    />

    <Field
      className="mt-3"
      label="Design URL"
      labelColor="text-[#a3a3a2]"
      borderClassName="border-2 border-[#929291]"
      value="https://www.figma.com/file/:"
      valueColor="text-[#71726e]"
    />

    <div className="mt-6 flex gap-4 pl-6">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-9 w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-12 font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({
  className,
  label,
  labelColor,
  borderClassName,
  value,
  valueColor,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className={`font-primary-bold text-[11.5px] ${labelColor}`}>
        {label}
      </span>
      <FiInfo size={15} className={labelColor} />
    </div>
    <div
      className={`mt-3 flex h-9 w-full items-center bg-[#272822] px-5 ${borderClassName}`}
    >
      <span className={`font-primary text-[11.5px] ${valueColor}`}>
        {value}
      </span>
    </div>
  </div>
);

interface FieldProps {
  className: string;
  label: string;
  labelColor: string;
  borderClassName: string;
  value: string;
  valueColor: string;
}

export default TestCard;
