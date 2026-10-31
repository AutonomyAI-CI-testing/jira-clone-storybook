import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const inputClassName =
  "mt-2 h-12 w-full rounded-md border border-[#6f6f6f] bg-[#242424] px-4 font-primary text-[15px] text-[#d7d7d7] placeholder:text-[#8c8c8c]";

const buttonClassName =
  "h-12 flex-1 rounded-md bg-[#a6451f] font-primary text-[15px] text-[#efe6e1]";

const ACTIONS = ["Awesome", "Prepare"];

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-6">
    <div className="flex items-center gap-2">
      <span className="font-primary-light text-[15px] text-[#b3b3b3]">
        {label}
      </span>
      <IoInformationCircleOutline size={20} className="text-[#9a9a9a]" />
    </div>
    <input readOnly placeholder={placeholder} className={inputClassName} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[380px] flex-col bg-[#1b1b1b] px-8 py-10 font-primary text-[#d7d7d7]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <IoSettingsOutline size={24} className="text-[#9a9a9a]" />
      </div>

      <div className="mt-7 flex items-center gap-3">
        <IoChevronUp size={20} className="shrink-0 text-[#9a9a9a]" />
        <span className="min-w-0 truncate font-primary-light text-[15px] text-[#a3a3a3]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-32" />

      <div className="flex items-center gap-2">
        <IoChevronUp size={24} />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-8 flex gap-4">
        {ACTIONS.map((action) => (
          <button key={action} type="button" className={buttonClassName}>
            {action}
          </button>
        ))}
      </div>

      <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
