import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static reproduction of the "UI magician Agent" Figma panel.
 *
 * Smoke test only: it takes no props, holds no state and has no handlers. The
 * root element carries `id="testElem"` so it can be found on screen.
 *
 * The Figma frame's own colours and type are mapped onto the closest tokens
 * this repo declares, so a few shades and the font family differ slightly.
 */

const fields = [
  {
    id: "testcard-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
    borderClass: "border",
    spacingClass: "mt-7",
  },
  {
    id: "testcard-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
    borderClass: "border-2",
    spacingClass: "mt-3",
  },
];

const actions = ["Awesome", "Prepare"];

const fieldLabelClass =
  "font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]";
const fieldInputClass =
  "mt-3 h-9 w-full rounded border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 font-primary-bold text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]";
const actionClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]";

export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-black pt-[9px]">
    <div className="flex flex-col bg-[var(--DarkNeutral-100)] px-5 pt-3 pb-16">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          UI magician Agent
        </h2>
        <FaCog
          size={16}
          aria-hidden="true"
          className="text-[color:var(--Neutral400)]"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FaChevronUp
          size={10}
          aria-hidden="true"
          className="text-[color:var(--Neutral500)]"
        />
        <span className="font-primary-bold text-2xs text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[72px] flex items-center gap-1">
        <FaChevronUp
          size={12}
          aria-hidden="true"
          className="text-[color:var(--Neutral400)]"
        />
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      {fields.map((field) => (
        <div key={field.id} className={field.spacingClass}>
          <div className="flex items-center gap-4">
            <label htmlFor={field.id} className={fieldLabelClass}>
              {field.label}
            </label>
            <FaInfoCircle
              size={15}
              aria-hidden="true"
              className="text-[color:var(--DarkNeutral800)]"
            />
          </div>
          <input
            id={field.id}
            readOnly
            placeholder={field.placeholder}
            className={`${fieldInputClass} ${field.borderClass}`}
          />
        </div>
      ))}

      <div className="mt-5 flex justify-center gap-4">
        {actions.map((action) => (
          <button key={action} type="button" className={actionClass}>
            {action}
          </button>
        ))}
      </div>

      <p className="mt-12 font-primary-bold text-xs text-[color:var(--DarkNeutral800)]">
        Recent Breakdowns
      </p>
    </div>
  </div>
);

export default TestCard;
