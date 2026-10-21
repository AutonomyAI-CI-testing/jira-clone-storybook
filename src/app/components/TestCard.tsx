import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

import { Button } from "./button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface-sunken p-6 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-xl">UI magician Agent</h2>
        <FaCog aria-hidden size={20} className="text-icon-subtle" />
      </div>

      <div className="mt-4 flex items-center gap-2 text-font-subtle">
        <FaChevronUp aria-hidden size={14} />
        <span className="min-w-0 truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-10 flex items-center gap-2">
        <FaChevronUp aria-hidden size={18} className="text-font-subtle" />
        <h3 className="font-primary-black text-lg">Add New Design</h3>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-8 flex gap-4">
        <Button color="danger" variant="contained" className="px-8 py-3 text-base">
          Awesome
        </Button>
        <Button color="danger" variant="contained" className="px-8 py-3 text-base">
          Prepare
        </Button>
      </div>

      <h3 className="mt-12 font-primary-bold text-lg text-font-subtle">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center gap-2 text-font-subtle">
      {label}
      <FaInfoCircle aria-hidden size={14} />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-border bg-background-input p-3 text-font outline-2 placeholder:text-font-subtle"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
