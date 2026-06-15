import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2d2e" }}
      className="min-h-screen w-full flex flex-col gap-12 p-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-primary-black text-white">
          UI magician Agent
        </h1>
        <FaCog className="text-gray-300 text-2xl" />
      </div>

      {/* Collapsed Section */}
      <div className="flex items-center gap-3">
        <FaChevronUp className="text-gray-400 text-lg" />
        <span className="text-lg text-gray-400">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Header */}
      <div className="flex items-center gap-3">
        <FaChevronUp className="text-white text-lg" />
        <h2 className="text-3xl font-primary-black text-white">
          Add New Design
        </h2>
      </div>

      {/* Form Inputs */}
      <div className="flex flex-col gap-6">
        {/* Personal Access Token Field */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <label className="text-lg text-white font-primary-bold">
              Personal Access Token
            </label>
            <FaInfoCircle className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-transparent border border-gray-600 rounded px-4 py-3 text-gray-400 placeholder:text-gray-500"
            readOnly
          />
        </div>

        {/* Design URL Field */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <label className="text-lg text-white font-primary-bold">
              Design URL
            </label>
            <FaInfoCircle className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="bg-transparent border border-gray-600 rounded px-4 py-3 text-gray-400 placeholder:text-gray-500"
            readOnly
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button className="flex-1 rounded px-6 py-3 font-primary-bold text-lg hover:opacity-90 active:opacity-80 transition-opacity" style={{ backgroundColor: "#b85c3c", color: "#d4a574" }}>
          Awesome
        </button>
        <button className="flex-1 rounded px-6 py-3 font-primary-bold text-lg hover:opacity-90 active:opacity-80 transition-opacity" style={{ backgroundColor: "#b85c3c", color: "#d4a574" }}>
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <h3 className="text-3xl font-primary-black text-white">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
}
