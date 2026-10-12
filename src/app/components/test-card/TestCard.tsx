import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * Standalone panel reproducing the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained: no props, no state, no app wiring. It pins the
 * `dark` theme class on its own root, so the panel keeps the frame's dark look
 * whichever theme the app itself is in.
 *
 * The two rust button colours have no semantic token, so they stay literal.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[254px] bg-elevation-surface p-5 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs">UI magician Agent</span>
        <RiSettings3Line size={16} className="text-icon" />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <RiArrowUpSLine size={16} className="text-icon" />
        <span className="font-primary-bold text-2xs text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-14 flex items-center gap-2">
        <RiArrowUpSLine size={16} className="text-icon" />
        <span className="font-primary-bold text-xs text-font-subtle">
          Add New Design
        </span>
      </div>

      <PanelField
        id="test-card-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <PanelField
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      <div className="mt-5 flex gap-4">
        {PANEL_BUTTONS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-12 font-primary-bold text-xs text-font-subtle">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const PANEL_BUTTONS = ["Awesome", "Prepare"];

const PanelField = ({ id, label, placeholder }: PanelFieldProps) => {
  return (
    <div className="mt-3">
      <label
        htmlFor={id}
        className="flex items-center gap-2 font-primary-bold text-2xs text-font-subtle"
      >
        {label}
        <RiInformationLine size={15} className="text-icon" />
      </label>
      <input
        id={id}
        className="mt-1 h-[37px] w-full rounded border border-border-input bg-background-input px-3 text-2xs placeholder:text-font-subtlest"
        placeholder={placeholder}
      />
    </div>
  );
};

interface PanelFieldProps {
  id: string;
  label: string;
  placeholder: string;
}
