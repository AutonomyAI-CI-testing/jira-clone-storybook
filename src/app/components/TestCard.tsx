import cx from "classix";
import { BsChevronUp, BsGearFill, BsInfoCircle } from "react-icons/bs";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="relative h-[508px] w-[254px] overflow-hidden bg-[#1C1D17] font-['Inter',sans-serif]"
    >
      <div className="absolute inset-x-0 top-0 h-[9px] bg-[#161613]" />

      <span className="absolute left-[20px] top-[20px] text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <BsGearFill
        aria-hidden="true"
        size={16}
        className="absolute left-[216px] top-[20px] text-[#b5b5b5]"
      />

      <BsChevronUp
        aria-hidden="true"
        size={10}
        className="absolute left-[23px] top-[57px] text-[#8b9291]"
      />
      <span className="absolute left-[40px] top-[54px] text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>

      <BsChevronUp
        aria-hidden="true"
        size={14}
        className="absolute left-[26px] top-[150px] text-[#b2b2b1]"
      />
      <span className="absolute left-[43px] top-[145px] text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>

      <Field
        label="Personal Access Token"
        labelClass="left-[20px] top-[189px] text-[11.5px] text-[#a4a4a3]"
        infoClass="left-[173px] top-[187px] text-[#a4a4a3]"
        inputClass="left-[20px] top-[215px] h-[36px] border border-[#a5adad] pl-[18px] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        label="Design URL"
        labelClass="left-[20px] top-[262px] text-[11.5px] text-[#a3a3a2]"
        infoClass="left-[100px] top-[260px] text-[#a3a3a2]"
        inputClass="left-[20px] top-[287px] h-[37px] border-2 border-[#929291] pl-[18px] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
        placeholder="https://www.figma.com/file/:"
      />

      <ActionButton label="Awesome" className="left-[44px] top-[347px]" />
      <ActionButton label="Prepare" className="left-[146px] top-[346px]" />

      <span className="absolute left-[20px] top-[430px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};

const Field = ({
  label,
  labelClass,
  infoClass,
  inputClass,
  placeholder,
}: FieldProps): JSX.Element => {
  return (
    <>
      <span className={cx("absolute font-semibold", labelClass)}>{label}</span>
      <BsInfoCircle
        aria-hidden="true"
        size={15}
        className={cx("absolute", infoClass)}
      />
      <input
        type="text"
        aria-label={label}
        placeholder={placeholder}
        className={cx(
          "absolute w-[211px] bg-[#272822] font-semibold outline-none",
          inputClass
        )}
      />
    </>
  );
};

const ActionButton = ({ label, className }: ActionButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={cx(
        "absolute h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]",
        className
      )}
    >
      {label}
    </button>
  );
};

interface FieldProps {
  label: string;
  labelClass: string;
  infoClass: string;
  inputClass: string;
  placeholder: string;
}

interface ActionButtonProps {
  label: string;
  className: string;
}
