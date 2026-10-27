import type { ReactNode } from "react";
import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

const FieldLabel = ({ htmlFor, children }: FieldLabelProps) => (
  <div className="flex items-center gap-3">
    <label htmlFor={htmlFor} className="text-[15px] text-[#cfcfcf]">
      {children}
    </label>
    <LuInfo size={20} className="shrink-0 text-[#cfcfcf]" aria-hidden="true" />
  </div>
);

const PanelInput = ({ id, placeholder }: PanelInputProps) => (
  <input
    id={id}
    type="text"
    placeholder={placeholder}
    className="mt-4 h-[56px] w-full rounded-[2px] border border-[#6e6e6e] bg-[#2a2a2a] px-4 text-[15px] text-[#e6e6e6] outline-none placeholder:text-[#9e9e9e]"
  />
);

const PanelButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[62px] w-[160px] rounded-[8px] bg-[#8b3f14] text-[17px] text-[#b98b6e]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div id="testElem" className="w-[508px] bg-[#1c1c1c] p-10 font-primary">
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[18px] text-[#e6e6e6]">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="text-[#d9d9d9]">
        <LuSettings size={24} />
      </button>
    </header>

    <div className="mt-10 flex items-center gap-3 text-[#9a9a9a]">
      <LuChevronUp size={20} className="shrink-0" aria-hidden="true" />
      <span className="min-w-0 truncate text-[15px]">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-[130px]">
      <h2 className="flex items-center gap-2 font-primary-bold text-[19px] text-[#e6e6e6]">
        <LuChevronUp size={20} className="shrink-0" aria-hidden="true" />
        Add New Design
      </h2>

      <div className="mt-8">
        <FieldLabel htmlFor="personal-access-token">
          Personal Access Token
        </FieldLabel>
        <PanelInput
          id="personal-access-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-6">
        <FieldLabel htmlFor="design-url">Design URL</FieldLabel>
        <PanelInput id="design-url" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-8 flex gap-5">
        <PanelButton>Awesome</PanelButton>
        <PanelButton>Prepare</PanelButton>
      </div>
    </section>

    <h2 className="mt-[110px] font-primary-bold text-[19px] text-[#d6d6d6]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldLabelProps {
  htmlFor: string;
  children: ReactNode;
}

interface PanelInputProps {
  id: string;
  placeholder: string;
}
