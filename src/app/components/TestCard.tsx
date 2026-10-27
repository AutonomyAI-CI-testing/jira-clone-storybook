import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

import { Button } from "@app/components/button/button";

interface FieldProps {
  id: string;
  label: string;
  value: string;
}

const Field = ({ id, label, value }: FieldProps): JSX.Element => (
  <div className="mt-8 flex flex-col gap-3">
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="font-primary-bold text-lg">
        {label}
      </label>
      <FiInfo size={22} aria-hidden="true" className="text-font-subtle" />
    </div>
    <input
      id={id}
      readOnly
      defaultValue={value}
      className="h-[60px] w-full rounded border-2 border-border-bold bg-background-input px-6 text-lg text-font-subtle"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-9 py-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-icon hover:bg-background-neutral hover:text-icon-brand"
      >
        <FiSettings size={26} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-3 text-lg text-font-subtle">
      <FiChevronUp size={22} aria-hidden="true" className="shrink-0" />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <FiChevronUp size={22} aria-hidden="true" className="shrink-0" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <Field
      id="testElem-token"
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="testElem-url"
      label="Design URL"
      value="https://www.figma.com/file/:"
    />

    <div className="mt-10 flex gap-10">
      <Button type="button" color="warning" size="lg">
        Awesome
      </Button>
      <Button type="button" color="warning" size="lg">
        Prepare
      </Button>
    </div>

    <h3 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);

export default TestCard;
