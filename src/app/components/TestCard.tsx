import type { ReactNode } from "react";

const INPUT_CLASS =
  "mt-3 w-full rounded bg-background-input px-4 py-4 font-primary text-base text-font outline outline-1 outline-border-input placeholder:font-primary-light placeholder:text-font-subtle";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] max-w-full bg-elevation-surface-sunken p-8 font-primary text-font"
  >
    <div className="flex items-center justify-between gap-4">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-1 text-font hover:bg-background-neutral hover:text-font-brand"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-3 flex items-center gap-2 text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate font-primary-light text-base">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <ChevronUpIcon />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-8">
      <Field
        id="testcard-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testcard-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex items-center justify-center gap-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-bold text-base text-font">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input id={id} type="text" readOnly placeholder={placeholder} className={INPUT_CLASS} />
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    type="button"
    className="w-[170px] rounded bg-background-warning-bold px-6 py-5 font-primary-bold text-base text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed"
  >
    {children}
  </button>
);

const Icon = ({ children }: { children: ReactNode }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className="shrink-0"
  >
    {children}
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <Icon>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
);

const ChevronUpIcon = (): JSX.Element => (
  <Icon>
    <path d="m18 15-6-6-6 6" />
  </Icon>
);

const InfoIcon = (): JSX.Element => (
  <Icon>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Icon>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
