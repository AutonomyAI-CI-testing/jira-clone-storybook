import { HiChevronUp, HiOutlineCog, HiOutlineInformationCircle } from "react-icons/hi";

import { Button } from "../button/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-5 bg-elevation-surface p-8 font-primary text-font"
  >
    <div className="flex items-center justify-between gap-4">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        title="Settings"
        className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full text-icon hover:bg-background-brand-subtlest hover:text-icon-brand"
      >
        <HiOutlineCog size={24} />
      </button>
    </div>

    <button
      type="button"
      className="flex w-full cursor-pointer items-center gap-2 text-left font-primary-light text-sm text-font-subtle"
    >
      <HiChevronUp size={20} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </button>

    <section className="mt-4 flex flex-col gap-5">
      <h3 className="flex items-center gap-2 font-primary-bold text-lg">
        <HiChevronUp size={22} className="shrink-0" />
        Add New Design
      </h3>

      <Field
        id="testElem-access-token"
        label="Personal Access Token"
        hint="About personal access tokens"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        id="testElem-design-url"
        label="Design URL"
        hint="About design URLs"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-4 pt-2">
        <Button color="warning" size="lg" className="flex-1 py-3">
          Awesome
        </Button>
        <Button color="warning" size="lg" className="flex-1 py-3">
          Prepare
        </Button>
      </div>
    </section>

    <h3 className="mt-6 font-primary-bold text-lg">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, hint, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-light text-sm">
        {label}
      </label>
      <span role="img" aria-label={hint} className="flex shrink-0 items-center text-font-subtle">
        <HiOutlineInformationCircle size={18} aria-hidden />
      </span>
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-border bg-background-input p-3 font-primary-light text-sm placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  hint: string;
  placeholder: string;
}
