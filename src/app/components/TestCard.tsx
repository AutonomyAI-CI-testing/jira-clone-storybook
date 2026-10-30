import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const GearIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-light text-base text-font-subtle"
      >
        {label}
      </label>
      <InfoIcon className="h-4 w-4 shrink-0 text-font-subtle" />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border-none bg-background-input p-3 font-primary-light text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus:outline-border-brand"
    />
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="flex min-w-[170px] cursor-pointer items-center justify-center rounded border-none bg-background-danger-bold px-6 py-4 text-lg text-font-inverse hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between gap-4">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full border-none text-icon-subtle hover:bg-background-brand-subtlest hover:text-icon-brand"
      >
        <GearIcon className="h-5 w-5" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtlest">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <span className="font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-12 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6 shrink-0" />
        <h3 className="font-primary-bold text-2xl">Add New Design</h3>
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

      <div className="flex items-center gap-9 pt-2">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </section>

    <h3 className="mt-10 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);
