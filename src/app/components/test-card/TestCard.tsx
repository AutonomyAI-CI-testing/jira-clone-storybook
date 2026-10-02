import type { ReactNode } from "react";
import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// Smoke-test replica of the "UI magician Agent" reference frame. That frame is
// an external dark panel rather than this app's design system, so the colours
// below are literal approximations read off the frame instead of the app's
// semantic colour tokens (bg-elevation-*, text-font-*, ...).
const HEADING = "font-primary-bold text-[22px] text-[#c9cccf]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] max-w-full rounded-[4px] bg-[#1a1a1a] px-[42px] pb-[60px] pt-[44px] font-primary text-[#c9cccf]"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-bold text-[28px] leading-none text-[#c9cccf]">
        UI magician Agent
      </h2>
      <FiSettings className="h-9 w-9 shrink-0 text-[#c9cccf]" aria-hidden />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp className="h-5 w-5 shrink-0 text-[#9ea1a4]" aria-hidden />
      <span className="min-w-0 truncate text-[19px] text-[#9ea1a4]">
        From entire frame to a singl...
      </span>
    </div>

    <h3 className={cx("mt-[128px] flex items-center gap-3", HEADING)}>
      <FiChevronUp className="h-6 w-6 shrink-0" strokeWidth={3} aria-hidden />
      Add New Design
    </h3>

    <FormField
      className="mt-[64px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <FormField
      className="mt-7"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex gap-8 pl-[46px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className={cx("mt-[100px]", HEADING)}>Recent Breakdowns</h3>
  </div>
);

interface FormFieldProps {
  label: string;
  placeholder: string;
  className?: string;
}

const FormField = ({
  label,
  placeholder,
  className,
}: FormFieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-4">
      <span className="text-[19px] text-[#c9cccf]">{label}</span>
      <FiInfo className="h-7 w-7 shrink-0 text-[#c9cccf]" aria-hidden />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="mt-8 h-[64px] w-full rounded-[2px] border border-[#8a8d90] bg-[#212121] px-5 text-[18px] text-[#c9cccf] outline-none placeholder:text-[#6f7275]"
    />
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    type="button"
    className="flex h-[72px] w-[172px] items-center justify-center rounded-[4px] bg-[#a04a20] text-[19px] text-[#cdc5c0]"
  >
    {children}
  </button>
);
