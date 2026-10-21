import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { Button } from "./button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[400px] flex-col gap-6 bg-elevation-surface p-6 text-font"
  >
    <header className="flex items-center justify-between gap-4">
      <h1 className="font-primary-black text-lg">UI magician Agent</h1>
      <IoSettingsOutline
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
        size={20}
      />
    </header>

    <div className="flex items-center gap-2 text-sm text-font-subtle">
      <IoChevronUp aria-hidden="true" className="shrink-0" size={16} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <section className="flex flex-col gap-4">
      <h2 className="flex items-center gap-2 font-primary-black text-lg">
        <IoChevronUp aria-hidden="true" className="shrink-0" size={20} />
        Add New Design
      </h2>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex gap-4">
        <Button color="danger" size="lg" variant="subtlest">
          Awesome
        </Button>
        <Button color="danger" size="lg" variant="subtlest">
          Prepare
        </Button>
      </div>
    </section>

    <h2 className="font-primary-black text-lg text-font-subtle">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center gap-2 font-primary text-sm">
      {label}
      <IoInformationCircleOutline
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
        size={16}
      />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-sm border border-border-input bg-background-input p-3 text-base text-font outline-2 placeholder:text-font-subtle hover:bg-background-input-hovered focus-visible:bg-background-input-pressed"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
