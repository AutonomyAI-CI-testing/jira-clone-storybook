import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static render of the "UI magician Agent" panel from the Test Page Figma frame.
 *
 * Smoke-test fixture: it takes no props, holds no state and does nothing. Colours come from
 * this repo's semantic tokens, so the panel reads dark wherever the dark theme is active.
 * The two button values are literals — the frame's rust fill has no matching token.
 */

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <label
      htmlFor={id}
      className="flex items-center gap-3 font-primary-bold text-lg text-font"
    >
      {label}
      <FiInfo aria-hidden="true" className="h-5 w-5 shrink-0" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-7 h-[70px] w-full rounded border-none bg-background-input px-10 font-primary text-xl text-font outline outline-2 outline-border-input placeholder:text-font-subtlest hover:bg-background-input-hovered"
    />
  </div>
);

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface px-10 pb-28 pt-12 font-primary text-font"
    >
      <header className="flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="rounded-full p-1 text-font hover:bg-background-neutral active:bg-background-neutral-pressed"
        >
          <FiSettings aria-hidden="true" className="h-6 w-6" />
        </button>
      </header>

      <div className="mt-10 flex items-center gap-3 text-font-subtlest">
        <FiChevronUp aria-hidden="true" className="h-6 w-6 shrink-0" />
        <span className="truncate font-primary-light text-lg">
          From entire frame to a singl…
        </span>
      </div>

      <section className="mt-40">
        <h2 className="flex items-center gap-3 font-primary-bold text-2xl">
          <FiChevronUp aria-hidden="true" className="h-6 w-6 shrink-0" />
          Add New Design
        </h2>

        <div className="mt-14">
          <Field
            id="test-card-access-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="mt-7">
          <Field
            id="test-card-design-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
          />
        </div>

        <div className="mt-12 flex justify-end gap-9">
          {ACTIONS.map((action) => (
            <button
              key={action}
              type="button"
              className="h-[72px] w-[170px] rounded-md bg-[#9c3d10] font-primary text-xl text-[#b3a49a] hover:bg-[#8a3510] active:bg-[#7a2f0e]"
            >
              {action}
            </button>
          ))}
        </div>
      </section>

      <h2 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
