import cx from "classix";
import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

/**
 * Smoke-test card reproducing the "UI magician Agent" panel from the Figma
 * reference. Self-contained: no props, no external state.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1a1a1a] px-10 pt-10 pb-16 font-primary text-[#f0f0f0]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-[22px] leading-tight">
          UI magician Agent
        </h2>
        <button type="button" aria-label="Settings" className="text-[#f0f0f0]">
          <LuSettings size={26} aria-hidden="true" />
        </button>
      </div>

      <div className="mt-10 flex items-center gap-3 text-[17px] text-[#b0b0b0]">
        <LuChevronUp size={20} className="shrink-0" aria-hidden="true" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <SectionHeading className="mt-40" collapsible>
        Add New Design
      </SectionHeading>

      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-16"
      />

      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-8"
      />

      <div className="mt-12 flex gap-8">
        <CardButton>Awesome</CardButton>
        <CardButton>Prepare</CardButton>
      </div>

      <SectionHeading className="mt-24">Recent Breakdowns</SectionHeading>
    </div>
  );
};

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  collapsible?: boolean;
}

const SectionHeading = ({
  children,
  className = "",
  collapsible = false,
}: SectionHeadingProps) => (
  <div className={cx("flex items-center gap-3", className)}>
    {collapsible && (
      <LuChevronUp size={22} className="shrink-0" aria-hidden="true" />
    )}
    <h3 className="font-primary-bold text-[19px] leading-tight">{children}</h3>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

const Field = ({ id, label, placeholder, className = "" }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[16px] text-[#d9d9d9]">
        {label}
      </label>
      <LuInfo size={20} className="text-[#d9d9d9]" aria-hidden="true" />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="mt-6 h-[70px] w-full rounded border border-[#5c5c5c] bg-[#1f1f1f] px-9 text-[17px] text-[#d9d9d9] placeholder:text-[#8a8a8a] focus:outline-none"
    />
  </div>
);

interface CardButtonProps {
  children: React.ReactNode;
}

const CardButton = ({ children }: CardButtonProps) => (
  <button
    type="button"
    className="h-10 w-[170px] rounded-lg bg-[#9e4020] text-[17px] text-[#a8a8a8]"
  >
    {children}
  </button>
);

export default TestCard;
