import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const BUTTONS = ["Awesome", "Prepare"];

/**
 * Smoke-test card recreating the reference panel from the Figma frame.
 * Self-contained and display-only: no props, no state, no behaviour.
 * The dark panel surface and warm-orange buttons are literal colours on
 * purpose — this repo's token palette is light-first and has no equivalent.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1e1e1e] px-10 py-10 font-primary text-[#c4c4c4]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[21px] text-[#c9c9c9]">
        UI magician Agent
      </h1>
      <FiSettings aria-label="Settings" size={26} className="text-[#c9c9c9]" />
    </div>

    <div className="mt-8 flex items-center gap-4">
      <FiChevronUp aria-hidden size={22} className="shrink-0 text-[#c9c9c9]" />
      <span className="text-[17px] text-[#b4b4b4]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-40 flex items-center gap-4">
      <FiChevronUp aria-hidden size={24} className="shrink-0 text-[#c9c9c9]" />
      <h2 className="font-primary-bold text-[20px] text-[#c9c9c9]">
        Add New Design
      </h2>
    </div>

    <div className="mt-8 flex flex-col gap-8">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex items-center justify-center gap-9">
      {BUTTONS.map((label) => (
        <button
          key={label}
          type="button"
          className="w-[169px] rounded-md bg-[#a03a17] py-5 text-[17px] text-[#d7b6a6]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-bold text-[20px] text-[#c9c9c9]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <span className="text-[17px] text-[#c4c4c4]">{label}</span>
      <FiInfo aria-hidden size={22} className="text-[#c4c4c4]" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="w-full rounded-sm border-2 border-[#8a8a8a] bg-transparent px-6 py-5 font-primary-light text-[17px] text-[#8f8f8f] placeholder:text-[#8f8f8f]"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
