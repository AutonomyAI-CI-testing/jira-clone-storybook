import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const INPUT_CLASSNAME =
  "mt-2 w-full rounded border border-border-input bg-elevation-surface-overlay px-3 py-2 text-sm text-font placeholder:text-font-subtle";

/**
 * The frame's rust accent has no semantic token in this palette (the brand hue
 * is blue) and the design system does not allow referencing raw ramp variables
 * from a component, so the frame's own values are used directly. Approximate
 * colour is acceptable for this smoke test.
 */
const ACTION_BUTTON_CLASSNAME =
  "flex-1 rounded bg-[#a04b21] py-2 text-sm text-[#e8e6e3]";

const ACTION_LABELS = ["Awesome", "Prepare"];

const FieldLabel = ({ htmlFor, label }: FieldLabelProps) => (
  <div className="mt-6 flex items-center justify-between">
    <label htmlFor={htmlFor} className="text-sm">
      {label}
    </label>
    <FiInfo className="h-4 w-4 shrink-0 text-font-subtle" />
  </div>
);

interface FieldLabelProps {
  htmlFor: string;
  label: string;
}

/**
 * TestCard — a static, self-contained panel reproduced from a Figma frame.
 *
 * Smoke test: the layout, colours and typography are approximations of the
 * frame, not a fidelity match. Takes no props and is deliberately not wired
 * into any route.
 *
 * The `dark` class on the root switches the semantic colour tokens to their
 * dark values, so the panel reads dark on Storybook's light canvas.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[320px] rounded-lg bg-elevation-surface p-4 font-primary text-font"
  >
    <header className="flex items-center justify-between">
      <h1 className="text-lg font-primary-bold">UI magician Agent</h1>
      <FiSettings className="h-5 w-5 shrink-0 text-font-subtle" />
    </header>

    <div className="mt-3 flex items-center gap-2 text-font-subtle">
      <FiChevronUp className="h-4 w-4 shrink-0" />
      <span className="truncate text-xs">From entire frame to a singl...</span>
    </div>

    <div className="mt-6 flex items-center gap-2 text-base font-primary-bold">
      <FiChevronUp className="h-4 w-4 shrink-0" />
      <h2>Add New Design</h2>
    </div>

    <FieldLabel htmlFor="test-card-access-token" label="Personal Access Token" />
    <input
      id="test-card-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className={INPUT_CLASSNAME}
    />

    <FieldLabel htmlFor="test-card-design-url" label="Design URL" />
    <input
      id="test-card-design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className={INPUT_CLASSNAME}
    />

    <div className="mt-6 flex gap-3">
      {ACTION_LABELS.map((label) => (
        <button key={label} type="button" className={ACTION_BUTTON_CLASSNAME}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-10 text-base font-primary-bold">Recent Breakdowns</h2>
  </div>
);
