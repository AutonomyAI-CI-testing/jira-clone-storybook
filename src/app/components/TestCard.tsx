import { MdOutlineExpandLess, MdOutlineInfo, MdOutlineSettings } from "react-icons/md";

import { Button } from "@app/components/button";

const inputClassName =
  "mt-3 w-full rounded-md border-none bg-background-input p-3 text-base text-font outline-none placeholder:text-font-subtlest";

const SectionHeading = ({ label }: SectionHeadingProps): JSX.Element => (
  <div className="flex items-center gap-2">
    <MdOutlineExpandLess size={24} className="shrink-0 text-font" />
    <span className="text-xl text-font">{label}</span>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center justify-between">
      <span className="text-base text-font-subtle">{label}</span>
      <MdOutlineInfo size={22} className="shrink-0 text-font-subtle" />
    </div>
    <input readOnly className={inputClassName} placeholder={placeholder} />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-elevation-surface-sunken p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="text-xl text-font-subtle">UI magician Agent</span>
      <MdOutlineSettings size={24} className="shrink-0 text-font-subtle" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <MdOutlineExpandLess size={22} className="shrink-0 text-font-subtle" />
      <span className="truncate text-lg text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-32">
      <SectionHeading label="Add New Design" />
    </div>

    <div className="mt-10">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="mt-10 flex gap-9">
      <Button className="px-10 py-2.5">Awesome</Button>
      <Button className="px-10 py-2.5">Prepare</Button>
    </div>

    <div className="mt-20">
      <SectionHeading label="Recent Breakdowns" />
    </div>
  </div>
);

interface SectionHeadingProps {
  label: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
}
