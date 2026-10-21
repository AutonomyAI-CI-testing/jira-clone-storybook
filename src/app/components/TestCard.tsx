import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard — a self-contained smoke-test component that recreates the supplied
 * Figma frame (the "UI magician Agent" panel). It accepts no props and holds no
 * state, so it renders the same thing everywhere it is used.
 *
 * Colours and spacing are approximations of the frame, applied with arbitrary
 * Tailwind values rather than the app's semantic tokens: the frame's dark
 * palette is not part of the project's theme contract.
 */
const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="block">
    <span className="flex items-center gap-2 text-[#e0e0e0]">
      <span className="font-primary-light text-[16px]">{label}</span>
      <FiInfo size={20} aria-hidden="true" />
    </span>

    <input
      readOnly
      placeholder={placeholder}
      className="mt-2 h-[66px] w-full rounded-[8px] border border-[#6e6e6e] bg-[#2b2b2b] px-4 font-primary-light text-[17px] text-[#f2f2f2] placeholder:text-[#9aa0a6]"
    />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 pb-24 pt-10 font-primary text-[#f2f2f2]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[20px] leading-6">
        UI magician Agent
      </h1>
      <FiSettings
        className="mt-0.5 text-[#d0d0d0]"
        size={24}
        aria-hidden="true"
      />
    </div>

    <div className="mt-10 flex items-center gap-2 text-[#9aa0a6]">
      <FiChevronUp size={20} aria-hidden="true" />
      <span className="font-primary-light text-[16px]">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-24 flex items-center gap-2 font-primary-bold text-[22px] leading-7">
      <FiChevronUp size={24} aria-hidden="true" />
      Add New Design
    </h2>

    <div className="mt-10 flex flex-col gap-6">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex justify-center gap-8">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[70px] w-[170px] rounded-[8px] bg-[#b0491b] font-primary text-[20px] text-[#d4d6d8]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-28 font-primary-bold text-[22px] leading-7">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
