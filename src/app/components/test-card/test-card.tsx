import { useState } from "react";
import cx from "classix";

export const TestCard = (): JSX.Element => {
  const [token, setToken] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleAwesome = (): void => {
    // Action handler for Awesome button
  };

  const handlePrepare = (): void => {
    // Action handler for Prepare button
  };

  return (
    <div className="w-full max-w-[500px] rounded-md bg-black p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <button
          className="text-lg text-[#b2b2b1] hover:text-[#c0c0bf]"
          title="Settings"
        >
          ⚙
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="mb-6">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex w-full items-center justify-between font-primary text-[11.5px] text-[#8b9291]"
        >
          <span>From entire frame to a singl...</span>
          <span className="text-[12px]">{isCollapsed ? "▼" : "^"}</span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <h3 className="flex items-center justify-between font-primary-bold text-[13.5px] text-[#a3a3a2]">
          <span>Add New Design</span>
          <span className="text-[14px]">^</span>
        </h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label className="mb-2 flex items-center font-primary text-[11.5px] text-[#b0b0b0]">
          <span>Personal Access Token</span>
          <span className="ml-2 text-[12px]">ⓘ</span>
        </label>
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className={cx(
            "w-full rounded border px-3 py-2 text-[11.5px]",
            "border-[#404040] bg-[#1a1a1a] text-[#9a9a9a] placeholder-[#5a5a5a]",
            "focus-visible:outline-blue-500 focus-visible:outline-offset-0"
          )}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label className="mb-2 flex items-center font-primary text-[11.5px] text-[#b0b0b0]">
          <span>Design URL</span>
          <span className="ml-2 text-[12px]">ⓘ</span>
        </label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.figma.com/file/:"
          className={cx(
            "w-full rounded border px-3 py-2 text-[11.5px]",
            "border-[#404040] bg-[#1a1a1a] text-[#9a9a9a] placeholder-[#5a5a5a]",
            "focus-visible:outline-blue-500 focus-visible:outline-offset-0"
          )}
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex gap-2">
        <button
          onClick={handleAwesome}
          className={cx(
            "flex-1 rounded px-3 py-1.5 font-primary text-[11.5px]",
            "bg-[#a0634d] text-[#b5b5b5] hover:bg-[#b07360]",
            "transition-colors active:bg-[#8f5a45]"
          )}
        >
          Awesome
        </button>
        <button
          onClick={handlePrepare}
          className={cx(
            "flex-1 rounded px-3 py-1.5 font-primary text-[11.5px]",
            "bg-[#a0634d] text-[#b5b5b5] hover:bg-[#b07360]",
            "transition-colors active:bg-[#8f5a45]"
          )}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h4 className="font-primary-bold text-[13.5px] text-[#b0b0b0]">
          Recent Breakdowns
        </h4>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center text-[11.5px] text-[#8b9291]">
        © AutonomyAI
      </div>
    </div>
  );
};
