import { HiChevronUp, HiCog, HiQuestionMarkCircle } from "react-icons/hi";

import { Button } from "./button/button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] rounded-md bg-elevation-surface-sunken p-10 font-primary-light text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-font">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          title="Settings"
          className="rounded-full p-2 text-icon-subtle hover:bg-background-neutral hover:text-icon"
        >
          <HiCog size={20} />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-2 text-font-subtlest">
        <HiChevronUp size={16} className="shrink-0" />
        <span className="min-w-0 truncate text-base">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <HiChevronUp size={18} className="shrink-0 text-font" />
        <h2 className="font-primary-bold text-lg text-font">Add New Design</h2>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-8 flex gap-4">
        <Button className="flex-1 rounded-lg px-8 py-3 text-base">Awesome</Button>
        <Button className="flex-1 rounded-lg px-8 py-3 text-base">Prepare</Button>
      </div>

      <h2 className="mt-12 font-primary-bold text-lg text-font">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="font-primary text-xs text-font-subtle">
          {label}
        </label>
        <HiQuestionMarkCircle
          size={16}
          className="shrink-0 text-icon-subtle"
          title={`About ${label}`}
        />
      </div>
      <input
        id={id}
        readOnly
        placeholder={placeholder}
        className="w-full rounded-md border-none bg-background-input p-3 text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
