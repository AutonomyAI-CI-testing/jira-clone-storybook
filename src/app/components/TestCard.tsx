import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

import { Button } from "./button/button";

const INPUT_CLASSES =
  "h-[36px] w-full rounded border-none bg-background-input pl-5 pr-3 text-2xs text-font outline outline-2 outline-border-input placeholder:font-primary-light placeholder:text-2xs placeholder:text-font-subtlest";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] rounded bg-elevation-surface-sunken p-5 pb-14 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="text-icon-subtle hover:text-icon"
      >
        <HiOutlineCog size={16} aria-hidden />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <HiChevronUp
        size={14}
        className="shrink-0 text-icon-subtle"
        aria-hidden
      />
      <p className="truncate font-primary text-2xs text-font-subtle">
        From entire frame to a single component
      </p>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <HiChevronUp
        size={16}
        className="shrink-0 text-icon-subtle"
        aria-hidden
      />
      <h3 className="font-primary-bold text-xs">Add New Design</h3>
    </div>

    <Field
      className="mt-7"
      id="testElem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-3"
      id="testElem-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-6 flex justify-center gap-4">
      <Button color="warning" className="w-[85px] py-[10px] font-primary-bold">
        Awesome
      </Button>
      <Button color="warning" className="w-[85px] py-[10px] font-primary-bold">
        Prepare
      </Button>
    </div>

    <h3 className="mt-12 font-primary-bold text-xs">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder, className }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-2xs text-font-subtle">
        {label}
      </label>
      <HiOutlineInformationCircle
        size={15}
        className="shrink-0 text-icon-subtle"
        aria-hidden
      />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className={`mt-3 ${INPUT_CLASSES}`}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className: string;
}
