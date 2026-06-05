import { useState } from "react";
import cx from "classix";

export const TestCard = (): JSX.Element => {
  const [agentExpanded, setAgentExpanded] = useState(true);
  const [designExpanded, setDesignExpanded] = useState(true);
  const [token, setToken] = useState("figd_xxxxxxxxxxxxxxxxxx");
  const [url, setUrl] = useState("https://www.figma.com/file/:");

  return (
    <div
      id="testElem"
      className="flex w-full max-w-sm flex-col gap-5 bg-black p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1
          className="font-primary text-[13.5px] font-semibold"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </h1>
        <button
          className="flex h-6 w-6 items-center justify-center rounded hover:bg-gray-800"
          aria-label="Settings"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24" />
          </svg>
        </button>
      </div>

      {/* Agent Description Section */}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => setAgentExpanded(!agentExpanded)}
          className="flex items-center gap-2 text-left"
        >
          <span
            className={cx(
              "flex h-4 w-4 items-center justify-center transition-transform",
              agentExpanded && "rotate-180"
            )}
          >
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-500"
            >
              <path d="M1 1l3 3 3-3" />
            </svg>
          </span>
          <span
            className="font-primary text-[11.5px] font-semibold"
            style={{ color: "#8b9291" }}
          >
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="flex flex-col gap-3">
        <button
          onClick={() => setDesignExpanded(!designExpanded)}
          className="flex items-center gap-2 text-left"
        >
          <span
            className={cx(
              "flex h-4 w-4 items-center justify-center transition-transform",
              designExpanded && "rotate-180"
            )}
          >
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-500"
            >
              <path d="M1 1l3 3 3-3" />
            </svg>
          </span>
          <span
            className="font-primary text-[13.5px] font-semibold"
            style={{ color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </button>

        {designExpanded && (
          <div className="flex flex-col gap-4">
            {/* Personal Access Token Field */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label
                  className="font-primary text-[11.5px] font-semibold"
                  style={{ color: "#a4a4a3" }}
                >
                  Personal Access Token
                </label>
                <button
                  className="flex h-4 w-4 items-center justify-center rounded-full border"
                  style={{ borderColor: "#929291" }}
                  aria-label="Info"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gray-500"
                  >
                    <circle cx="8" cy="8" r="7" />
                    <text
                      x="8"
                      y="10"
                      textAnchor="middle"
                      fontSize="8"
                      fill="currentColor"
                    >
                      i
                    </text>
                  </svg>
                </button>
              </div>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="border px-3 py-2 text-[11.5px]"
                style={{
                  backgroundColor: "#272822",
                  borderColor: "#a5adad",
                  color: "#737470",
                }}
              />
            </div>

            {/* Design URL Field */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <label
                  className="font-primary text-[11.5px] font-semibold"
                  style={{ color: "#a3a3a2" }}
                >
                  Design URL
                </label>
                <button
                  className="flex h-4 w-4 items-center justify-center rounded-full border"
                  style={{ borderColor: "#929291" }}
                  aria-label="Info"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gray-500"
                  >
                    <circle cx="8" cy="8" r="7" />
                    <text
                      x="8"
                      y="10"
                      textAnchor="middle"
                      fontSize="8"
                      fill="currentColor"
                    >
                      i
                    </text>
                  </svg>
                </button>
              </div>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border px-3 py-2 text-[11.5px]"
                style={{
                  backgroundColor: "#272822",
                  borderColor: "#929291",
                  color: "#71726e",
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                className="flex flex-1 items-center justify-center rounded py-2 text-[11.5px] font-semibold transition-colors"
                style={{
                  backgroundColor: "#843a17",
                  color: "#8c8078",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#9a4520";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#843a17";
                }}
              >
                Awesome
              </button>
              <button
                className="flex flex-1 items-center justify-center rounded py-2 text-[11.5px] font-semibold transition-colors"
                style={{
                  backgroundColor: "#843a17",
                  color: "#8c8078",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#9a4520";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#843a17";
                }}
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section */}
      <div className="pt-4">
        <h2
          className="font-primary text-[13.5px] font-semibold"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
