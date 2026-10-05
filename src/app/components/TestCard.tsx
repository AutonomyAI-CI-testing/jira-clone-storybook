import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="font-primary text-sm text-[#d0d0d0]">{label}</span>
      <HiOutlineInformationCircle
        size={16}
        className="shrink-0 text-[#c9c9c9]"
      />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[#9a9a9a] bg-[#2a2a2a] px-4 py-3 font-primary text-sm text-[#d0d0d0] placeholder:text-[#8a8a8a] focus:outline-none"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const PanelButton = ({ label }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="flex-1 rounded-md bg-[#a83e14] px-4 py-3 font-primary text-sm text-[#d4d4d4]"
  >
    {label}
  </button>
);

interface PanelButtonProps {
  label: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[680px] w-[380px] flex-col gap-5 bg-[#1b1b1b] p-5"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-black text-lg text-[#c9c9c9]">
        UI magician Agent
      </span>
      <HiOutlineCog size={22} className="shrink-0 text-[#c9c9c9]" />
    </div>

    <div className="flex items-center gap-2">
      <HiOutlineChevronUp size={18} className="shrink-0 text-[#c9c9c9]" />
      <span className="truncate font-primary-light text-sm text-[#9a9a9a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <HiOutlineChevronUp size={20} className="shrink-0 text-[#c9c9c9]" />
      <span className="font-primary-black text-lg text-[#c9c9c9]">
        Add New Design
      </span>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <Field label="Design URL" placeholder="https://www.figma.com/file/:" />

    <div className="mt-2 flex gap-4">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    <div className="mt-auto pt-6">
      <span className="font-primary-black text-lg text-[#c9c9c9]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
