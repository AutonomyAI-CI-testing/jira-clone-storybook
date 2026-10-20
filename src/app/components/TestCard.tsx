import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

import { Button } from "@app/components/button/button";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface px-9 pb-24 pt-10 font-primary text-font"
    >
      {/* Panel header */}
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-2xl text-font">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Agent settings"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-icon hover:bg-background-neutral-hovered hover:text-font"
        >
          <HiOutlineCog size={26} />
        </button>
      </div>

      {/* Collapsed summary */}
      <div className="mt-9 flex items-center gap-3 text-lg text-font-subtle">
        <HiOutlineChevronUp className="shrink-0" size={20} />
        <span className="min-w-0 truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mt-40 flex items-center gap-3">
        <HiOutlineChevronUp className="shrink-0" size={24} />
        <h2 className="font-primary-bold text-2xl text-font">Add New Design</h2>
      </div>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-11 flex justify-center gap-8">
        <Button type="button" className="w-[170px] py-4 text-lg">
          Awesome
        </Button>
        <Button type="button" className="w-[170px] py-4 text-lg">
          Prepare
        </Button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-24 font-primary-bold text-2xl text-font">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps) => {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-base text-font-subtle">
          {label}
        </label>
        <HiOutlineInformationCircle
          aria-hidden="true"
          className="text-icon"
          size={20}
        />
      </div>
      <input
        id={id}
        placeholder={placeholder}
        className="mt-6 w-full rounded border-none bg-background-input px-3 py-4 text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest hover:bg-background-input-hovered focus:bg-background-input-pressed focus:outline-border-brand"
      />
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
