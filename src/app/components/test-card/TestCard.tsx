import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

import { Button } from "@app/components/button";

const iconButtonClass =
  "flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full text-icon hover:bg-background-brand-subtlest hover:text-icon-brand";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  const inputId = `test-card-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputId}
        className="flex items-center gap-2 text-font-subtle"
      >
        {label}
        <HiOutlineInformationCircle aria-hidden size={18} className="shrink-0" />
      </label>
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        className="box-border w-full rounded-md border-none bg-background-input p-3 text-font outline-none placeholder:text-font-subtlest"
      />
    </div>
  );
};

const SectionHeading = ({ label }: SectionHeadingProps): JSX.Element => (
  <div className="flex items-center gap-2">
    <HiChevronUp aria-hidden size={20} className="shrink-0" />
    <span className="font-primary-bold text-lg">{label}</span>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-10 bg-elevation-surface p-5 text-font"
  >
    <div className="flex items-center justify-between gap-4">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <button
        type="button"
        aria-label="Agent settings"
        className={iconButtonClass}
      >
        <HiOutlineCog size={24} />
      </button>
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <HiChevronUp aria-hidden size={20} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <section className="flex flex-col gap-6">
      <SectionHeading label="Add New Design" />
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      <div className="flex gap-4">
        <Button color="warning" variant="contained" className="w-[172px]">
          Awesome
        </Button>
        <Button color="warning" variant="contained" className="w-[172px]">
          Prepare
        </Button>
      </div>
    </section>

    <SectionHeading label="Recent Breakdowns" />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface SectionHeadingProps {
  label: string;
}
