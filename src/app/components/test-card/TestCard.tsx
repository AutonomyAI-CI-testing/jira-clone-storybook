import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 *
 * Smoke test: self-contained, takes no props, holds no state and is not wired
 * into any screen. Spacing, colours and type sizes are approximations of the
 * frame rather than pixel-accurate values.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] max-w-full rounded-md bg-elevation-surface-overlay px-6 py-6 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-1 text-font-subtle hover:bg-background-neutral-hovered hover:text-font"
      >
        <FiSettings aria-hidden="true" className="h-5 w-5" />
      </button>
    </div>

    <div className="mt-3 flex items-center gap-2 text-font-subtle">
      <FiChevronUp aria-hidden="true" className="h-4 w-4 shrink-0" />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <FiChevronUp aria-hidden="true" className="h-5 w-5 shrink-0" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-5 flex flex-col gap-4">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-6 flex gap-4">
      <button
        type="button"
        className="flex-1 rounded bg-[#93401a] px-4 py-3 font-primary-bold text-[#c9c3be] hover:bg-[#a5481d]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded bg-[#93401a] px-4 py-3 font-primary-bold text-[#c9c3be] hover:bg-[#a5481d]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-10 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="block">
    <span className="flex items-center gap-2 font-primary text-sm text-font-subtle">
      {label}
      <FiInfo aria-hidden="true" className="h-4 w-4" />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded border border-border-input bg-background-input px-3 py-3 font-primary-light text-sm text-font placeholder:text-font-subtlest"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
