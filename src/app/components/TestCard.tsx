import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const BUTTON_CLASS =
  "h-12 flex-1 rounded-md bg-[var(--Orange700)] text-[16px] text-white hover:bg-[var(--Orange600)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 py-12 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-[20px]">UI magician Agent</h1>
      <HiOutlineCog className="text-icon-subtle" size={24} />
    </div>

    <div className="mt-6 flex items-center gap-2">
      <HiChevronUp className="shrink-0 text-icon-subtle" size={18} />
      <span className="truncate text-[15px] text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <HiChevronUp className="shrink-0 text-icon" size={20} />
      <h2 className="font-primary-black text-[19px]">Add New Design</h2>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-10 flex gap-4">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-black text-[19px]">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="mt-6">
    <div className="flex items-center gap-2">
      <span className="text-[15px] text-font-subtle">{label}</span>
      <HiOutlineInformationCircle className="text-icon-subtle" size={18} />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-2 h-[56px] w-full rounded-md border border-border-bold bg-background-input px-4 text-[15px] placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
