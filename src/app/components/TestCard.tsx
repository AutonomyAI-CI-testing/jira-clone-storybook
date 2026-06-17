import { 
  HiChevronUp, 
  HiOutlineQuestionMarkCircle,
  HiOutlineAdjustments,
} from "react-icons/hi";

/**
 * TestCard is a standalone UI component used for visual design verification.
 */
const TestCard = (): JSX.Element => {
  const inputBaseStyles = "w-full bg-[#1a1a1a] border border-neutral-700 rounded-sm px-3 py-2 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-800 transition-shadow";
  const buttonBaseStyles = "flex-1 rounded-md px-6 py-3 text-gray-300 font-medium bg-[#4a261a] border border-[#5a2f20] hover:brightness-110 active:brightness-90 transition-all focus:outline-none focus:ring-1 focus:ring-orange-700";

  return (
    <div
      id="testElem"
      className="flex flex-col gap-6 p-6 w-full max-w-[400px] bg-[#0a0a0a] text-gray-200 rounded-sm shadow-2xl"
      role="region"
      aria-labelledby="card-title"
      style={{ fontFamily: 'CircularStdLight, sans-serif' }}
    >
      {/* Header Row */}
      <header className="flex justify-between items-center px-1">
        <h2 id="card-title" className="text-xl font-normal text-gray-300">
          UI magician Agent
        </h2>
        <HiOutlineAdjustments className="text-2xl cursor-pointer text-gray-400 rotate-90" aria-hidden="true" />
      </header>

      {/* Subtitle Row */}
      <div className="flex items-center gap-3 text-gray-500 text-base px-1">
        <HiChevronUp className="text-lg rotate-180" aria-hidden="true" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Main Section Header */}
      <div className="flex items-center gap-3 mt-4 px-1">
        <HiChevronUp className="text-xl text-gray-300" aria-hidden="true" />
        <h3 className="text-xl font-normal text-gray-200">Add New Design</h3>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-6 px-1 mt-2">
        {/* Personal Access Token Field */}
        <div className="flex flex-col gap-3">
          <label htmlFor="pat" className="text-lg font-normal text-gray-500 flex items-center justify-between">
            Personal Access Token
            <HiOutlineQuestionMarkCircle className="text-2xl" aria-label="Help info" />
          </label>
          <input
            type="password"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={inputBaseStyles}
            autoComplete="off"
          />
        </div>

        {/* Design URL Field */}
        <div className="flex flex-col gap-3">
          <label htmlFor="design-url" className="text-lg font-normal text-gray-500 flex items-center justify-between">
            Design URL
            <HiOutlineQuestionMarkCircle className="text-2xl" aria-label="Help info" />
          </label>
          <input
            type="url"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className={inputBaseStyles}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-4 px-1">
        <button type="button" className={buttonBaseStyles}>
          Awesome
        </button>
        <button type="button" className={buttonBaseStyles}>
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <footer className="mt-8 px-1">
        <h3 className="text-xl font-normal text-gray-300">Recent Breakdowns</h3>
      </footer>
    </div>
  );
};

export default TestCard;
