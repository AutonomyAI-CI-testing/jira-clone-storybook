import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a static reproduction of the cropped Figma frame.
 * Self-contained — takes no props and imports nothing from the app.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#0d0d0d] px-[42px] pb-[40px] pt-[36px] font-primary text-[#ededed]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[22px] leading-none">
          UI magician Agent
        </h1>
        <FiSettings size={24} className="text-[#c8c8c8]" />
      </div>

      <div className="mt-[26px] flex items-center gap-[10px] text-[#9a9a9a]">
        <FiChevronUp size={22} />
        <span className="text-[16px]">From entire frame to a singl...</span>
      </div>

      <div className="mt-[72px] flex items-center gap-[10px]">
        <FiChevronUp size={24} />
        <h2 className="font-primary-bold text-[20px] leading-none">
          Add New Design
        </h2>
      </div>

      <div className="mt-[30px]">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-[22px]">
        <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
      </div>

      <div className="mt-[40px] flex gap-[36px]">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <h2 className="mt-[90px] font-primary-bold text-[20px] leading-none">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-[14px]">
      <span className="text-[15px]">{label}</span>
      <FiInfo size={20} className="text-[#e0e0e0]" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-[14px] h-[64px] w-full border border-[#8a8a8a] bg-[#1e1e1e] px-[16px] text-[17px] placeholder:text-[#8f8f8f]"
    />
  </div>
);

const ActionButton = ({ label }: ActionButtonProps) => (
  <button
    type="button"
    className="h-[74px] w-[168px] rounded-lg bg-[#9c3a10] text-[20px] text-[#a8988f]"
  >
    {label}
  </button>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  label: string;
}
