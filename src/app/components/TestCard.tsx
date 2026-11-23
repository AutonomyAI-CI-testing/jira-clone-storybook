import { useState, type ReactNode } from "react";
import cx from "classix";

/**
 * Smoke-test component: draws the cropped Figma frame ("UI magician Agent"
 * panel) as a self-contained card. It takes no props and is not wired into any
 * route.
 *
 * The frame's own measures and colours are written as Tailwind arbitrary values
 * because none of them have an equivalent in the app's semantic tokens.
 */
export function TestCard() {
  const [agentSectionOpen, setAgentSectionOpen] = useState(true);
  const [designSectionOpen, setDesignSectionOpen] = useState(true);

  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-black px-5 py-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-4 text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon className="h-4 w-[14px] text-[#b5b5b5]" />
      </div>

      <SectionToggle
        open={agentSectionOpen}
        onToggle={() => setAgentSectionOpen((open) => !open)}
        label="From entire frame to a singl..."
        className="mt-[18px]"
        labelClassName="text-[11.5px] leading-[14px] text-[#8b9291]"
        chevronClassName="h-[5px] w-2 text-[#8b9291]"
      />
      <div
        aria-hidden="true"
        className={agentSectionOpen ? "h-[77px]" : "h-[18px]"}
      />

      <SectionToggle
        open={designSectionOpen}
        onToggle={() => setDesignSectionOpen((open) => !open)}
        label="Add New Design"
        labelClassName="text-[13.5px] leading-4 text-[#b2b2b1]"
        chevronClassName="h-2 w-3 text-[#b2b2b1]"
      />

      {designSectionOpen && (
        <>
          <FieldLabel htmlFor="test-card-token" className="mt-7 text-[#a4a4a3]">
            Personal Access Token
          </FieldLabel>
          <TextField
            id="test-card-token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-3 h-9 border border-[#a5adad] px-[19px] text-[#737470] placeholder:text-[#737470]"
          />

          <FieldLabel htmlFor="test-card-url" className="mt-3 text-[#a3a3a2]">
            Design URL
          </FieldLabel>
          <TextField
            id="test-card-url"
            placeholder="https://www.figma.com/file/:"
            className="mt-3 h-[37px] border-2 border-[#929291] px-5 text-[#71726e] placeholder:text-[#71726e]"
          />

          <div className="mt-[22px] flex items-center justify-center gap-4">
            <ActionButton>Awesome</ActionButton>
            <ActionButton>Prepare</ActionButton>
          </div>
        </>
      )}

      <h2 className="mt-12 text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

interface SectionToggleProps {
  open: boolean;
  onToggle: () => void;
  label: string;
  className?: string;
  labelClassName?: string;
  chevronClassName?: string;
}

function SectionToggle({
  open,
  onToggle,
  label,
  className,
  labelClassName,
  chevronClassName,
}: SectionToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className={cx("flex items-center gap-2 text-left", className)}
    >
      <ChevronUp
        className={cx(
          "shrink-0 transition-transform",
          chevronClassName,
          !open && "rotate-180"
        )}
      />
      <span className={labelClassName}>{label}</span>
    </button>
  );
}

interface FieldLabelProps {
  htmlFor: string;
  className?: string;
  children: ReactNode;
}

function FieldLabel({ htmlFor, className, children }: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cx(
        "flex items-center gap-3 text-[11.5px] leading-[14px]",
        className
      )}
    >
      {children}
      <InfoIcon className="h-[15px] w-[15px]" />
    </label>
  );
}

interface TextFieldProps {
  id: string;
  placeholder: string;
  className?: string;
}

function TextField({ id, placeholder, className }: TextFieldProps) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={cx(
        "w-full bg-[#272822] text-[11.5px] leading-[14px] outline-none",
        className
      )}
    />
  );
}

function ActionButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
    >
      {children}
    </button>
  );
}

function GearIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 8 5" fill="none" aria-hidden="true" className={className}>
      <path
        d="M0.5 4.25 4 0.75l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <circle cx="8" cy="8" r="7.25" stroke="currentColor" />
      <path d="M8 7.25v4.25" stroke="currentColor" strokeLinecap="round" />
      <circle cx="8" cy="4.75" r="0.9" fill="currentColor" />
    </svg>
  );
}
