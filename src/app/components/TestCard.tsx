import { FaChevronUp } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="mt-7 block">
    <span className="flex items-center gap-2 font-primary-light text-lg text-font-subtle">
      {label}
      <HiOutlineInformationCircle
        aria-hidden="true"
        className="shrink-0"
        size={20}
      />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-6 w-full rounded border border-border-input bg-background-input px-4 py-5 font-primary-light text-lg text-font placeholder:text-font-subtlest"
    />
  </label>
);

/** The panel's two action buttons, in the order the frame shows them. */
const ACTIONS = ["Awesome", "Prepare"];

/**
 * Standalone mock of the "UI magician Agent" panel from the Figma frame.
 * Presentational and self-contained: no props, no state, no data.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface-sunken px-9 pb-32 pt-9 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex-center cursor-pointer rounded p-1 text-icon-subtle hover:bg-background-neutral"
      >
        <IoSettingsOutline aria-hidden="true" size={24} />
      </button>
    </div>

    <div className="mt-10 flex min-w-0 items-center gap-3 text-font-subtle">
      <FaChevronUp aria-hidden="true" className="shrink-0" size={16} />
      <span className="truncate font-primary-light text-lg">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <FaChevronUp aria-hidden="true" className="shrink-0" size={18} />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-11 flex gap-9 pl-12">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="w-[170px] cursor-pointer rounded-lg bg-[#a63f1c] py-5 text-lg text-font-subtle"
        >
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);
