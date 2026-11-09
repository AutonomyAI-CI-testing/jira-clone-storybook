import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const inputStyles =
  "mt-3 w-full rounded border border-[#6b6b6b] bg-[#2a2a2a] px-4 py-3 font-primary text-sm text-[#c8c8c8] placeholder:text-[#8a8a8a]";

const actionButtonStyles =
  "rounded-lg bg-[#a04a17] px-8 py-3 font-primary text-sm text-[#d0d0d0]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="flex items-center gap-2 font-primary-light text-sm text-[#c8c8c8]">
      {label}
      <HiOutlineInformationCircle aria-hidden="true" size={18} />
    </div>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={inputStyles}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-[#1e1e1e] px-8 py-10 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <HiOutlineCog aria-hidden="true" size={22} />
    </div>

    <div className="mt-4 flex items-center gap-2 font-primary-light text-sm text-[#9a9a9a]">
      <HiChevronUp aria-hidden="true" size={18} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <HiChevronUp aria-hidden="true" size={20} />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-8 flex gap-5">
      <button type="button" className={actionButtonStyles}>
        Awesome
      </button>
      <button type="button" className={actionButtonStyles}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
