import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import cx from "classix";

import { Button } from "./button/button";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 py-8 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
      <IoSettingsOutline
        size={22}
        aria-hidden="true"
        className="text-icon-subtle"
      />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <IoChevronUp size={18} aria-hidden="true" className="text-icon" />
      <span className="truncate font-primary-light text-sm text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <SectionHeading className="mt-24">Add New Design</SectionHeading>

    <div className="mt-8 flex flex-col gap-6">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-9 flex gap-9">
      {actions.map((action) => (
        <Button key={action} type="button" className="w-[170px] py-4">
          {action}
        </Button>
      ))}
    </div>

    <SectionHeading className="mt-20">Recent Breakdowns</SectionHeading>
  </div>
);

const actions = ["Awesome", "Prepare"];

const SectionHeading = ({ children, className }: SectionHeadingProps) => (
  <div className={cx("flex items-center gap-2", className)}>
    <IoChevronUp size={22} aria-hidden="true" className="text-icon" />
    <h3 className="font-primary-bold text-xl">{children}</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-sm text-font-subtle">
        {label}
      </label>
      <IoInformationCircleOutline
        size={18}
        aria-hidden="true"
        className="text-icon-subtle"
      />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="w-full rounded-md border border-border bg-background-input p-4 font-primary-light text-sm text-font placeholder:text-font-subtlest"
    />
  </div>
);

interface SectionHeadingProps {
  children: string;
  className?: string;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
