import { HiQuestionMarkCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

import { Button } from "../button/button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark flex w-[508px] flex-col gap-8 rounded-md bg-elevation-surface px-6 py-8 text-font"
    >
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
        <MdSettings aria-hidden="true" className="text-2xl text-icon" />
      </div>

      <SectionRow>
        <span className="truncate font-primary text-xl text-font-subtlest">
          From entire frame to a singl…
        </span>
      </SectionRow>

      <div className="mt-8 flex flex-col gap-6">
        <SectionRow>
          <h2 className="font-primary-black text-2xl">Add New Design</h2>
        </SectionRow>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />

        <Field label="Design URL" placeholder="https://www.figma.com/file/" />

        <div className="flex gap-8">
          <Button color="warning" variant="contained" size="lg">
            Awesome
          </Button>
          <Button color="warning" variant="contained" size="lg">
            Prepare
          </Button>
        </div>
      </div>

      <h2 className="mt-8 font-primary-black text-2xl">Recent Breakdowns</h2>
    </div>
  );
};

const SectionRow = ({ children }: SectionRowProps): JSX.Element => {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <RiArrowDropDownLine
        aria-hidden="true"
        className="shrink-0 rotate-180 text-2xl text-icon"
      />
      {children}
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-2 font-primary text-lg">
        {label}
        <HiQuestionMarkCircle aria-hidden="true" className="text-xl text-icon" />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-md border border-border-input bg-background-input p-3 font-primary-light text-lg text-font placeholder:text-font-subtlest"
      />
    </label>
  );
};

interface SectionRowProps {
  children: React.ReactNode;
}

interface FieldProps {
  label: string;
  placeholder: string;
}
