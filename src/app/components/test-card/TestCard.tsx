import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a standalone reproduction of the dark
 * "UI magician Agent" settings panel from the design frame.
 *
 * Deliberately self-contained — no props, no state, no data. It also sits
 * outside the app's token-driven theme (it is a dark panel by design), so its
 * colours are local arbitrary values rather than semantic design tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#0d0d0d] px-10 pb-12 pt-7 text-[#e6e6e6]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-bold text-white">UI magician Agent</h2>
      <FiSettings className="h-6 w-6 text-[#8a8a8a]" aria-hidden="true" />
    </div>

    {/* Frame summary row */}
    <div className="mt-7 flex items-center gap-2">
      <FiChevronUp
        className="h-5 w-5 shrink-0 text-[#b3b3b3]"
        aria-hidden="true"
      />
      <span className="truncate text-base text-[#b3b3b3]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp className="h-6 w-6 shrink-0 text-white" aria-hidden="true" />
      <h3 className="text-xl font-bold text-white">Add New Design</h3>
    </div>

    {/* Fields */}
    <div className="mt-8 flex flex-col gap-6">
      <Field
        id="test-card-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    {/* Actions */}
    <div className="mt-8 flex gap-7">
      {["Awesome", "Prepare"].map((action) => (
        <button
          key={action}
          type="button"
          className="flex-1 rounded-md bg-[#a63d1c] px-4 py-4 text-lg text-[#e8dedb]"
        >
          {action}
        </button>
      ))}
    </div>

    {/* Closing heading */}
    <h3 className="mt-20 text-xl font-bold text-white">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base text-[#c9c9c9]">
        {label}
      </label>
      <FiInfo className="h-5 w-5 text-[#c9c9c9]" aria-hidden="true" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 h-[52px] w-full rounded-[2px] bg-[#1a1a1a] px-4 text-base text-[#e6e6e6] outline outline-2 outline-[#6f6f6f] placeholder:text-[#8a8a8a]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
