import cx from "classix";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        "min-h-screen bg-black p-8 flex items-start justify-center"
      )}
    >
      <div
        className={cx(
          "w-64 bg-black border border-gray-700 rounded-lg overflow-hidden"
        )}
      >
        {/* Header Section */}
        <div className={cx("border-b border-gray-700 p-4")}>
          <div className={cx("flex items-center justify-between mb-3")}>
            <h1
              className={cx(
                "text-xs font-semibold text-gray-400",
                "tracking-wide"
              )}
            >
              UI magician Agent
            </h1>
            <span className={cx("text-gray-500 text-sm cursor-pointer")}>
              ⚙
            </span>
          </div>

          {/* Collapsible Section 1 */}
          <div className={cx("flex items-center gap-2 cursor-pointer mb-2")}>
            <span className={cx("text-gray-500 text-xs")}>^</span>
            <span
              className={cx(
                "text-xs font-semibold text-gray-500",
                "truncate"
              )}
            >
              From entire frame to a singl...
            </span>
          </div>
        </div>

        {/* Add New Design Section */}
        <div className={cx("border-b border-gray-700 p-4")}>
          <div className={cx("flex items-center gap-2 cursor-pointer")}>
            <span className={cx("text-gray-500 text-xs")}>^</span>
            <span className={cx("text-xs font-semibold text-gray-400")}>
              Add New Design
            </span>
          </div>
        </div>

        {/* Form Section */}
        <div className={cx("border-b border-gray-700 p-4")}>
          {/* Personal Access Token Input */}
          <div className={cx("mb-4")}>
            <label
              className={cx(
                "block text-xs font-semibold text-gray-400 mb-2"
              )}
            >
              Personal Access Token
            </label>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className={cx(
                "w-full bg-black border border-gray-700 rounded px-3 py-2",
                "text-xs text-gray-500 font-semibold",
                "placeholder-gray-700",
                "outline-none focus:border-gray-500"
              )}
              readOnly
            />
          </div>

          {/* Design URL Input */}
          <div className={cx("mb-4")}>
            <div className={cx("flex items-center gap-2 mb-2")}>
              <label
                className={cx(
                  "block text-xs font-semibold text-gray-400"
                )}
              >
                Design URL
              </label>
              <span className={cx("text-gray-500 text-sm cursor-pointer")}>
                ℹ
              </span>
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/..."
              className={cx(
                "w-full bg-black border border-gray-700 rounded px-3 py-2",
                "text-xs text-gray-500 font-semibold",
                "placeholder-gray-700",
                "outline-none focus:border-gray-500"
              )}
              readOnly
            />
          </div>

          {/* Action Buttons */}
          <div className={cx("flex gap-2")}>
            <button
              className={cx(
                "flex-1 bg-orange-700 text-gray-400 text-xs font-semibold",
                "py-2 px-3 rounded hover:bg-orange-600 active:bg-orange-800",
                "transition-colors"
              )}
            >
              Awesome
            </button>
            <button
              className={cx(
                "flex-1 bg-orange-700 text-gray-400 text-xs font-semibold",
                "py-2 px-3 rounded hover:bg-orange-600 active:bg-orange-800",
                "transition-colors"
              )}
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns Section */}
        <div className={cx("p-4")}>
          <h2
            className={cx(
              "text-xs font-semibold text-gray-400",
              "tracking-wide"
            )}
          >
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
