import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface px-10 py-8 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-primary-bold">UI magician Agent</h1>
        <HiOutlineCog size={28} className="text-font-subtle" />
      </div>

      <div className="mt-6 flex items-center gap-2">
        <HiChevronUp size={18} className="shrink-0" />
        <span className="truncate text-base text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-24 flex items-center gap-2">
        <HiChevronUp size={20} className="shrink-0" />
        <h2 className="text-2xl font-primary-bold">Add New Design</h2>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-8 flex gap-9">
        <button
          type="button"
          className="h-[62px] flex-1 rounded-[10px] bg-[var(--Orange800)] text-base font-primary-bold text-font"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[62px] flex-1 rounded-[10px] bg-[var(--Orange800)] text-base font-primary-bold text-font"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 text-2xl font-primary-bold">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-base">{label}</span>
        <HiOutlineInformationCircle size={18} className="text-font-subtle" />
      </div>
      <input
        placeholder={placeholder}
        className="mt-3 h-[64px] w-full rounded-md border border-border-bold bg-transparent px-4 text-base font-primary-light text-font placeholder:text-font-subtlest"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
