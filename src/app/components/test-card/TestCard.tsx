import React from "react";
import {
  IoSettingsOutline,
  IoChevronUp,
  IoInformationCircleOutline,
} from "react-icons/io5";

const TestCard: React.FC = () => {
  // Figma personal access token placeholder
  const PAT_PLACEHOLDER = "figd_xxxxxxxxxxxxxxxxxx";
  // Figma file URL placeholder
  const DESIGN_URL_PLACEHOLDER = "https://www.figma.com/file/:";

  return (
    <div className="mx-auto max-w-sm rounded-lg bg-[#171813] p-6 text-white shadow-lg">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-gray-100 text-xl font-bold">UI magician Agent</h2>
        <button
          aria-label="Settings"
          className="text-gray-400 transition-colors hover:text-white"
        >
          <IoSettingsOutline className="text-2xl" />
        </button>
      </header>

      <div className="text-orange-400 mb-6 flex items-center">
        <IoChevronUp className="mr-2" aria-hidden="true" />
        <p className="text-sm">From entire frame to a singl...</p>
      </div>

      <hr className="border-gray-700 mb-6 border-t" />

      <section>
        <div className="text-gray-100 mb-4 flex items-center">
          <IoChevronUp className="mr-2" aria-hidden="true" />
          <h3 className="text-lg font-bold">Add New Design</h3>
        </div>

        <div className="mb-4">
          <label
            htmlFor="pat"
            className="text-gray-400 mb-2 block flex items-center text-sm font-semibold"
          >
            Personal Access Token
            <IoInformationCircleOutline
              className="ml-1"
              title="Find your token in Figma settings"
            />
          </label>
          <input
            type="password"
            id="pat"
            placeholder={PAT_PLACEHOLDER}
            className="border-gray-600 text-gray-200 placeholder-gray-500 focus:ring-orange-500/50 w-full rounded-md border bg-[#2c2c2c] p-2 focus:outline-none focus:ring-2"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="designUrl"
            className="text-gray-400 mb-2 block flex items-center text-sm font-semibold"
          >
            Design URL
            <IoInformationCircleOutline
              className="ml-1"
              title="Copy the link to your Figma design"
            />
          </label>
          <input
            type="url"
            id="designUrl"
            placeholder={DESIGN_URL_PLACEHOLDER}
            className="border-gray-600 text-gray-200 placeholder-gray-500 focus:ring-orange-500/50 w-full rounded-md border bg-[#2c2c2c] p-2 focus:outline-none focus:ring-2"
          />
        </div>

        <div className="mb-6 flex justify-between space-x-4">
          <button className="focus:ring-orange-500/50 flex-1 rounded-md bg-[#843a17] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#a04a20] focus:ring-2">
            Awesome
          </button>
          <button className="focus:ring-orange-500/50 flex-1 rounded-md bg-[#843a17] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#a04a20] focus:ring-2">
            Prepare
          </button>
        </div>
      </section>

      <footer className="mt-6">
        <h3 className="text-gray-100 text-lg font-bold">Recent Breakdowns</h3>
      </footer>
    </div>
  );
};

export default TestCard;
