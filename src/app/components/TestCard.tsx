import {
  IoSettingsOutline,
  IoChevronUpOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

const buttonLabels = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1b1b1b] px-10 py-10 font-primary text-white"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[20px] leading-7">
          UI magician Agent
        </h2>
        <IoSettingsOutline size={24} className="text-[#c9c9c9]" aria-hidden />
      </div>

      <div className="mt-10 flex items-center gap-3">
        <IoChevronUpOutline
          size={20}
          className="shrink-0 text-[#a6a6a6]"
          aria-hidden
        />
        <span className="truncate text-[16px] text-[#a6a6a6]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex flex-col">
        <div className="flex items-center gap-3">
          <IoChevronUpOutline size={20} className="shrink-0" aria-hidden />
          <h3 className="font-primary-bold text-[20px] leading-7">
            Add New Design
          </h3>
        </div>

        <div className="mt-9 flex flex-col gap-6">
          <Field
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
          <Field label="Design URL" placeholder="https://www.figma.com/file/" />
        </div>

        <div className="mt-10 flex gap-9">
          {buttonLabels.map((label) => (
            <button
              key={label}
              type="button"
              className="h-[62px] w-[170px] rounded-md bg-[#a54a24] text-[16px] text-[#d9d9d9]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <h3 className="mt-20 font-primary-bold text-[20px] leading-7">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-[16px] text-[#a6a6a6]">{label}</span>
        <IoInformationCircleOutline
          size={20}
          className="text-[#a6a6a6]"
          aria-hidden
        />
      </div>
      <input
        type="text"
        readOnly
        placeholder={placeholder}
        className="w-full rounded-[2px] border border-[#5c5c5c] bg-transparent px-4 py-3.5 text-[15px] placeholder:text-[#a6a6a6]"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
