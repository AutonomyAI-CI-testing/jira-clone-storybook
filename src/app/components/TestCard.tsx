import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

import { Button } from "./button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] max-w-full bg-elevation-surface px-10 pb-24 pt-10 text-font"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-primary-black text-2xl leading-tight">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Open agent settings"
          className="shrink-0 rounded p-1 text-font-subtle hover:bg-background-neutral-hovered hover:text-icon"
        >
          <LuSettings size={26} />
        </button>
      </div>

      {/* Collapsed summary row */}
      <div className="mt-7 flex items-center gap-2 text-font-subtle">
        <LuChevronUp size={20} strokeWidth={2.5} className="shrink-0" />
        <span className="min-w-0 truncate font-primary text-lg">
          From entire frame to a singl…
        </span>
      </div>

      {/* The frame leaves a large gap between the summary and the form */}
      <div className="h-36" aria-hidden="true" />

      <section aria-labelledby="test-card-add-design">
        <div className="flex items-center gap-3">
          <LuChevronUp size={26} strokeWidth={2.5} className="shrink-0" />
          <h3 id="test-card-add-design" className="font-primary-black text-2xl">
            Add New Design
          </h3>
        </div>

        <div className="mt-9">
          <Field
            id="test-card-access-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="mt-8">
          <Field
            id="test-card-design-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
          />
        </div>

        <div className="mt-14 flex items-center gap-8">
          <Button size="lg">Awesome</Button>
          <Button size="lg">Prepare</Button>
        </div>
      </section>

      <h3 className="mt-28 font-primary-black text-2xl">Recent Breakdowns</h3>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-lg">
        {label}
      </label>
      <LuInfo
        size={20}
        className="shrink-0 text-font-subtle"
        aria-hidden="true"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-md border border-border bg-background-input p-3 font-primary text-lg text-font placeholder:font-primary-light placeholder:text-font-subtlest focus-visible:bg-background-input-pressed"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
