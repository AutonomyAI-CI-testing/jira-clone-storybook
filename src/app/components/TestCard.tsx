import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" panel from the design frame.
 * Self-contained: no props, no state, no data. Colours and sizes are read from
 * the frame and are intentionally approximate.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 pb-28 pt-10 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[20px]">UI magician Agent</h1>
      <FiSettings aria-hidden="true" className="h-6 w-6" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#b0b0b0]">
      <FiChevronUp aria-hidden="true" className="h-5 w-5 shrink-0" />
      <span className="truncate font-primary-light text-[16px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" className="h-5 w-5 shrink-0" />
      <h2 className="font-primary-bold text-[20px]">Add New Design</h2>
    </div>

    <div className="mt-16 space-y-8">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex justify-center gap-8">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[70px] w-[169px] rounded-md bg-[#8c3d1c] text-[20px] text-[#d8d2cc]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-28 font-primary-bold text-[20px]">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="block">
    <span className="flex items-center gap-3 text-[#d0d0d0]">
      <span className="font-primary-light text-[16px]">{label}</span>
      <FiInfo aria-hidden="true" className="h-5 w-5" />
    </span>
    <input
      readOnly
      type="text"
      placeholder={placeholder}
      className="mt-4 h-[70px] w-full rounded border border-[#8a8a8a] bg-[#262626] px-6 font-primary-light text-[16px] text-[#9a9a9a] placeholder:text-[#9a9a9a]"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
