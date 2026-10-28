/**
 * TestCard — the "UI magician Agent" Figma panel rendered as a static card.
 *
 * Smoke-test component: self-contained, no props, no state, no behaviour.
 * It is styled from the repo's semantic tokens under the panel's own `dark`
 * theme class, so the card reads on the near-black surface the design uses,
 * and its two actions come from the shared Button primitive.
 */

import { Button } from "@app/components/button";

const CaretUp = ({ className }: { className: string }) => (
  <svg aria-hidden viewBox="0 0 12 8" fill="none" className={className}>
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    width={16}
    height={16}
    fill="none"
    className="shrink-0 text-icon"
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden
    viewBox="0 0 16 16"
    width={15}
    height={15}
    className="shrink-0 text-icon-subtle"
  >
    <circle
      cx="8"
      cy="8"
      r="6.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M8 7.1v4.1"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
  </svg>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-bold text-2xs text-font-subtle"
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className="mt-3 h-9 w-full rounded bg-background-input px-3 text-2xs outline outline-2 outline-border-bold placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[254px] rounded bg-elevation-surface p-5 font-primary text-font"
  >
    <div className="flex items-start justify-between gap-3">
      <h1 className="font-primary-bold text-xs">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-5 flex items-center gap-2 text-font-subtle">
      <CaretUp className="h-[5px] w-2 shrink-0" />
      <span className="font-primary-bold text-2xs">
        From entire frame to a singl…
      </span>
    </div>

    <h2 className="mt-20 flex items-center gap-2 font-primary-bold text-xs">
      <CaretUp className="h-2 w-3 shrink-0" />
      Add New Design
    </h2>

    <div className="mt-6 space-y-3">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="mt-5 flex justify-center gap-4">
      <Button color="warning" className="h-[37px] w-[85px] text-2xs">
        Awesome
      </Button>
      <Button color="warning" className="h-[37px] w-[85px] text-2xs">
        Prepare
      </Button>
    </div>

    <h2 className="mt-12 font-primary-bold text-xs">Recent Breakdowns</h2>
  </div>
);
