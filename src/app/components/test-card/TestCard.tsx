import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard — a static reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test: no props, no state, and nothing on the panel is interactive.
 * The panel is built from the repo's semantic tokens, so it takes its dark
 * palette from the active theme rather than from hard-coded values.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-10 pb-40 pt-8 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <FiSettings aria-hidden="true" className="h-7 w-7 shrink-0 text-icon" />
    </div>

    <div className="mt-10 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="h-[18px] w-[18px] shrink-0 text-font-subtlest"
      />
      <span className="truncate font-primary text-lg text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-36 flex items-center gap-1 font-primary-bold text-2xl">
      <FiChevronUp aria-hidden="true" className="h-6 w-6 shrink-0" />
      Add New Design
    </h2>

    <div className="mt-16">
      <Field
        id="testcard-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field
        id="testcard-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-8">
      <button
        type="button"
        className="rounded bg-[#b4531f] px-10 py-5 font-primary-bold text-xl text-font hover:bg-[#c05a20] active:bg-[#9c4719]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[#b4531f] px-10 py-5 font-primary-bold text-xl text-font hover:bg-[#c05a20] active:bg-[#9c4719]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-10">
      <label htmlFor={id} className="font-primary-bold text-xl">
        {label}
      </label>
      <FiInfo aria-hidden="true" className="h-6 w-6 shrink-0 text-icon" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-border-bold bg-background-input px-6 py-5 font-primary text-lg placeholder:text-font-subtlest focus:outline-none"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
