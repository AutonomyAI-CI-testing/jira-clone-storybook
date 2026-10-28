import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { Button } from "@app/components/button";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <span className="font-primary text-lg">{label}</span>
      <IoInformationCircleOutline
        aria-hidden
        className="shrink-0 text-icon"
        size={20}
      />
    </div>
    <input
      placeholder={placeholder}
      className="h-12 w-full rounded bg-background-input px-4 font-primary-light text-font outline outline-2 outline-border-input placeholder:text-font-subtle"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark flex w-[508px] flex-col gap-16 bg-elevation-surface px-10 py-10 font-primary text-font"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
          <IoSettingsOutline aria-hidden className="shrink-0 text-icon" size={28} />
        </div>

        <div className="flex items-center gap-2">
          <IoChevronUp aria-hidden className="shrink-0 text-icon" size={20} />
          <p className="truncate font-primary-light text-sm text-font-subtle">
            From entire frame to a single component
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <IoChevronUp aria-hidden className="shrink-0 text-icon" size={24} />
          <h2 className="font-primary-black text-2xl">Add New Design</h2>
        </div>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />

        <div className="flex gap-6 pt-2">
          <Button color="danger" variant="contained" className="flex-1 py-3">
            Awesome
          </Button>
          <Button color="danger" variant="contained" className="flex-1 py-3">
            Prepare
          </Button>
        </div>
      </div>

      <h2 className="font-primary-black text-2xl">Recent Breakdowns</h2>
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
