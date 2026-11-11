import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <FiSettings aria-hidden size={26} className="text-icon" />
    </div>

    {/* Collapsed row */}
    <div className="mt-8 flex items-center gap-3 text-font-subtle">
      <FiChevronUp aria-hidden size={22} />
      <span className="min-w-0 truncate text-base">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <h2 className="mt-24 flex items-center gap-3 font-primary-black text-2xl">
      <FiChevronUp aria-hidden size={22} />
      Add New Design
    </h2>

    {/* Personal Access Token */}
    <div className="mt-12">
      <div className="flex items-center gap-2 text-font-subtle">
        <label htmlFor="personal-access-token" className="text-base">
          Personal Access Token
        </label>
        <FiInfo aria-hidden size={20} />
      </div>
      <input
        id="personal-access-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className="mt-4 w-full rounded border border-border-bold bg-background-input px-4 py-4 text-base text-font placeholder:text-font-subtle"
      />
    </div>

    {/* Design URL */}
    <div className="mt-6">
      <div className="flex items-center gap-2 text-font-subtle">
        <label htmlFor="design-url" className="text-base">
          Design URL
        </label>
        <FiInfo aria-hidden size={20} />
      </div>
      <input
        id="design-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-4 w-full rounded border border-border-bold bg-background-input px-4 py-4 text-base text-font placeholder:text-font-subtle"
      />
    </div>

    {/* Actions */}
    <div className="mt-10 flex gap-8">
      <button
        type="button"
        className="flex-1 cursor-pointer rounded-lg bg-[#8f3f22] px-6 py-5 text-base"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 cursor-pointer rounded-lg bg-[#8f3f22] px-6 py-5 text-base"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-28 font-primary-black text-2xl text-font-subtle">
      Recent Breakdowns
    </h2>
  </div>
);
