import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

import { Button } from "../button/button";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[320px] flex-col gap-6 rounded-md bg-elevation-surface p-4 text-font shadow-sm"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Open settings"
          className="flex cursor-pointer items-center justify-center rounded p-2 text-icon-subtle hover:bg-background-neutral hover:text-icon-brand"
        >
          <FiSettings size={20} />
        </button>
      </div>

      <div className="flex min-w-0 items-center gap-2 text-font-subtle">
        <FiChevronUp size={16} aria-hidden />
        <span className="truncate font-primary-light text-sm">
          From entire frame to a single frame
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FiChevronUp size={18} aria-hidden />
          <h3 className="font-primary-black text-xl">Add New Design</h3>
        </div>

        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="flex gap-4">
        <Button size="lg">Awesome</Button>
        <Button size="lg">Prepare</Button>
      </div>

      <h3 className="font-primary-black text-xl">Recent Breakdowns</h3>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-bold text-sm text-font-subtle"
      >
        {label}
      </label>
      <FiInfo size={16} className="text-icon-subtle" aria-hidden />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="w-full rounded-md border-none bg-background-input px-3 py-2 text-font outline outline-2 outline-border-input placeholder:font-primary-light placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
