import type { ReactNode } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" settings panel from the Figma
 * smoke-test frame. Self-contained: no props, no state, no side effects.
 *
 * The frame is a hardcoded dark surface that no semantic theme token resolves
 * to, so its colours are written as arbitrary values rather than tokens.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pt-5 pb-[62px] font-primary text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold">UI magician Agent</span>
      <FiSettings aria-hidden className="h-4 w-4" />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#8b9291]">
      <FiChevronUp aria-hidden className="h-2.5 w-2.5 shrink-0" />
      <span>From entire frame to a singl...</span>
    </div>

    <SectionHeading className="mt-[77px]">Add New Design</SectionHeading>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-7"
    />

    <Field
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      emphasized
      className="mt-3"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <SectionHeading className="mt-[47px] text-[#b0b0b0]">
      Recent Breakdowns
    </SectionHeading>
  </div>
);

const SectionHeading = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`flex items-center gap-2 font-primary-bold text-[#b2b2b1] ${className}`}
  >
    <FiChevronUp aria-hidden className="h-3 w-3 shrink-0" />
    <span>{children}</span>
  </div>
);

const Field = ({
  id,
  label,
  placeholder,
  emphasized = false,
  className = "",
}: {
  id: string;
  label: string;
  placeholder: string;
  emphasized?: boolean;
  className?: string;
}) => (
  <div className={`text-[11.5px] leading-[13.92px] text-[#a4a4a3] ${className}`}>
    <div className="flex items-center justify-between">
      <label htmlFor={id}>{label}</label>
      <FiInfo aria-hidden className="h-[15px] w-[15px]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={`mt-3 h-9 w-full bg-[#272822] px-3 text-[11.5px] text-[#737470] placeholder:text-[#737470] ${
        emphasized ? "border-2 border-[#929291]" : "border border-[#a5adad]"
      }`}
    />
  </div>
);

const PanelButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
  >
    {children}
  </button>
);
