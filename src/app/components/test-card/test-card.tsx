import cx from "classix";

// Reusable class combinations
const INPUT_CLASSES = cx(
  "w-full px-4 py-3 rounded bg-slate-800 border border-slate-600",
  "text-gray-300 placeholder-gray-500",
  "focus:outline-none focus:ring-2 focus:ring-orange-600",
  "font-mono text-sm"
);

const BUTTON_CLASSES = cx(
  "flex-1 px-6 py-3 rounded font-semibold",
  "bg-orange-700 hover:bg-orange-600 active:bg-orange-800",
  "text-white transition-colors",
  "text-lg"
);

const HELP_ICON_CLASSES = cx(
  "w-5 h-5 rounded-full border border-gray-500",
  "flex items-center justify-center text-gray-400 text-xs"
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        "bg-dark min-h-screen w-full",
        "from-slate-900 to-slate-950 bg-gradient-to-br",
        "text-gray-100 p-8"
      )}
    >
      <div className={cx("mx-auto max-w-2xl")}>
        {/* Header Section */}
        <div className={cx("mb-12 flex items-center justify-between")}>
          <h1 className={cx("text-3xl font-bold text-white")}>
            UI magician Agent
          </h1>
          <div className={cx("border-gray-400 h-8 w-8 rounded-full border-2")}>
            <svg
              className={cx("h-full w-full p-1")}
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
          <div className={cx("mb-6 flex items-center gap-2")}>
            <span className={cx("text-gray-400 text-xl")}>⌃</span>
            <h2 className={cx("text-gray-200 text-2xl font-semibold")}>
              Add New Design
            </h2>
          </div>

          {/* Form Container */}
          <div className={cx("space-y-6")}>
            {/* Personal Access Token Field */}
            <div className={cx("space-y-2")}>
              <label
                className={cx(
                  "text-gray-300 flex items-center gap-2 font-medium"
                )}
              >
                Personal Access Token
                <span className={HELP_ICON_CLASSES}>ⓘ</span>
              </label>
              <input
                type="text"
                placeholder="figd_xxxxxxxxxxxxxx"
                className={INPUT_CLASSES}
              />
            </div>

            {/* Design URL Field */}
            <div className={cx("space-y-2")}>
              <label
                className={cx(
                  "text-gray-300 flex items-center gap-2 font-medium"
                )}
              >
                Design URL
                <span className={HELP_ICON_CLASSES}>ⓘ</span>
              </label>
              <input
                type="url"
                placeholder="https://www.figma.com/file/:"
                className={INPUT_CLASSES}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className={cx("mt-8 flex gap-4")}>
            <button className={BUTTON_CLASSES}>Awesome</button>
            <button className={BUTTON_CLASSES}>Prepare</button>
          </div>
        </div>

        {/* Recent Breakdowns Section */}
        <div className={cx("mt-16")}>
          <h3 className={cx("text-gray-200 text-2xl font-semibold")}>
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
