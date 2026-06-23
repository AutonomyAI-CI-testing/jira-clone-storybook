
import React from "react";

// --- Sub-components ---

/**
 * Shared icon components extracted for readability and re-use.
 */
const GearIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.0007 6.47998C12.4419 6.47998 12.8687 6.30799 13.1783 5.9983L13.1977 5.97891L14.735 4.4416C14.7925 4.38411 14.8966 4.38411 14.9542 4.4416L15.4269 4.9143C15.4844 4.97179 15.5885 4.97179 15.646 4.9143L16.2736 4.28676C16.8926 3.66774 17.5199 4.29505 17.5199 4.29505L17.5204 4.29457C17.5218 4.29311 17.5238 4.29051 17.5252 4.28905L19.0645 2.74828C19.122 2.69078 19.2261 2.69078 19.2836 2.74828L19.7563 3.22097C19.8138 3.27846 19.8138 3.38257 19.7563 3.44006L18.219 4.97729C18.2165 4.9797 18.214 4.98218 18.2115 4.9846L19.3404 6.11352C19.5303 6.30349 19.7214 6.50284 20.0135 6.54924L20.0381 6.5505C20.1415 6.5559 20.218 6.58266 20.2829 6.64756L21.4984 7.86307C21.5559 7.92056 21.5559 8.02467 21.4984 8.08216L21.0257 8.55485C20.9682 8.61233 20.9682 8.71714 21.0257 8.77462L21.6533 9.40226L21.0257 10.0299L20.4022 9.40638C20.3447 9.34889 20.2399 9.34889 20.1824 9.40638L19.7097 9.87907C19.6522 9.93656 19.6522 10.0407 19.7097 10.0982L19.237 10.5709C19.1795 10.6284 19.0747 10.6284 19.0172 10.5709L18.9978 10.5515C18.6882 10.2418 18.2614 10.0699 17.8202 10.0699C17.379 10.0699 16.9522 10.2418 16.6426 10.5515L16.6231 10.5709L15.0859 12.1082C15.0284 12.1657 14.9243 12.1657 14.8668 12.1082L14.3941 11.6355C14.3366 11.578 14.2325 11.578 14.175 11.6355L13.5474 12.2631L12.9248 11.6405C12.8673 11.583 12.7632 11.583 12.7057 11.6405L12.233 12.1132C12.1755 12.1707 12.0714 12.1707 12.0139 12.1132L11.5412 11.6405C11.4837 11.583 11.3796 11.583 11.3222 11.6405L10.6945 12.2681L10.0669 11.6405C10.0094 11.583 9.90533 11.583 9.84784 11.6405L9.37515 12.1132C9.31766 12.1707 9.21355 12.1707 9.15606 12.1132L9.13667 12.0938C8.82701 11.7842 8.40015 11.6122 7.95898 11.6122C7.51781 11.6122 7.09095 11.7842 6.78129 12.0938L6.7619 12.1132L5.22461 10.5759C5.16712 10.5184 5.06301 10.5184 5.00552 10.5759L4.53283 11.0486C4.47534 11.1061 4.37123 11.1061 4.31375 11.0486L3.68611 10.421L3.05847 9.79339L3.68611 9.16575C3.7436 9.10826 3.84771 9.10826 3.9052 9.16575L4.37789 9.63844C4.43538 9.69593 4.53949 9.69593 4.59698 9.63844L5.06966 9.16575C5.12715 9.10826 5.23126 9.10826 5.28875 9.16575L5.30814 9.18514C5.6178 9.4948 6.04466 9.66679 6.48583 9.66679C6.927 9.66679 7.35386 9.4948 7.66352 9.18514L7.68291 9.16575L9.22021 7.62846C9.2777 7.57097 9.38181 7.57097 9.4393 7.62846L9.91199 8.10115C9.96948 8.15864 10.0736 8.15864 10.1311 8.10115L10.7587 7.47351C11.3777 6.85449 12.0007 6.47998 12.0007 6.47998Z"
      fill="#b5b5b5"
    />
    <path
      d="M12.0007 10.4799C10.05 10.4799 8.4707 12.0592 8.4707 13.9999C8.4707 15.9406 10.05 17.5199 12.0007 17.5199C13.9414 17.5199 15.5207 15.9406 15.5207 13.9999C15.5207 12.0592 13.9414 10.4799 12.0007 10.4799ZM12.0007 15.9199C10.9392 15.9199 10.0707 15.0514 10.0707 13.9899C10.0707 12.9284 10.9392 12.0599 12.0007 12.0599C13.0622 12.0599 13.9307 12.9284 13.9307 13.9899C13.9307 15.0514 13.0622 15.9199 12.0007 15.9199Z"
      fill="#b5b5b5"
    />
  </svg>
);

const ChevronUpIcon = ({ color = "#8b9291" }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
    <path d="M12 8L6 14H18L12 8Z" fill={color} />
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
      fill="#a4a4a3"
    />
  </svg>
);

interface LabeledInputProps {
  id: string;
  label: string;
  placeholder: string;
}

const LabeledInput = ({ id, label, placeholder }: LabeledInputProps) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-[#a4a4a3] text-sm font-bold mb-2 flex items-center">
      {label}
      <InfoIcon />
    </label>
    <input
      type="text"
      id={id}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-[#737470] leading-tight focus:outline-none focus:shadow-outline bg-[#1e1e1e] border-[#4a4a48]"
      placeholder={placeholder}
    />
  </div>
);

// --- Main Component ---

/**
 * TestCard component for user configuration and new design breakdown.
 * Designed with a dark theme consistent with high-fidelity design tools.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="p-6 bg-[#2b2b2b] text-white rounded-lg shadow-lg max-w-sm mx-auto my-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#b5b5b5]">UI magician Agent</h2>
        <GearIcon />
      </div>

      {/* Subtitle / Context */}
      <div className="flex items-center text-[#8b9291] mb-6">
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="h-px bg-gray-700 my-4"></div>

      {/* Add New Design Section Header */}
      <div className="flex items-center text-[#b2b2b1] text-lg font-bold mb-4">
        <ChevronUpIcon color="#b2b2b1" />
        <span>Add New Design</span>
      </div>

      {/* Configuration Inputs */}
      <LabeledInput
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <div className="mb-6">
        <LabeledInput
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-2 mb-6">
        <button className="bg-[#b85c38] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-1/2">
          Awesome
        </button>
        <button className="bg-[#b85c38] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-1/2">
          Prepare
        </button>
      </div>

      {/* Footer / History Section */}
      <h3 className="text-lg font-bold text-[#b0b0b0]">Recent Breakdowns</h3>
    </div>
  );
};

