import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Self-contained smoke-test card that recreates the reference tool panel.
 * Display only: no props, no state, no interactivity, and it is not wired into
 * any screen.
 *
 * The reference surface is near-black and its action colour is a warm orange.
 * Neither has a token in this design system (light-first, Brand Blue carries
 * action), so those two are literal values here. Everything else leans on the
 * repo's existing type families and radii.
 */
const PANEL_SURFACE = "bg-[#1e1e1e]";
const PANEL_HEADING = "text-[#c9c9c9]";
const PANEL_TEXT = "text-[#a8a8a8]";
const PANEL_INPUT = "border-[#8a8a8a] bg-[#1a1a1a] text-[#b0b0b0]";
const PANEL_ACTION = "bg-[#96451f] text-[#c3a99a]";

const ACTIONS = ["Awesome", "Prepare"];

const ChevronRow = ({ children, emphasis = false }: ChevronRowProps) => (
  <div
    className={cx(
      "flex items-center gap-3",
      emphasis
        ? cx("font-primary-bold text-lg", PANEL_HEADING)
        : cx("font-primary text-base", PANEL_TEXT)
    )}
  >
    <FiChevronUp size={20} />
    <span className={emphasis ? undefined : "truncate"}>{children}</span>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-4">
    <div className={cx("flex items-center gap-3", PANEL_TEXT)}>
      <span className="font-primary text-base">{label}</span>
      <FiInfo size={20} className={PANEL_HEADING} />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "h-[70px] w-full rounded-sm border px-7 font-primary text-base outline-none placeholder:text-[#8a8a8a]",
        PANEL_INPUT
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className={cx("flex w-[508px] flex-col px-10 py-6 font-primary", PANEL_SURFACE)}
  >
    <div className="flex items-center justify-between">
      <span className={cx("font-primary-bold text-lg", PANEL_HEADING)}>
        UI magician Agent
      </span>
      <FiSettings size={22} className="text-[#e6e6e6]" />
    </div>

    <div className="mt-8">
      <ChevronRow>From entire frame to a singl…</ChevronRow>
    </div>

    <div className="mt-24">
      <ChevronRow emphasis>Add New Design</ChevronRow>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex items-center justify-center gap-6">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className={cx(
            "w-[170px] rounded-md py-3 font-primary text-base",
            PANEL_ACTION
          )}
        >
          {action}
        </button>
      ))}
    </div>

    <div className="mt-24">
      <span className={cx("font-primary-bold text-lg", PANEL_HEADING)}>
        Recent Breakdowns
      </span>
    </div>
  </div>
);

interface ChevronRowProps {
  children: React.ReactNode;
  emphasis?: boolean;
}

interface FieldProps {
  label: string;
  placeholder: string;
}
