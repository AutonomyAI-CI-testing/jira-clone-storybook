import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Deliberately self-contained: no props, no state, no data and no handlers.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[340px] rounded bg-elevation-surface p-7 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
      <RiSettings3Line size={20} className="text-font-subtle" />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <RiArrowUpSLine size={20} />
      <span className="min-w-0 flex-1 truncate text-sm">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-14 flex items-center gap-2">
      <RiArrowUpSLine size={22} />
      <h3 className="text-lg">Add New Design</h3>
    </div>

    <div className="mt-8">
      <FieldLabel label="Personal Access Token" />
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded-md border border-border-bold bg-background-input px-3 py-3 text-sm text-font outline-none placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-6">
      <FieldLabel label="Design URL" />
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-2 w-full rounded-md border border-border-bold bg-background-input px-3 py-3 text-sm text-font outline-none placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-8 flex gap-7">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h3 className="mt-16 font-primary-bold text-lg">Recent Breakdowns</h3>
  </div>
);

const FieldLabel = ({ label }: FieldLabelProps): JSX.Element => (
  <div className="flex items-center gap-2">
    <span className="text-sm">{label}</span>
    <RiInformationLine size={16} className="text-font-subtle" />
  </div>
);

// The frame's rust button fill has no semantic token. --Orange800 is the repo's
// own nearest declared colour, so the palette stays the single source of truth
// instead of introducing a new literal hex.
const PanelButton = ({ children }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="rounded-md bg-[var(--Orange800)] px-7 py-3 text-sm text-font-subtle"
  >
    {children}
  </button>
);

interface FieldLabelProps {
  label: string;
}

interface PanelButtonProps {
  children: string;
}
