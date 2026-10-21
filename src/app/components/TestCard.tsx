import type { ReactNode } from "react";
import cx from "classix";
import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

// The frame is a bespoke dark panel with a rust accent that has no matching
// design token, so its values stay local to this component.
const TITLE_CLASS = "font-primary-bold text-[22px] leading-7";
const INPUT_CLASS =
  "mt-6 h-[66px] w-full rounded border-2 border-[#8f8f8f] bg-[#242424] px-4 font-primary text-[16px] text-[#e6e6e6] placeholder:text-[#8f8f8f]";
const BUTTON_CLASS =
  "h-[72px] w-[172px] rounded-md bg-[#9e3d0f] font-primary text-[20px] text-[#ececec]";

const BUTTONS = ["Awesome", "Prepare"];

const ChevronRow = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cx("flex items-center gap-4", className)}>
    <IoChevronUpOutline aria-hidden className="h-6 w-6 shrink-0" />
    {children}
  </div>
);

const Field = ({ id, label, placeholder, className }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[18px] leading-6">
        {label}
      </label>
      <IoInformationCircleOutline aria-hidden className="h-[22px] w-[22px]" />
    </div>
    <input id={id} className={INPUT_CLASS} placeholder={placeholder} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1a1a1a] px-8 pb-28 pt-10 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <span className={TITLE_CLASS}>UI magician Agent</span>
      <IoSettingsOutline aria-hidden className="h-7 w-7 text-[#c9c9c9]" />
    </div>

    <ChevronRow className="mt-12 text-[#c9c9c9]">
      <span className="truncate text-[18px] leading-6">
        From entire frame to a singl...
      </span>
    </ChevronRow>

    <ChevronRow className="mt-40">
      <span className={TITLE_CLASS}>Add New Design</span>
    </ChevronRow>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-10"
    />

    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-8"
    />

    <div className="mt-11 flex justify-center gap-9">
      {BUTTONS.map((label) => (
        <button key={label} type="button" className={BUTTON_CLASS}>
          {label}
        </button>
      ))}
    </div>

    <p className={cx("mt-24", TITLE_CLASS)}>Recent Breakdowns</p>
  </div>
);
