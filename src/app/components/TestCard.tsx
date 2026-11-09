import cx from "classix";
import { FaChevronUp, FaCircleInfo, FaGear } from "react-icons/fa6";

const actionButtonClass = cx(
  "rounded bg-[var(--Orange800)] px-8 py-4 font-primary text-lg text-font",
  "hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]"
);

const ACTION_LABELS = ["Awesome", "Prepare"];

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <FaCircleInfo aria-hidden="true" className="text-font-subtle" size={18} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-border-bold bg-background-input px-6 py-3 text-base placeholder:text-font-subtle"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * Static reproduction of the "UI magician Agent" Figma frame (node 2:2).
 *
 * Self-contained smoke test: no props, no state, no handlers. The panel is
 * dark by design, so the root pins the `dark` theme class and everything
 * inside names a semantic token rather than a literal colour.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] rounded-md bg-elevation-surface px-8 py-6 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <FaGear aria-hidden="true" className="text-font-subtle" size={22} />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FaChevronUp aria-hidden="true" className="shrink-0" size={16} />
      <span className="truncate text-base text-font-subtle">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <FaChevronUp aria-hidden="true" className="shrink-0" size={18} />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex items-center gap-7">
      {ACTION_LABELS.map((label) => (
        <button key={label} type="button" className={actionButtonClass}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-14 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
