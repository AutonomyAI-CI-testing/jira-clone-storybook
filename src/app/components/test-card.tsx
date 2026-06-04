import { IoSettings } from "react-icons/io5";
import { MdInfo } from "react-icons/md";
import { LiaChevronUpSolid as LiChevronUp } from "react-icons/lia";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen bg-neutral-900 p-8 text-neutral-300">
      <div className="mx-auto max-w-2xl">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-neutral-100">
            UI magician Agent
          </h1>
          <IoSettings className="text-2xl text-neutral-400" />
        </div>

        {/* Subtitle/Description Section */}
        <div className="mb-8 flex items-center gap-2 text-neutral-500">
          <LiChevronUp className="text-xl" />
          <span className="text-base">From entire frame to a singl...</span>
        </div>

        {/* Collapsible Section */}
        <div className="mb-8 flex items-center gap-2 text-lg text-neutral-400">
          <LiChevronUp className="text-xl" />
          <span className="font-medium">Add New Design</span>
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          {/* Personal Access Token Field */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label className="text-base text-neutral-300">
                Personal Access Token
              </label>
              <MdInfo className="text-lg text-neutral-500" />
            </div>
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
              className="w-full border border-neutral-600 bg-neutral-800 px-4 py-3 text-neutral-400 placeholder-neutral-600"
              readOnly
            />
          </div>

          {/* Design URL Field */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label className="text-base text-neutral-300">Design URL</label>
              <MdInfo className="text-lg text-neutral-500" />
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full border border-neutral-600 bg-neutral-800 px-4 py-3 text-neutral-400 placeholder-neutral-600"
              readOnly
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 rounded bg-orange-700 px-6 py-3 text-lg font-medium text-orange-200 hover:bg-orange-600 active:bg-orange-800">
              Awesome
            </button>
            <button className="flex-1 rounded bg-orange-700 px-6 py-3 text-lg font-medium text-orange-200 hover:bg-orange-600 active:bg-orange-800">
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="mt-12 text-xl font-medium text-neutral-300">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};
