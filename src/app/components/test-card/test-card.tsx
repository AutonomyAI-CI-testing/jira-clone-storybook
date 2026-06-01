export const TestCard = () => {
  return (
    <div id="testElem" className="min-h-screen bg-elevation-surface-sunken p-6">
      <div className="mx-auto max-w-2xl rounded-lg bg-elevation-surface-raised p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-font">UI magician Agent</h1>
          <button className="text-font-subtle hover:text-font">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>

        {/* Collapsible Section */}
        <div className="mb-6 flex items-start justify-between rounded border border-border p-4">
          <div className="flex-1">
            <p className="text-sm text-font-subtle">
              From entire frame to a singl...
            </p>
          </div>
          <button className="ml-4 text-font-subtle hover:text-font">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>

        {/* Add New Design Section */}
        <div className="mb-6 flex items-center justify-between rounded border border-border p-4">
          <h3 className="text-sm font-medium text-font">Add New Design</h3>
          <button className="text-font-subtle hover:text-font">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7m0 0l-7 7m7-7H5"
              />
            </svg>
          </button>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-6">
          <label className="mb-2 flex items-center text-xs font-medium text-font-subtle">
            Personal Access Token
            <button className="ml-2 text-font-subtle hover:text-font">
              <svg
                className="h-3 w-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </button>
          </label>
          <input
            type="text"
            placeholder="Enter your token"
            className="w-full rounded border border-border bg-background-input px-3 py-2 text-sm text-font-subtle placeholder-font-subtlest focus:border-border-focused focus:outline-none"
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-8">
          <label className="mb-2 flex items-center text-xs font-medium text-font-subtle">
            Design URL
            <button className="ml-2 text-font-subtle hover:text-font">
              <svg
                className="h-3 w-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </button>
          </label>
          <input
            type="text"
            placeholder="Enter design URL"
            className="w-full rounded border border-border bg-background-input px-3 py-2 text-sm text-font-subtle placeholder-font-subtlest focus:border-border-focused focus:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex gap-3">
          <button className="flex-1 rounded bg-background-brand-bold px-4 py-2 text-sm font-medium text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed">
            Awesome
          </button>
          <button className="flex-1 rounded bg-background-neutral-bold px-4 py-2 text-sm font-medium text-font-inverse hover:bg-background-neutral-bold-hovered active:bg-background-neutral-bold-pressed">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section */}
        <div>
          <h2 className="text-sm font-semibold text-font-subtle">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
