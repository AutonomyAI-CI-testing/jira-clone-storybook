import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the supplied Figma frame ("UI magician Agent").
 *
 * Self-contained on purpose: no props, no state, no data. Colours are Tailwind
 * arbitrary values because this repo's Tailwind config replaces `theme.colors`
 * outright, so stock palette classes (`bg-gray-800`, `text-slate-400`) compile
 * to nothing.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 pb-16 pt-10 font-primary text-[#c8c8c8]"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-2xl font-primary-bold text-[#cfcfcf]">
        UI magician Agent
      </h1>
      <FiSettings
        role="img"
        aria-label="Settings"
        size={28}
        className="text-[#cfcfcf]"
      />
    </div>

    <div className="mt-8 flex items-center gap-2 text-xl text-[#a8a8a8]">
      <FiChevronUp aria-hidden="true" size={24} />
      <span>From entire frame to a singl...</span>
    </div>

    <h2 className="mt-24 flex items-center gap-2 text-2xl font-primary-bold text-[#d8d8d8]">
      <FiChevronUp aria-hidden="true" size={24} />
      Add New Design
    </h2>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file:"
    />

    <div className="mt-12 flex justify-center gap-8">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 text-2xl font-primary-bold text-[#d8d8d8]">
      Recent Breakdowns
    </h2>
  </div>
);

const actionButtonClass =
  "h-16 w-[170px] rounded-lg bg-[#a0492a] text-xl text-[#c8c8c8]";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-10">
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="text-xl text-[#c0c0c0]">
        {label}
      </label>
      <FiInfo
        role="img"
        aria-label={`About ${label}`}
        size={22}
        className="text-[#c0c0c0]"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-5 py-5 text-xl text-[#c8c8c8] placeholder:text-[#8f8f8f]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
