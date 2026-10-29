import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Reproduction of the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained: no props, no state and no wiring into the app.
 * The colours are the frame's own dark-and-orange palette rather than this
 * app's semantic theme tokens, because the design system has no token for it —
 * so this card does not take part in the light / dark / lava / lime themes.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 py-10 font-primary text-[#e3e3e3]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <FiSettings aria-hidden className="h-6 w-6 shrink-0 text-[#e3e3e3]" />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp aria-hidden className="h-5 w-5 shrink-0 text-[#c8c8c8]" />
      <span className="truncate text-[17px] text-[#a3a3a3]">
        From entire frame to a single component
      </span>
    </div>

    {/* Empty region the frame reserves above the form */}
    <div aria-hidden className="h-[150px]" />

    {/* Add New Design */}
    <h2 className="flex items-center gap-3 font-primary-bold text-xl">
      <FiChevronUp aria-hidden className="h-5 w-5 shrink-0" />
      Add New Design
    </h2>

    <div className="mt-8">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-5">
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    {/* Actions */}
    <div className="mt-12 flex gap-8 pl-12">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-[108px] font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-10">
      <label
        htmlFor={id}
        className="font-primary-bold text-[17px] text-[#d6d6d6]"
      >
        {label}
      </label>
      <FiInfo aria-hidden className="h-6 w-6 shrink-0 text-[#d6d6d6]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-4 h-[72px] w-full border border-[#8c8c8c] bg-[#2b2b2b] px-10 text-[17px] text-[#e3e3e3] placeholder:text-[#9a9a9a]"
    />
  </div>
);

const ActionButton = ({ label }: ActionButtonProps) => (
  <button
    type="button"
    className="h-[70px] w-[170px] rounded-md bg-[#8b4a1e] text-[17px] text-[#cf9d73]"
  >
    {label}
  </button>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  label: string;
}
