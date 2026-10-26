import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { Button } from "@app/components/button";

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-3">
      <span className="font-primary text-base text-font-subtle">{label}</span>
      <IoInformationCircleOutline
        aria-hidden
        className="shrink-0 text-icon-subtle"
        size={20}
      />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="w-full rounded-md bg-background-input p-3 font-primary-light text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col rounded-md bg-elevation-surface p-8 font-primary-light text-font shadow-lg"
  >
    <div className="flex items-center justify-between gap-4">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <IoSettingsOutline aria-hidden className="shrink-0 text-icon" size={24} />
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <IoChevronUpOutline aria-hidden className="shrink-0" size={18} />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <IoChevronUpOutline
        aria-hidden
        className="shrink-0 text-icon"
        size={20}
      />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-7 flex flex-col gap-5">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex items-center gap-4">
      <Button size="lg">Awesome</Button>
      <Button size="lg">Prepare</Button>
    </div>

    <h3 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
