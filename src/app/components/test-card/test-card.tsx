import { useState } from "react";
import cx from "classix";

export const TestCard = (): JSX.Element => {
  // Manage collapsible section visibility
  const [collapsibleOpen, setCollapsibleOpen] = useState(true);
  const [addDesignOpen, setAddDesignOpen] = useState(true);

  return (
    <div id="testElem" className="min-h-screen bg-elevation-surface-sunken p-6">
      <div className="mx-auto max-w-2xl rounded-lg bg-elevation-surface-raised p-6 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-primary-bold text-2xl text-font">
            UI magician Agent
          </h1>
          <button
            className="rounded-full p-2 hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
            aria-label="Settings"
          >
            <span className="text-xl text-font-subtle">⚙️</span>
          </button>
        </div>

        <div className="mb-6 border-b border-border pb-4">
          <button
            onClick={() => setCollapsibleOpen(!collapsibleOpen)}
            className="flex w-full items-center gap-2 rounded p-2 hover:bg-background-neutral-hovered"
          >
            <span className="text-font-subtle">
              {collapsibleOpen ? "▼" : "▶"}
            </span>
            <span className="text-sm text-font-subtle">
              From entire frame to a singl...
            </span>
          </button>
          {collapsibleOpen && (
            <div className="mt-2 ml-6 text-sm text-font-subtlest">
              <p>This is a collapsible section with content.</p>
            </div>
          )}
        </div>

        <div className="mb-8 rounded-lg bg-elevation-surface-sunken p-4">
          <button
            onClick={() => setAddDesignOpen(!addDesignOpen)}
            className="mb-4 flex items-center gap-2 rounded p-2 hover:bg-background-neutral-hovered"
          >
            <span className="text-font-subtle">
              {addDesignOpen ? "▼" : "▶"}
            </span>
            <h2 className="font-primary-bold text-sm text-font">
              Add New Design
            </h2>
          </button>

          {addDesignOpen && (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="token-input"
                  className="mb-2 flex items-center gap-2 text-sm font-primary-bold text-font"
                >
                  <span>Personal Access Token</span>
                  <button
                    className="rounded-full text-font-subtlest hover:text-font-subtle"
                    aria-label="Information"
                  >
                    ⓘ
                  </button>
                </label>
                <input
                  id="token-input"
                  type="password"
                  placeholder="Enter your personal access token"
                  className={cx(
                    "w-full rounded-md border border-border px-3 py-2",
                    "bg-background-input text-font",
                    "placeholder:text-font-subtlest",
                    "hover:bg-background-input-hovered",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
                  )}
                />
              </div>

              <div>
                <label
                  htmlFor="url-input"
                  className="mb-2 flex items-center gap-2 text-sm font-primary-bold text-font"
                >
                  <span>Design URL</span>
                  <button
                    className="rounded-full text-font-subtlest hover:text-font-subtle"
                    aria-label="Information"
                  >
                    ⓘ
                  </button>
                </label>
                <input
                  id="url-input"
                  type="url"
                  placeholder="Enter your design file URL"
                  className={cx(
                    "w-full rounded-md border border-border px-3 py-2",
                    "bg-background-input text-font",
                    "placeholder:text-font-subtlest",
                    "hover:bg-background-input-hovered",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
                  )}
                />
              </div>

              <div className="mt-6 flex gap-4 pt-2">
                <button
                  className={cx(
                    "flex-1 rounded-md px-4 py-2",
                    "font-primary-bold text-sm text-font-inverse",
                    "bg-Orange700 hover:bg-Orange800 active:bg-Orange900",
                    "transition-colors duration-150"
                  )}
                >
                  Awesome
                </button>
                <button
                  className={cx(
                    "flex-1 rounded-md px-4 py-2",
                    "font-primary-bold text-sm text-font-inverse",
                    "bg-Orange600 hover:bg-Orange700 active:bg-Orange800",
                    "transition-colors duration-150"
                  )}
                >
                  Prepare
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-border pt-4">
          <h3 className="text-sm font-primary-bold text-font">
            Recent Breakdowns
          </h3>
          <p className="mt-2 text-xs text-font-subtlest">No recent breakdowns yet</p>
        </div>
      </div>
    </div>
  );
};
