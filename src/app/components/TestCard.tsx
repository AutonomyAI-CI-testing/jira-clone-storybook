import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[420px] rounded-lg bg-[#252525] px-8 py-8 font-primary"
    >
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-[19px] text-[#e6e6e6]">
          UI magician Agent
        </h2>
        <HiOutlineCog size={26} className="shrink-0 text-[#d4d4d4]" />
      </div>

      {/* Collapsed row */}
      <div className="mt-9 flex min-w-0 items-center gap-2">
        <HiChevronUp size={22} className="shrink-0 text-[#c9c9c9]" />
        <span className="truncate font-primary-light text-[16px] text-[#cfcfcf]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-20 flex items-center gap-2">
        <HiChevronUp size={22} className="shrink-0 text-[#d4d4d4]" />
        <h3 className="font-primary-black text-[19px] text-[#f0f0f0]">
          Add New Design
        </h3>
      </div>

      <div className="mt-10 space-y-6">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-12">
        <button
          type="button"
          className="h-14 w-[150px] rounded-md bg-[#9c4423] font-primary-bold text-[16px] text-[#c9c2bd]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-14 w-[150px] rounded-md bg-[#9c4423] font-primary-bold text-[16px] text-[#c9c2bd]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-24 font-primary-black text-[19px] text-[#e6e6e6]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <span className="font-primary-light text-[16px] text-[#b5b5b5]">
        {label}
      </span>
      <HiOutlineInformationCircle size={20} className="text-[#9e9e9e]" />
    </div>
    <input
      placeholder={placeholder}
      className="mt-3 h-14 w-full rounded-[3px] border border-[#5a5a5a] bg-[#2b2b2b] px-4 font-primary-light text-[15px] text-[#a8a8a8] placeholder:text-[#8c8c8c]"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
