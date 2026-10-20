import type { ReactNode } from "react";
import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const BUTTON_LABELS = ["Awesome", "Prepare"];

/**
 * A static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke-test stand-in: no props, no state and nothing interactive — the fields
 * and buttons are presentational only. Colours come from the app's semantic
 * tokens rather than the frame's raw hexes, so the panel follows the theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-elevation-surface p-5 text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-sm">UI magician Agent</h2>
      <HiOutlineCog aria-hidden className="size-4 shrink-0 text-font-subtle" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <HiOutlineChevronUp
        aria-hidden
        className="size-2 shrink-0 text-font-subtle"
      />
      <p className="font-primary-light text-xs text-font-subtle">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <HiOutlineChevronUp
        aria-hidden
        className="size-3 shrink-0 text-font-subtle"
      />
      <h3 className="font-primary-bold text-sm">Add New Design</h3>
    </div>

    <Field className="mt-11" label="Personal Access Token">
      <span className="font-primary-light text-xs text-font-subtlest">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </Field>

    <Field className="mt-3" label="Design URL">
      <span className="font-primary-light text-2xs text-font-subtlest">
        https://www.figma.com/file/:
      </span>
    </Field>

    <div className="mt-6 flex gap-[17px] pl-6">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-9 w-[85px] rounded bg-background-brand-bold font-primary-bold text-xs text-font-inverse"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-12 font-primary-bold text-sm">Recent Breakdowns</h3>
  </div>
);

const Field = ({ label, className, children }: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-xs text-font-subtle">
        {label}
      </span>
      <HiOutlineInformationCircle
        aria-hidden
        className="size-[15px] shrink-0 text-font-subtle"
      />
    </div>
    <div className="mt-3 flex h-9 items-center border border-border-bold bg-background-input px-3">
      {children}
    </div>
  </div>
);

interface FieldProps {
  label: string;
  className?: string;
  children: ReactNode;
}
