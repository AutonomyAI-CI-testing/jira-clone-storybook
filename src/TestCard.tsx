import React from "react";

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-semibold">UI magician Agent</h2>
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37zm3.35.03L12 3.5l1.675.817zM12 20.5l-1.675-.817zM4.317 13.675L3.5 12l.817-1.675zM20.5 12l-.817-1.675zM12 11a1 1 0 100 2 1 1 0 000-2z"
            ></path>
          </svg>
        </div>

        {/* Collapsed Row */}
        <div className="flex items-center text-gray-400 text-sm mb-6">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
          From entire frame to a single component
        </div>

        {/* Add New Design Section */}
        <div className="flex items-center text-white text-md font-semibold mb-4">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
          Add New Design
        </div>

        {/* Personal Access Token Field */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-semibold mb-2 flex items-center">
            Personal Access Token
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-gray-300 border border-gray-600 rounded"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
            readOnly
          />
        </div>

        {/* Design URL Field */}
        <div className="mb-6">
          <label className="block text-gray-400 text-sm font-semibold mb-2 flex items-center">
            Design URL
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </label>
          <input
            type="text"
            className="w-full p-2 bg-gray-700 text-gray-300 border border-gray-600 rounded"
            placeholder="https://www.figma.com/file/"
            readOnly
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between space-x-4 mb-8">
          <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Awesome
          </button>
          <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Footer */}
        <h3 className="text-white text-md font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
