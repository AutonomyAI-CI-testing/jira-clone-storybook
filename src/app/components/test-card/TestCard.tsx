import { IoChevronUpOutline, IoInformationCircleOutline } from "react-icons/io5";
import { MdSettings } from "react-icons/md";

/**
 * Static recreation of the "UI magician Agent" frame.
 *
 * This is a self-contained mock: no props, no state and no event handlers.
 * The frame is a dark panel whatever the app theme is, so the root pins the
 * `dark` theme class and everything inside resolves from the semantic tokens
 * for that theme. The one exception is the rust button fill, which no semantic
 * token covers — it uses the palette variable directly.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-2xl text-font">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="text-icon hover:text-font"
      >
        <MdSettings className="h-7 w-7" />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-3 text-font-subtle">
      <IoChevronUpOutline className="h-5 w-5 shrink-0" />
      <span className="truncate font-primary-light text-lg">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <IoChevronUpOutline className="h-7 w-7 shrink-0 text-font" />
      <h2 className="font-primary-bold text-2xl text-font">Add New Design</h2>
    </div>

    <Field
      id="test-elem-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="test-elem-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex gap-[34px] pl-12">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[72px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary text-xl text-white"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-bold text-2xl text-font">
      Recent Breakdowns
    </h2>
  </div>
);

const ACTION_LABELS = ["Awesome", "Prepare"];

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-lg text-font-subtle">
        {label}
      </label>
      <IoInformationCircleOutline className="h-5 w-5 shrink-0 text-font-subtle" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 w-full rounded border border-border-bold bg-background-input px-5 py-4 text-lg text-font placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
