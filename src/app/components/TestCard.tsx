import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const inputStyles =
  "w-full rounded-[2px] border border-[#6b6b6b] bg-[#2a2a2a] px-3 py-3 text-[16px] text-[#e6e6e6] placeholder:text-[#8a8a8a]";

const sectionTitleStyles = "font-primary-bold text-[18px]";

const Field = ({ label, placeholder }: FieldProps) => {
  const id = `test-card-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="text-[15px] text-[#a8a8a8]">
          {label}
        </label>
        <IoInformationCircleOutline size={18} className="text-[#a8a8a8]" />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className={`mt-2 ${inputStyles}`}
      />
    </div>
  );
};

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 py-8 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[20px]">UI magician Agent</h2>
      <IoSettingsOutline size={24} className="text-[#d0d0d0]" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[15px] text-[#9a9a9a]">
      <IoChevronUpOutline size={16} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-24">
      <div className="flex items-center gap-2">
        <IoChevronUpOutline size={18} className="shrink-0" />
        <h3 className={sectionTitleStyles}>Add New Design</h3>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="rounded-[8px] bg-[#b8531d] px-7 py-3 text-[16px] text-[#d9d9d9]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-[8px] bg-[#b8531d] px-7 py-3 text-[16px] text-[#d9d9d9]"
        >
          Prepare
        </button>
      </div>
    </div>

    <h3 className={`mt-24 ${sectionTitleStyles}`}>Recent Breakdowns</h3>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
