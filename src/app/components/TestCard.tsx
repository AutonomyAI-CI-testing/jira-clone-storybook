import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { RiArrowUpSLine } from "react-icons/ri";

const Field = ({ label, placeholder }: FieldProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="font-primary text-[16px] text-[#f0f0f0]">{label}</span>
        <AiOutlineInfoCircle
          aria-label="More information"
          className="text-[16px] text-[#f0f0f0]"
          role="img"
        />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-[3px] border border-[#6b6b6b] bg-[#1a1a1a] px-4 py-4 font-primary text-[16px] text-[#b3b3b3] placeholder:text-[#8a8a8a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1a1a1a] px-10 pt-10 pb-16 font-primary text-[#f0f0f0]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-[21px]">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="flex items-center justify-center rounded text-[22px] text-[#f0f0f0] hover:text-[#d5d5d5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
        >
          <AiOutlineSetting aria-hidden />
        </button>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <RiArrowUpSLine
          aria-hidden
          className="shrink-0 text-[22px] text-[#9a9a9a]"
        />
        <span className="truncate font-primary text-[17px] text-[#9a9a9a]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-32 flex items-center gap-3">
        <RiArrowUpSLine aria-hidden className="shrink-0 text-[24px]" />
        <h2 className="font-primary-bold text-[21px]">Add New Design</h2>
      </div>

      <div className="mt-12 flex flex-col gap-8">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-14 flex gap-9">
        <button
          type="button"
          className="flex-1 rounded-[3px] bg-[#a8481f] px-6 py-5 font-primary text-[17px] text-[#e0a184] hover:bg-[#b9542a] active:bg-[#963f1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-[3px] bg-[#a8481f] px-6 py-5 font-primary text-[17px] text-[#e0a184] hover:bg-[#b9542a] active:bg-[#963f1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary text-[21px] text-[#d5d5d5]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
