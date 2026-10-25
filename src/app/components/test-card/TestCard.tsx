import { MdOutlineInfo, MdOutlineSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

/**
 * A static card built from a Figma frame — the smoke test for turning a design
 * into a rendered component in this project.
 *
 * It takes no props and holds no state. The frame is a dark panel, so the card
 * pins the dark theme scope on itself and styles everything else from the
 * semantic tokens; it therefore renders the same in every app theme.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="dark">
    <div className="w-[508px] rounded-md bg-elevation-surface px-10 pb-16 pt-10 text-font">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="cursor-pointer rounded p-1 text-icon hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
        >
          <MdOutlineSettings aria-hidden="true" className="text-2xl" />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-font-subtle">
        <RiArrowUpSLine aria-hidden="true" className="shrink-0 text-xl" />
        <span className="truncate font-primary-light text-base">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-44 flex items-center gap-2">
        <RiArrowUpSLine aria-hidden="true" className="shrink-0 text-2xl" />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <div className="mt-8 space-y-6">
        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-10 flex gap-9 pl-12">
        {BUTTON_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            // The frame's rust fill and its near-white button text have no
            // semantic token, so they come from the palette in app.css.
            className="w-[170px] cursor-pointer rounded bg-[var(--Orange800)] py-4 font-primary text-base text-[var(--DarkNeutral1100)] hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  </div>
);

const BUTTON_LABELS = ["Awesome", "Prepare"];

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2 text-font-subtle">
      <label htmlFor={id} className="font-primary text-base">
        {label}
      </label>
      <MdOutlineInfo aria-hidden="true" className="text-lg" />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-border-bold bg-background-input px-4 py-4 font-primary-light text-base placeholder:text-font-subtle focus-visible:bg-background-input-pressed"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
