import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

import { Button } from "@app/components/button/button";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-8 rounded-md bg-elevation-surface p-10 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl text-font">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded-full p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <FiSettings size={24} />
      </button>
    </div>

    <div className="flex items-center gap-3 text-font-subtle">
      <FiChevronUp size={20} />
      <span className="truncate font-primary text-sm">
        From entire frame to a singl...
      </span>
    </div>

    {/* Empty list area in the design — spacing only. */}
    <div aria-hidden="true" className="h-16" />

    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <FiChevronUp size={22} />
        <h2 className="font-primary-black text-xl text-font">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex gap-6">
        <Button color="danger" size="lg">
          Awesome
        </Button>
        <Button color="danger" size="lg">
          Prepare
        </Button>
      </div>
    </div>

    <h2 className="font-primary-black text-xl text-font">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center gap-2 font-primary-bold text-sm text-font-subtle">
      {label}
      <FiInfo size={16} />
    </span>
    <input
      className="w-full rounded bg-background-input p-3.5 font-primary-light text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
      placeholder={placeholder}
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
