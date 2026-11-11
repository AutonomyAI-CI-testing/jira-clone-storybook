import type { ReactNode } from "react";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { Button } from "@app/components/button/button";

const inputClass =
  "w-full rounded-md border border-border-input bg-background-input p-3 font-primary text-font outline-none placeholder:text-font-subtlest hover:bg-background-input-hovered focus-visible:bg-background-input-pressed focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand";

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className="flex items-center gap-3 font-primary-black text-2xl text-font">
    <IoChevronUp aria-hidden className="shrink-0 text-icon" />
    <span>{children}</span>
  </h2>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label className="font-primary text-base text-font" htmlFor={id}>
        {label}
      </label>
      <IoInformationCircleOutline
        aria-label={`More information about ${label}`}
        className="text-icon-subtle"
        role="img"
      />
    </div>
    <input className={inputClass} id={id} placeholder={placeholder} type="text" />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 bg-elevation-surface p-8 font-primary text-font"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-xl text-font">UI magician Agent</h1>
      <IoSettingsOutline
        aria-label="Settings"
        className="shrink-0 text-icon"
        role="img"
      />
    </div>

    <div className="flex items-center gap-3">
      <IoChevronUp aria-hidden className="shrink-0 text-icon" />
      <span className="max-w-[300px] truncate font-primary text-base text-font-subtle">
        From entire frame to a single component
      </span>
    </div>

    <div className="flex flex-col gap-6 pt-10">
      <SectionHeading>Add New Design</SectionHeading>
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file:"
      />
      <div className="flex gap-8 pl-2 pt-2">
        <Button className="w-40" color="danger" size="lg" type="button">
          Awesome
        </Button>
        <Button className="w-40" color="danger" size="lg" type="button">
          Prepare
        </Button>
      </div>
    </div>

    <div className="pt-10">
      <SectionHeading>Recent Breakdowns</SectionHeading>
    </div>
  </div>
);
