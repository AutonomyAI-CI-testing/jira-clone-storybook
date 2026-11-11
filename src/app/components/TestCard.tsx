import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const BUTTON_CLASS =
  "h-[48px] w-[167px] rounded-lg bg-[#9e3e1e] font-primary text-xl text-[#9a9a9a] hover:bg-[#8a3417]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="block">
    <span className="mb-4 flex items-center gap-4 font-primary-bold text-xl">
      {label}
      <HiOutlineInformationCircle
        size={26}
        className="shrink-0 text-[#c4c4c4]"
        aria-hidden
      />
    </span>
    <input
      placeholder={placeholder}
      className="h-[76px] w-full rounded border-2 border-[#767676] bg-[#262626] px-10 font-primary-light text-xl text-[#e8e8e8] outline-none placeholder:text-[#6f6f6f]"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1a1a1a] px-10 pt-11 pb-40 font-primary text-[#e8e8e8]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <HiOutlineCog size={28} className="shrink-0 text-[#d0d0d0]" aria-hidden />
    </div>

    <div className="mt-9 flex items-center gap-4 text-[#a8a8a8]">
      <HiOutlineChevronUp size={22} className="shrink-0" aria-hidden />
      <span className="truncate text-xl">From entire frame to a singl...</span>
    </div>

    <div className="mt-[140px] flex items-center gap-4">
      <HiOutlineChevronUp size={24} className="shrink-0" aria-hidden />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-12">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-11 flex gap-9 pl-[10px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[88px] font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
