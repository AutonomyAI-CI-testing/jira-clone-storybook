import type { ReactNode } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

interface FieldProps {
  label: string;
  placeholder: string;
  borderClassName?: string;
}

const Field = ({
  label,
  placeholder,
  borderClassName = "border border-[#A5ADAD]",
}: FieldProps): JSX.Element => (
  <div className="mt-3">
    <div className="flex items-center gap-5 text-[11.5px] leading-[13.92px] text-[#A4A4A3]">
      <span>{label}</span>
      <FiInfo size={15} className="shrink-0" aria-hidden="true" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={`mt-3 h-9 w-full bg-[#272822] px-4 text-[10.5px] leading-[12.71px] text-[#737470] outline-none placeholder:text-[#737470] ${borderClassName}`}
    />
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843A17] text-[11.5px] leading-[13.92px] text-[#8C8078]"
  >
    {children}
  </button>
);

/**
 * Static reproduction of the "UI magician Agent" Figma frame (254x508).
 * Self-contained: no props, no state, no data.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] px-5 pt-5 pb-[62px] font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
        UI magician Agent
      </h1>
      <FiSettings size={16} className="text-[#B5B5B5]" aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <FiChevronUp
        size={10}
        className="shrink-0 text-[#8B9291]"
        aria-hidden="true"
      />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8B9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-[83px]" aria-hidden="true" />

    <div className="flex items-center gap-[5px] pl-[6px]">
      <FiChevronUp
        size={12}
        className="shrink-0 text-[#B2B2B1]"
        aria-hidden="true"
      />
      <h2 className="text-[13.5px] leading-[16.34px] text-[#B2B2B1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-7">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        borderClassName="border-2 border-[#929291]"
      />
    </div>

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
      Recent Breakdowns
    </h2>
  </div>
);
