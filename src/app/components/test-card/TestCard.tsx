import { useId } from "react";
import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-elevation-surface p-10"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-2xl text-font">
          UI magician Agent
        </h1>
        <IoSettingsOutline className="shrink-0 text-icon" size={28} />
      </div>

      <div className="mt-8 flex items-center gap-3">
        <IoChevronUpOutline className="shrink-0 text-icon-subtle" size={20} />
        <span className="truncate font-primary-light text-base text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-40 flex items-center gap-3">
        <IoChevronUpOutline className="shrink-0 text-icon" size={22} />
        <h2 className="font-primary-bold text-2xl text-font">Add New Design</h2>
      </div>

      <div className="mt-10 space-y-8">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-10 flex justify-end gap-6">
        <Button size="lg" className="w-[170px] py-3">
          Awesome
        </Button>
        <Button size="lg" className="w-[170px] py-3">
          Prepare
        </Button>
      </div>

      <h2 className="mt-24 font-primary-bold text-2xl text-font">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  const inputId = useId();

  return (
    <div>
      <div className="flex items-center gap-3">
        <label htmlFor={inputId} className="font-primary text-base text-font">
          {label}
        </label>
        <IoInformationCircleOutline className="shrink-0 text-icon" size={20} />
      </div>
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        className="mt-3 w-full rounded-md bg-background-input px-4 py-4 font-primary-light text-base text-font outline outline-2 outline-border-bold placeholder:text-font-subtlest focus-visible:outline-border-brand"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
