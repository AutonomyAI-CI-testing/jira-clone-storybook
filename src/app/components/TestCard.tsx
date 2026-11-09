import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Shared look for the frame's two action buttons. Plain markup rather than the
 * shared Button component: none of its color/variant pairs produce this fill,
 * and the design system prefers markup over a className that fights a component.
 * The label uses a fixed light ink — text-font-inverse resolves to near-black
 * inside a dark-pinned subtree.
 */
const ACTION_BUTTON =
  "h-[70px] w-[170px] rounded-md bg-[var(--Orange800)] text-lg text-[color:var(--DarkNeutral1000)]";

/**
 * TestCard — a static recreation of the cropped "UI magician Agent" Figma frame.
 * Self-contained: no props, no state, no behaviour.
 *
 * The `dark` theme class is pinned on the root so the panel renders on the dark
 * plane whatever theme the app is in; the colour roles below resolve through it.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <FiSettings size={24} className="shrink-0 text-font-subtle" />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-10 flex max-w-[370px] items-center gap-2 text-font-subtle">
      <FiChevronUp size={20} className="shrink-0" />
      <span className="min-w-0 truncate">
        From entire frame to a single component, styles and tokens included
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[150px] flex items-center gap-2">
      <FiChevronUp size={20} className="shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-10 flex flex-col gap-6">
      <Field label="Personal Access Token" value="figd_xxxxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" value="https://www.figma.com/file/" />
    </div>

    {/* Actions */}
    <div className="mt-12 flex gap-9 pl-12">
      <button type="button" className={ACTION_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON}>
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, value }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-10">
      <span className="text-sm">{label}</span>
      <FiInfo size={22} className="shrink-0 text-font-subtle" />
    </div>
    <div className="flex h-16 items-center rounded border border-border-bold bg-elevation-surface-overlay px-4 text-base text-font-subtle">
      {value}
    </div>
  </div>
);

interface FieldProps {
  label: string;
  value: string;
}
