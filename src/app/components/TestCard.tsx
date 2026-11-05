import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { RiArrowUpSLine } from "react-icons/ri";

interface FieldProps {
  label: string;
  placeholder: string;
  /** The two fields sit at different distances from the block above them in the design. */
  topClassName: string;
  borderClassName: string;
  placeholderClassName: string;
}

const Field = ({
  label,
  placeholder,
  topClassName,
  borderClassName,
  placeholderClassName,
}: FieldProps) => (
  <>
    <div className={`${topClassName} flex items-center justify-between`}>
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <AiOutlineInfoCircle size={15} className="text-[#a4a4a3]" />
    </div>
    <div
      className={`mt-[12px] flex h-[36px] w-[211px] items-center bg-[#272822] px-[19px] ${borderClassName}`}
    >
      <span className={placeholderClassName}>{placeholder}</span>
    </div>
  </>
);

const ActionButton = ({ label }: { label: string }) => (
  <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
    <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
      {label}
    </span>
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1c1c1c] px-5 pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <RiArrowUpSLine size={16} className="text-[#8b9291]" />
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <RiArrowUpSLine size={16} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      topClassName="mt-[28px]"
      borderClassName="border border-[color:#a5adad]"
      placeholderClassName="text-[11.5px] leading-[13.92px] font-semibold text-[#737470]"
    />
    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      topClassName="mt-[11px]"
      borderClassName="border-2 border-[color:#929291]"
      placeholderClassName="text-[10.5px] leading-[12.71px] font-semibold text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <span className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

export default TestCard;
