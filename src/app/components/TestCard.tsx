import { useId } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoChevronUp, IoChevronUpOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

import { Button } from "@app/components/button";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  const id = useId();

  return (
    <div>
      <div className="flex items-center gap-4">
        <label htmlFor={id} className="text-base">
          {label}
        </label>
        <HiOutlineInformationCircle
          aria-hidden="true"
          className="shrink-0 text-icon-subtle"
          size={20}
        />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="mt-3 w-full rounded bg-background-input px-5 py-4 text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtle"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] rounded-md bg-elevation-surface-overlay p-10 font-primary text-font shadow-md"
  >
    <header className="flex items-start justify-between gap-4">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center rounded p-1 text-icon hover:text-icon-brand"
      >
        <MdOutlineSettings size={24} />
      </button>
    </header>

    <div className="mt-5 flex items-center gap-2 text-font-subtle">
      <IoChevronUpOutline aria-hidden="true" className="shrink-0" size={20} />
      <span className="truncate text-base">
        From entire frame to a single component
      </span>
    </div>

    <section className="mt-28">
      <h3 className="flex items-center gap-3 font-primary-bold text-xl">
        <IoChevronUp aria-hidden="true" className="shrink-0" size={24} />
        Add New Design
      </h3>

      <div className="mt-8 flex flex-col gap-5">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-8 flex gap-6">
        <Button color="warning" className="px-8 py-3 text-base">
          Awesome
        </Button>
        <Button color="warning" className="px-8 py-3 text-base">
          Prepare
        </Button>
      </div>
    </section>

    <h3 className="mt-32 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
