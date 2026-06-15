import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  const inputClasses = "w-full p-2 rounded bg-[#1e1e1e] border border-[#444] text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500";
  const buttonBaseClasses = "flex-1 py-2 px-4 bg-[#b5541e] text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors";

  return (
    <div id="testElem" className="flex flex-col p-6 max-w-md mx-auto bg-[#2a2a2a] text-white rounded-lg shadow-sm">
      {/* Header Row: Main title and configuration icon */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <HiCog className="text-white text-xl" />
      </div>

      {/* Subtitle Row: Status or context message in amber/orange to match branding */}
      <div className="flex items-center text-[#c1622a] mb-6">
        <HiChevronUp className="text-lg mr-2" />
        <p className="text-sm">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section Toggle/Header */}
      <div className="flex items-center mb-4">
        <HiChevronUp className="text-white text-lg mr-2" />
        <h2 className="text-white text-lg font-bold">Add New Design</h2>
      </div>

      {/* Form Area: Collection of design inputs */}
      <div className="flex flex-col gap-4 mb-6">
        {/* Figma Personal Access Token Input */}
        <div>
          <div className="flex items-center mb-2">
            <label htmlFor="pat" className="text-white text-sm font-medium mr-2">Personal Access Token</label>
            <HiInformationCircle className="text-gray-400 text-sm" />
          </div>
          <input
            id="pat"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={inputClasses}
          />
        </div>

        {/* Figma Design URL Input */}
        <div>
          <div className="flex items-center mb-2">
            <label htmlFor="design-url" className="text-white text-sm font-medium mr-2">Design URL</label>
            <HiInformationCircle className="text-gray-400 text-sm" />
          </div>
          <input
            id="design-url"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Action Buttons: Primary interactions for the design card */}
      <div className="flex space-x-4 mb-6">
        <button className={buttonBaseClasses}>
          Awesome
        </button>
        <button className={buttonBaseClasses}>
          Prepare
        </button>
      </div>

      {/* Recent Activity Section */}
      <div>
        <h2 className="text-white text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}; 
