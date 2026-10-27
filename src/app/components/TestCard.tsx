import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const LABEL_CLASS = "font-primary text-lg text-font";

const FIELD_CLASS =
  "mt-4 w-full rounded border border-border-bold bg-background-input px-4 py-4 font-primary-light text-lg text-font-subtle";

const BUTTON_CLASS =
  "w-[170px] rounded-md bg-background-brand-bold px-4 py-5 font-primary text-lg text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

const BUTTON_LABELS = ["Awesome", "Prepare"];

/**
 * Static replica of the "UI magician Agent" Figma frame.
 * Self-contained: takes no props and holds no state.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
        <span aria-hidden="true" className="text-icon-subtle">
          <FaCog size={28} />
        </span>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <span aria-hidden="true" className="text-icon-subtle">
          <FaChevronUp size={18} />
        </span>
        <span className="font-primary-light text-lg text-font-subtle">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-40 flex items-center gap-3">
        <span aria-hidden="true" className="text-icon-subtle">
          <FaChevronUp size={22} />
        </span>
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      <div className="mt-20">
        <Field
          id="test-card-token"
          label="Personal Access Token"
          value="figd_xxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-8">
        <Field
          id="test-card-url"
          label="Design URL"
          value="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-12 flex justify-center gap-9">
        {BUTTON_LABELS.map((label) => (
          <button key={label} type="button" className={BUTTON_CLASS}>
            {label}
          </button>
        ))}
      </div>

      <h3 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h3>
    </div>
  );
};

const Field = ({ id, label, value }: FieldProps): JSX.Element => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <label htmlFor={id} className={LABEL_CLASS}>
          {label}
        </label>
        <span aria-hidden="true" className="text-icon-subtle">
          <FaInfoCircle size={20} />
        </span>
      </div>
      <input
        id={id}
        type="text"
        readOnly
        defaultValue={value}
        className={FIELD_CLASS}
      />
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  value: string;
}

export default TestCard;
