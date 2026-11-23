import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

import { Button } from "@app/components/button";

const InfoIcon = ({ label }: { label: string }): JSX.Element => (
  <span role="img" aria-label={label} className="text-icon-subtle">
    <FiInfo size={20} />
  </span>
);

const Field = ({ id, label, hint, placeholder }: FieldProps): JSX.Element => (
  <div>
    <label htmlFor={id} className="flex items-center gap-2 text-lg">
      {label}
      <InfoIcon label={hint} />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-border bg-background-input p-4 font-primary-light text-font placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  hint: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="w-[508px] rounded-md bg-elevation-surface p-10 font-primary text-font shadow-lg">
      <header className="flex items-start justify-between gap-4">
        <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer rounded-full p-1 text-icon hover:bg-background-neutral"
        >
          <FiSettings size={22} aria-hidden="true" />
        </button>
      </header>

      <p className="mt-5 flex items-center gap-2 font-primary-light text-font-subtle">
        <FiChevronUp size={20} className="shrink-0" aria-hidden="true" />
        <span className="truncate">From entire frame to a single component</span>
      </p>

      <h2 className="mt-16 flex items-center gap-2 font-primary-black text-2xl">
        <FiChevronUp size={26} className="shrink-0" aria-hidden="true" />
        Add New Design
      </h2>

      <div className="mt-8">
        <Field
          id="testcard-token"
          label="Personal Access Token"
          hint="About the personal access token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-6">
        <Field
          id="testcard-url"
          label="Design URL"
          hint="About the design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-6">
        <Button color="warning" size="lg" className="flex-1">
          Awesome
        </Button>
        <Button color="warning" size="lg" className="flex-1">
          Prepare
        </Button>
      </div>

      <h2 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h2>
    </div>
  </div>
);
