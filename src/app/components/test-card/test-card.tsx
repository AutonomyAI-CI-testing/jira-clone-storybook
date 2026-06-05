import cx from "classix";
import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        "w-full min-h-screen bg-dark",
        "bg-gradient-to-br from-slate-900 to-slate-950",
        "text-gray-100 p-8"
      )}
    >
      <div className={cx("max-w-2xl mx-auto")}>
        {/* Header Section */}
        <div className={cx("mb-12 flex items-center justify-between")}>
          <h1 className={cx("text-3xl font-bold text-white")}>
            UI magician Agent
          </h1>
          <div className={cx("w-8 h-8 rounded-full border-2 border-gray-400")}>
            <svg
              className={cx("w-full h-full p-1")}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
        </div>

        {/* Subtitle Section */}
        <div className={cx("mb-8 flex items-center gap-2")}>
          <span className={cx("text-gray-400 text-lg")}>⌃</span>
          <p className={cx("text-gray-400 text-lg")}>
            From entire frame to a singl...
          </p>
        </div>

        {/* Add New Design Section */}
        <div className={cx("mb-12")}>
          <div className={cx("flex items-center gap-2 mb-6")}>
            <span className={cx("text-gray-400 text-xl")}>⌃</span>
            <h2 className={cx("text-2xl font-semibold text-gray-200")}>
              Add New Design
            </h2>
          </div>

          {/* Form Container */}
          <div className={cx("space-y-6")}>
            {/* Personal Access Token Field */}
            <div className={cx("space-y-2")}>
              <label
                className={cx("flex items-center gap-2 text-gray-300 font-medium")}
              >
                Personal Access Token
                <span
                  className={cx(
                    "w-5 h-5 rounded-full border border-gray-500",
                    "flex items-center justify-center text-gray-400 text-xs"
                  )}
                >
                  ⓘ
                </span>
              </label>
              <input
                type="text"
                placeholder="figd_xxxxxxxxxxxxxx"
                className={cx(
                  "w-full px-4 py-3 rounded bg-slate-800 border border-slate-600",
                  "text-gray-300 placeholder-gray-500",
                  "focus:outline-none focus:ring-2 focus:ring-orange-600",
                  "font-mono text-sm"
                )}
              />
            </div>

            {/* Design URL Field */}
            <div className={cx("space-y-2")}>
              <label
                className={cx("flex items-center gap-2 text-gray-300 font-medium")}
              >
                Design URL
                <span
                  className={cx(
                    "w-5 h-5 rounded-full border border-gray-500",
                    "flex items-center justify-center text-gray-400 text-xs"
                  )}
                >
                  ⓘ
                </span>
              </label>
              <input
                type="url"
                placeholder="https://www.figma.com/file/:"
                className={cx(
                  "w-full px-4 py-3 rounded bg-slate-800 border border-slate-600",
                  "text-gray-300 placeholder-gray-500",
                  "focus:outline-none focus:ring-2 focus:ring-orange-600",
                  "font-mono text-sm"
                )}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className={cx("flex gap-4 mt-8")}>
            <button
              className={cx(
                "flex-1 px-6 py-3 rounded font-semibold",
                "bg-orange-700 hover:bg-orange-600 active:bg-orange-800",
                "text-white transition-colors",
                "text-lg"
              )}
            >
              Awesome
            </button>
            <button
              className={cx(
                "flex-1 px-6 py-3 rounded font-semibold",
                "bg-orange-700 hover:bg-orange-600 active:bg-orange-800",
                "text-white transition-colors",
                "text-lg"
              )}
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns Section */}
        <div className={cx("mt-16")}>
          <h3 className={cx("text-2xl font-semibold text-gray-200")}>
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
