import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * A static, self-contained recreation of the "UI magician Agent" settings
 * panel. Smoke-test component: it takes no props, holds no state and reads no
 * data.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#1e1e1e] p-8 font-primary text-[#d7d7d7]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[20px] text-[#e3e3e3]">
        UI magician Agent
      </h1>
      <FiSettings aria-hidden size={24} />
    </div>

    <div className="mt-8 flex items-center gap-3 text-[#9a9a9a]">
      <FiChevronUp aria-hidden size={20} />
      <span className="text-[15px]">From entire frame to a singl...</span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <FiChevronUp aria-hidden size={22} />
      <h2 className="font-primary-bold text-[19px] text-[#e3e3e3]">
        Add New Design
      </h2>
    </div>

    <div className="mt-8 flex flex-col gap-7">
      <PanelField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <PanelField label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-9 flex justify-center gap-9">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-auto pt-12 font-primary-bold text-[19px] text-[#e3e3e3]">
      Recent Breakdowns
    </h2>
  </div>
);

const PanelField = ({ label, placeholder }: PanelFieldProps): JSX.Element => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-4">
      <span className="font-primary-bold text-[16px]">{label}</span>
      <FiInfo aria-hidden size={20} />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="h-[46px] w-full rounded border border-[#6e6e6e] bg-[#2a2a2a] px-4 text-[16px] placeholder:text-[#9a9a9a]"
    />
  </label>
);

const PanelButton = ({ children }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[46px] w-[164px] cursor-pointer rounded-md bg-[#a04a22] font-primary-bold text-[17px] text-[#d9cfc9] hover:bg-[#b4551f]"
  >
    {children}
  </button>
);

interface PanelFieldProps {
  label: string;
  placeholder: string;
}

interface PanelButtonProps {
  children: React.ReactNode;
}
