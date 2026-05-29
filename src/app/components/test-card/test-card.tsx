import { useState } from "react";
import cx from "classix";

export const TestCard = (): JSX.Element => {
  const [token, setToken] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  return (
    <div id="testElem" className="min-h-screen bg-black p-4">
      <div className="mx-auto max-w-md space-y-4 rounded-lg bg-[#1a1a1a] p-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#333333] pb-4">
          <h1 className="text-sm font-semibold text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <button
            className="text-lg text-[#b5b5b5] hover:text-white"
            aria-label="Settings"
          >
            ⚙️
          </button>
        </div>

        {/* Collapsible Section */}
        <div className="border-b border-[#333333] pb-4">
          <button className="flex w-full items-center justify-between py-2 text-left">
            <span className="text-xs font-semibold text-[#b5b5b5]">
              From entire frame to a singl...
            </span>
            <span className="text-[#b5b5b5]">▼</span>
          </button>
        </div>

        {/* Add New Design Section */}
        <div className="flex items-center justify-between py-2">
          <span className="text-xs font-semibold text-[#b5b5b5]">
            Add New Design
          </span>
          <span className="text-[#b5b5b5]">›</span>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Personal Access Token Field */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-[#a3a3a2] pb-2">
              Personal Access Token
              <span className="text-[#b5b5b5]">ℹ️</span>
            </label>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Paste your token here"
              className={cx(
                "w-full rounded border border-[#333333] bg-[#0a0a0a]",
                "px-3 py-2 text-xs text-[#737470]",
                "placeholder-[#4a4a49]",
                "focus:outline-none focus:border-[#555555]"
              )}
            />
          </div>

          {/* Design URL Field */}
          <div>
            <label className="flex items-center gap-1.5 text-xs font-semibold text-[#a3a3a2] pb-2">
              Design URL
              <span className="text-[#b5b5b5]">ℹ️</span>
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste your design link here"
              className={cx(
                "w-full rounded border border-[#333333] bg-[#0a0a0a]",
                "px-3 py-2 text-xs text-[#737470]",
                "placeholder-[#4a4a49]",
                "focus:outline-none focus:border-[#555555]"
              )}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button className="flex-1 rounded bg-[#8b6f47] px-3 py-2 text-xs font-semibold text-[#c4b5a0] hover:bg-[#9d7d52] active:bg-[#7a6140]">
            Awesome
          </button>
          <button className="flex-1 rounded bg-[#8b6f47] px-3 py-2 text-xs font-semibold text-[#c4b5a0] hover:bg-[#9d7d52] active:bg-[#7a6140]">
            Prepare
          </button>
        </div>

        {/* Footer Section */}
        <div className="border-t border-[#333333] pt-4">
          <h3 className="text-xs font-semibold text-[#b0b0b0]">
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
