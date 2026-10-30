import type { ReactNode } from "react";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" panel from the attached Figma
 * frame. Presentational only — no props, no state, nothing wired up.
 *
 * The panel surfaces, text and input strokes use this repo's semantic tokens so
 * the card reads correctly under any theme. The rust fill on the two action
 * buttons is the one off-token value: the palette has no semantic orange.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-elevation-surface p-10 font-primary text-font"
  >
    <header className="flex items-start justify-between gap-4">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
      <IoSettingsOutline
        aria-hidden="true"
        className="mt-0.5 shrink-0 text-xl text-font-subtlest"
      />
    </header>

    <div className="mt-6 flex items-center gap-2 text-font-subtlest">
      <IoChevronUp aria-hidden="true" className="shrink-0 text-lg" />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <section className="mt-16">
      <div className="flex items-center gap-2">
        <IoChevronUp aria-hidden="true" className="text-lg" />
        <h3 className="font-primary-bold text-lg">Add New Design</h3>
      </div>

      <div className="mt-8 flex flex-col gap-8">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file:" />
      </div>

      <div className="mt-10 flex justify-center gap-8">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </section>

    <h3 className="mt-16 font-primary-bold text-lg">Recent Breakdowns</h3>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <span className="text-sm text-font-subtlest">{label}</span>
      <IoInformationCircleOutline
        aria-hidden="true"
        className="text-base text-font-subtlest"
      />
    </div>
    <input
      aria-label={label}
      readOnly
      placeholder={placeholder}
      className="mt-3 h-14 w-full rounded-md border-none bg-background-input px-4 text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-16 w-[172px] rounded-md border-none bg-[#a8532a] font-primary-bold text-base text-white transition-colors hover:bg-[#94481f] active:bg-[#7d3c19]"
  >
    {children}
  </button>
);

interface ActionButtonProps {
  children: ReactNode;
}
