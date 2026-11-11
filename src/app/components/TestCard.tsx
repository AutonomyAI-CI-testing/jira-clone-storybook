import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Self-contained reproduction of the cropped "UI magician Agent" Figma frame.
 *
 * This is a smoke-test fixture. It is deliberately off the Jira clone's
 * semantic token palette — a dark panel with rust buttons, where the product is
 * light with a single cobalt accent — because it reproduces a design that does
 * not belong to this product. Nothing in the app links to it.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 pb-32 pt-8 font-primary"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[26px] leading-tight text-white">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Settings"
        className="shrink-0 text-[#c9c9c9]"
      >
        <FiSettings size={26} aria-hidden />
      </button>
    </div>

    <div className="mt-9 flex items-center gap-3 text-[20px] leading-tight text-[#c9c9c9]">
      <FiChevronUp size={20} className="shrink-0" aria-hidden />
      <span>From entire frame to a singl…</span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <FiChevronUp size={26} className="shrink-0 text-white" aria-hidden />
      <h3 className="font-primary-bold text-[26px] leading-tight text-white">
        Add New Design
      </h3>
    </div>

    <Field
      id="testcard-personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="testcard-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 grid grid-cols-2 gap-8 pl-12">
      <button
        type="button"
        className="rounded-md bg-[#a0431c] py-3 text-[20px] text-[#c9c9c9] hover:bg-[#8a3a17]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded-md bg-[#a0431c] py-3 text-[20px] text-[#c9c9c9] hover:bg-[#8a3a17]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-32 font-primary-bold text-[26px] leading-tight text-white">
      Recent Breakdowns
    </h3>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-12">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[20px] leading-tight text-[#c9c9c9]">
        {label}
      </label>
      <FiInfo size={20} className="shrink-0 text-[#c9c9c9]" aria-hidden />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-6 w-full rounded border border-[#c9c9c9] bg-[#2b2b2b] px-5 py-5 text-[20px] text-[#c9c9c9] placeholder:text-[#8a8a8a]"
    />
  </div>
);
