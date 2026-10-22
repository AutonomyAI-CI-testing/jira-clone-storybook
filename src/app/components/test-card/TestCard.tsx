import type { ReactNode } from "react";
import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const ICON_SIZE = 26;

/**
 * Static replica of the "UI magician Agent" settings panel from the Figma
 * frame. Self-contained: no props, no state, no behaviour.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-10 py-8 font-primary text-[#bdbdbd]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[1.25rem] leading-none text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <HiOutlineCog
          size={ICON_SIZE}
          className="text-[#d0d0d0]"
          aria-hidden="true"
        />
      </div>

      <CollapsibleRow
        className="mt-7"
        tone="muted"
        label="From entire frame to a singl..."
      />

      <CollapsibleRow className="mt-24" tone="heading" label="Add New Design" />

      <Field
        className="mt-9"
        inputId="test-card-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        className="mt-6"
        inputId="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        placeholderClassName="placeholder:text-[#a3a3a3]"
      />

      <div className="mt-9 flex justify-center gap-8">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-16 font-primary-bold text-[1.375rem] leading-none text-[#e6e6e6]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

function CollapsibleRow({
  className,
  label,
  tone,
}: {
  className?: string;
  label: string;
  tone: "muted" | "heading";
}) {
  return (
    <div className={cx("flex min-w-0 items-center gap-2", className)}>
      <HiChevronUp size={ICON_SIZE} aria-hidden="true" />
      <span
        className={cx(
          "truncate",
          tone === "heading"
            ? "font-primary-bold text-[1.375rem] leading-none text-[#e6e6e6]"
            : "text-[1.0625rem] text-[#cfcfcf]"
        )}
      >
        {label}
      </span>
    </div>
  );
}

function Field({
  className,
  inputId,
  label,
  placeholder,
  placeholderClassName,
}: {
  className?: string;
  inputId: string;
  label: string;
  placeholder: string;
  placeholderClassName?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <label
          htmlFor={inputId}
          className="font-primary-bold text-[1.0625rem] text-[#bdbdbd]"
        >
          {label}
        </label>
        <HiOutlineInformationCircle
          size={ICON_SIZE}
          className="text-[#c9c9c9]"
          aria-hidden="true"
        />
      </div>
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        className={cx(
          "mt-4 w-full rounded-[3px] border border-[#8a8a8a] bg-[#1b1b1b] px-4 py-4 text-[1.0625rem] text-[#d6d6d6] outline-none placeholder:text-[#7c7c7c]",
          placeholderClassName
        )}
      />
    </div>
  );
}

function ActionButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="h-[62px] w-[170px] cursor-pointer rounded-md bg-[#a94a28] font-primary-bold text-[1.1875rem] text-[#d8b3a5] transition-colors hover:bg-[#b8542e]"
    >
      {children}
    </button>
  );
}
