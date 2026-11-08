import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-[10px]">
    <div className="flex items-center gap-2">
      <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
        {label}
      </span>
      <HiOutlineInformationCircle
        size={15}
        className="text-[#a4a4a3]"
        aria-hidden="true"
      />
    </div>
    <div className="flex h-[36px] w-full items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] leading-[14px] text-[#737470]">
        {placeholder}
      </span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black p-[20px] font-primary-bold text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16px]">UI magician Agent</span>
      <HiOutlineCog size={16} aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp size={10} className="text-[#8b9291]" aria-hidden="true" />
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <HiChevronUp size={14} className="text-[#b2b2b1]" aria-hidden="true" />
      <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex flex-col gap-[11px]">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="mt-[22px] flex justify-center gap-[17px]">
      {["Awesome", "Prepare"].map((label) => (
        <div
          key={label}
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]"
        >
          <span className="text-[11.5px] leading-[14px] text-[#8c8078]">
            {label}
          </span>
        </div>
      ))}
    </div>

    <p className="mt-[47px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);
