
import React from "react";

/**
 * UI Magician Agent side panel for adding and managing design breakdowns.
 * 
 * Note: Naming 'TestCard' is preserved as per existing implementation but it 
 * functions as a side panel/form.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 w-64 min-h-screen text-[#b5b5b5] font-sans">
      <Header />
      <CollapsibleRow label="From entire frame to a singl..." icon="^" />

      <Divider />

      <SectionHeader label="Add New Design" icon="^" />

      <div className="space-y-4 mb-6">
        <FormField 
          id="pat" 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        />
        
        <FormField 
          id="designUrl" 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:" 
          isThickBorder
        />
      </div>

      <ActionButtons />

      <Footer />
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <span className="font-semibold text-sm">UI magician Agent</span>
    <span className="cursor-pointer">⚙</span>
  </div>
);

const CollapsibleRow = ({ label, icon }: { label: string, icon: string }) => (
  <div className="flex items-center gap-1 mb-4 select-none cursor-pointer">
    <span className="text-[#8b9291] text-xs">{icon}</span>
    <span className="text-[#8b9291] text-xs truncate">{label}</span>
  </div>
);

const Divider = () => <div className="border-t border-[#333] mb-4" />;

const SectionHeader = ({ label, icon }: { label: string, icon: string }) => (
  <div className="flex items-center gap-2 mb-4 cursor-pointer">
    <span className="text-[#b2b2b1]">{icon}</span>
    <span className="text-[#b2b2b1] font-semibold text-sm">{label}</span>
  </div>
);

const FormField = ({ 
  id, 
  label, 
  placeholder, 
  isThickBorder = false 
}: { 
  id: string, 
  label: string, 
  placeholder: string,
  isThickBorder?: boolean
}) => (
  <div>
    <div className="flex items-center gap-1 mb-1">
      <label htmlFor={id} className="text-[#a4a4a3] text-xs font-semibold cursor-pointer">
        {label}
      </label>
      <span className="text-[#a4a4a3] text-xs cursor-help" title="More information">ⓘ</span>
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`w-full bg-[#272822] rounded text-[#737470] text-xs p-2 focus:outline-none focus:ring-1 focus:ring-[#a5adad] transition-all
        ${isThickBorder ? "border-2 border-[#929291]" : "border border-[#a5adad]"}
      `}
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex gap-2 mt-4">
    <button className="flex-1 bg-[#843a17] hover:bg-[#9a441b] text-[#8c8078] text-xs font-semibold rounded-lg px-5 py-2 transition-colors">
      Awesome
    </button>
    <button className="flex-1 bg-[#843a17] hover:bg-[#9a441b] text-[#8c8078] text-xs font-semibold rounded-lg px-5 py-2 transition-colors">
      Prepare
    </button>
  </div>
);

const Footer = () => (
  <div className="mt-6 border-t border-[#333] pt-4">
    <span className="text-[#b0b0b0] font-semibold text-sm">Recent Breakdowns</span>
  </div>
);

