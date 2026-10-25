import cx from "classix";
import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * The two action buttons share one set of classes so the pair can never drift.
 *
 * The fill is the only literal colour in this component: the design's rust
 * accent has no semantic token behind it and the nearest palette value
 * (`--Orange800`) is a visibly different shade.
 */
const ACTION_BUTTON_CLASSES =
  "w-[166px] rounded-lg bg-[#8f3f22] py-4 text-center font-primary text-base text-font-inverse hover:bg-[#7d361d] active:bg-[#6b2d18]";

const ACTION_LABELS = ["Awesome", "Prepare"];

const Field = ({ className, label, placeholder }: FieldProps): JSX.Element => (
  <label className={cx("block", className)}>
    <span className="flex items-center gap-2 font-primary text-base text-font-subtle">
      {label}
      <IoInformationCircleOutline size={20} aria-hidden />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded border-2 border-border-bold bg-background-input px-5 py-4 font-primary text-base text-font placeholder:text-font-subtlest"
    />
  </label>
);

interface FieldProps {
  className?: string;
  label: string;
  placeholder: string;
}

/**
 * A static reproduction of the "UI magician Agent" panel from the reference
 * frame. It is a smoke test, not a working screen: it takes no props and holds
 * no state, and every control in it is inert.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-10 py-10 text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <IoSettingsOutline size={28} aria-hidden className="text-font-subtle" />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <IoChevronUpOutline
        size={18}
        aria-hidden
        className="shrink-0 text-font-subtlest"
      />
      <span className="font-primary-light text-base text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <IoChevronUpOutline size={24} aria-hidden className="shrink-0" />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <Field
      className="mt-14"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-7"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex justify-center gap-8">
      {ACTION_LABELS.map((label) => (
        <button key={label} type="button" className={ACTION_BUTTON_CLASSES}>
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-14 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);
