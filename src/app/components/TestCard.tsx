import cx from "classix";
import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Smoke-test stand-in for the "UI magician Agent" settings panel in the Figma
 * reference. Self-contained: no props, no state, nothing interactive.
 *
 * The panel is a fixed dark surface in the reference, so the root pins the
 * `dark` theme class and every colour below resolves from the token set rather
 * than from a literal.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-black text-3xl">UI magician Agent</span>
      <IoSettingsOutline size={30} className="shrink-0 text-icon" />
    </div>

    <div className="mt-8">
      <CollapseRow label="From entire frame to a singl…" size="sm" />
    </div>

    <div className="mt-36">
      <CollapseRow label="Add New Design" size="lg" />
    </div>

    <div className="mt-14 flex flex-col gap-7">
      <LabelledField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <LabelledField
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-11 flex justify-end gap-8">
      <RustButton label="Awesome" />
      <RustButton label="Prepare" />
    </div>

    <h2 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);

/** Chevron + label row, used for both the collapse bar and the section headings. */
const CollapseRow = ({ label, size }: CollapseRowProps): JSX.Element => (
  <div className="flex items-center gap-3">
    <IoChevronUpOutline
      size={size === "lg" ? 28 : 22}
      className="shrink-0 text-icon"
    />
    <span
      className={cx(
        "truncate",
        size === "lg" ? "font-primary-black text-2xl" : "font-primary text-lg"
      )}
    >
      {label}
    </span>
  </div>
);

interface CollapseRowProps {
  label: string;
  size: "sm" | "lg";
}

/** Label with an info glyph, above a read-only field showing its placeholder. */
const LabelledField = ({
  label,
  placeholder,
}: LabelledFieldProps): JSX.Element => (
  <div className="flex flex-col gap-5">
    <div className="flex items-center gap-3">
      <span className="text-xl">{label}</span>
      <IoInformationCircleOutline size={22} className="shrink-0 text-icon" />
    </div>
    <input
      readOnly
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="box-border w-full rounded-md border border-border-bold bg-background-input p-3 text-xl placeholder:text-font-subtlest"
    />
  </div>
);

interface LabelledFieldProps {
  label: string;
  placeholder: string;
}

/** The reference's rust action button — no role matches, so the nearest palette step. */
const RustButton = ({ label }: RustButtonProps): JSX.Element => (
  <button
    type="button"
    className="rounded bg-[color:var(--Orange800)] px-10 py-5 text-2xl text-font"
  >
    {label}
  </button>
);

interface RustButtonProps {
  label: string;
}
