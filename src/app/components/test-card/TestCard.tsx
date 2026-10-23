import cx from "classix";
import { HiOutlineCog, HiQuestionMarkCircle } from "react-icons/hi";
import { RiArrowUpSLine } from "react-icons/ri";

import { Button } from "@app/components/button";

const InfoIcon = (): JSX.Element => (
  <HiQuestionMarkCircle aria-hidden className="h-6 w-6 shrink-0 text-icon-subtle" />
);

interface SectionRowProps {
  label: string;
  className?: string;
}

const SectionRow = ({ label, className }: SectionRowProps): JSX.Element => (
  <div className={cx("flex min-w-0 items-center gap-2", className)}>
    <RiArrowUpSLine aria-hidden className="h-6 w-6 shrink-0 text-icon-subtle" />
    <span className="truncate">{label}</span>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-3">
      <span className="text-font-subtle">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="rounded-md border border-border bg-background-input p-3 text-font outline outline-2 outline-transparent placeholder:font-primary-light placeholder:text-base placeholder:text-font-subtlest focus:bg-background-input-pressed focus-visible:outline-border-brand"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-8 bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <HiOutlineCog aria-hidden className="h-7 w-7 shrink-0 text-icon-subtle" />
    </div>

    <SectionRow label="From entire frame to a singl..." className="text-lg" />

    <SectionRow label="Add New Design" className="font-primary-bold text-2xl" />

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="flex items-center gap-6">
      <Button className="px-10 py-3">Awesome</Button>
      <Button className="px-10 py-3">Prepare</Button>
    </div>

    <h2 className="mt-4 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
