import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static rendering of the "UI magician Agent" Figma frame.
 *
 * Smoke-test component: it takes no props, holds no state and has no behaviour. Its colours and
 * geometry are approximations read from the design image rather than from the design's own tokens,
 * so they are written as literal arbitrary values instead of the project's semantic ones.
 */
const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-7">
    <div className="mb-3 flex items-center gap-3 text-[16px]">
      <span>{label}</span>
      <FiInfo aria-hidden className="shrink-0" size={20} />
    </div>
    <input
      aria-label={label}
      className="h-[56px] w-full rounded-[4px] border border-[#9a9a9a] bg-[#1e1e1e] px-6 text-[17px] text-[#c9c9c9] placeholder:text-[#7a7a7a]"
      placeholder={placeholder}
    />
  </div>
);

const ActionButton = ({ label }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[52px] w-[172px] rounded-[8px] bg-[#9e3b12] font-primary-bold text-[17px] text-[#a89488]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#141414] px-10 pb-[100px] pt-7 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[20px] leading-tight">
        UI magician Agent
      </h1>
      <FiSettings aria-hidden className="mt-1 shrink-0 text-[#a8a8a8]" size={22} />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp aria-hidden className="shrink-0 text-[#8a8a8a]" size={18} />
      <span className="truncate text-[16px] text-[#8a8a8a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[210px] flex items-center gap-2">
      <FiChevronUp aria-hidden className="shrink-0" size={22} />
      <h2 className="font-primary-bold text-[21px]">Add New Design</h2>
    </div>

    <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />

    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-[34px] flex gap-8 pl-12">
      {["Awesome", "Prepare"].map((label) => (
        <ActionButton key={label} label={label} />
      ))}
    </div>

    <h2 className="mt-[90px] font-primary-bold text-[21px]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  label: string;
}
