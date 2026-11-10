import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Smoke-test component: a static reproduction of the cropped Figma frame
 * ("UI magician Agent"). Self-contained, takes no props, no state.
 *
 * Colours come from the project's raw palette variables, because the design is
 * off-system (a dark panel) and `theme.colors` here is a full override, so the
 * semantic roles have nothing that resolves to these values.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral100)] font-primary text-[color:var(--Neutral400)]"
  >
    {/* Header */}
    <div className="flex items-center justify-between px-5 pt-5">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <FaCog aria-hidden="true" size={15} />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-5 flex items-center gap-2 px-5">
      <FaChevronUp aria-hidden="true" size={9} />
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-20 px-5">
      <div className="flex items-center gap-2">
        <FaChevronUp aria-hidden="true" size={12} />
        <span className="font-primary-bold text-xs">Add New Design</span>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <Field
          id="test-card-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      <div className="mt-5 flex justify-end gap-4">
        {["Awesome", "Prepare"].map((label) => (
          <button key={label} type="button" className={BUTTON_CLASS}>
            {label}
          </button>
        ))}
      </div>
    </div>

    {/* Footer */}
    <h2 className="mt-12 px-5 pb-5 font-primary-bold text-xs">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-5">
      <label htmlFor={id} className="font-primary-bold text-2xs">
        {label}
      </label>
      <FaInfoCircle aria-hidden="true" size={15} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral250)] px-5 font-primary-bold text-2xs placeholder:text-[color:var(--DarkNeutral600)]"
    />
  </div>
);

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Orange200)]";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
