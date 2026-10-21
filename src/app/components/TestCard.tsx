import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

import { Button } from "./button/button";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="font-primary text-font-subtle">
        {label}
      </label>
      <FaInfoCircle aria-hidden="true" className="text-icon-subtle" size={16} />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="mt-6 w-full rounded border border-border-bold bg-background-input px-7 py-5 font-primary text-font placeholder:font-primary-light placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-elevation-surface px-10 pb-32 pt-12 font-primary text-font shadow-lg"
  >
    <header className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex h-6 w-6 items-center justify-center rounded-full text-icon-subtle hover:bg-background-neutral hover:text-icon"
      >
        <FaCog aria-hidden="true" size={18} />
      </button>
    </header>

    <div className="mt-10 flex items-center gap-2">
      <FaChevronUp
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
        size={14}
      />
      <span className="truncate text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <h3 className="mt-40 flex items-center gap-2 font-primary-black text-xl">
      <FaChevronUp aria-hidden="true" size={16} />
      Add New Design
    </h3>

    <div className="mt-16 space-y-8">
      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-8">
      <Button color="neutral" variant="contained" size="lg" className="flex-1">
        Awesome
      </Button>
      <Button color="neutral" variant="contained" size="lg" className="flex-1">
        Prepare
      </Button>
    </div>

    <h3 className="mt-24 font-primary-black text-xl">Recent Breakdowns</h3>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
