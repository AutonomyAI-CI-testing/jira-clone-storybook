import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

const inputClassName =
  "mt-3 h-12 w-full rounded border border-[#8c8c8c] bg-[#2c2c2c] px-4 font-primary text-sm text-white placeholder:text-[#8a8a8a]";

const buttonClassName =
  "rounded-md bg-[#b04a25] px-8 py-4 font-primary text-[#c9c9c9] hover:bg-[#c0552d]";

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="mt-6 block">
    <span className="flex items-center gap-2 text-[#b3b3b3]">
      <span className="font-primary text-base">{label}</span>
      <LuInfo size={18} aria-hidden />
    </span>
    <input type="text" placeholder={placeholder} className={inputClassName} />
  </label>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[420px] bg-[#1e1e1e] p-6 font-primary text-white"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button type="button" aria-label="Settings" className="text-white">
        <LuSettings size={24} aria-hidden />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-3 text-[#b3b3b3]">
      <LuChevronUp size={20} aria-hidden />
      <span className="truncate font-primary text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3 text-white">
      <LuChevronUp size={20} aria-hidden />
      <h2 className="font-primary-bold text-lg">Add New Design</h2>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-8 flex justify-center gap-8">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-lg text-white">
      Recent Breakdowns
    </h2>
  </div>
);
