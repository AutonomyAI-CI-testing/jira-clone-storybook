import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Self-contained smoke-test card reproducing the "UI magician Agent" Figma panel.
 * Takes no props; the `dark` class scopes the dark theme tokens to this subtree.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[500px] bg-elevation-surface p-6 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <FaCog aria-hidden className="text-xl text-font-subtle" />
      </div>

      <div className="mt-6 flex min-w-0 items-center gap-2 font-primary-bold text-lg text-font-subtle">
        <FaChevronUp aria-hidden className="shrink-0 text-sm" />
        <span className="truncate">From entire frame to a single design</span>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-2">
          <FaChevronUp aria-hidden className="text-lg" />
          <h2 className="font-primary-bold text-xl">Add New Design</h2>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <label className="font-primary text-base" htmlFor="testcard-token">
              Personal Access Token
            </label>
            <FaInfoCircle aria-hidden className="text-lg" />
          </div>
          <input
            id="testcard-token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxx"
            className="mt-2 w-full rounded-md border border-border bg-background-input p-3 font-[family-name:monospace] text-sm text-font placeholder:text-font-subtlest"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              className="font-primary text-base"
              htmlFor="testcard-design-url"
            >
              Design URL
            </label>
            <FaInfoCircle aria-hidden className="text-lg" />
          </div>
          <input
            id="testcard-design-url"
            type="text"
            placeholder="https://www.figma.com/file/"
            className="mt-2 w-full rounded-md border border-border bg-background-input p-3 font-[family-name:monospace] text-sm text-font placeholder:text-font-subtlest"
          />
        </div>

        <div className="mt-6 flex items-center gap-5">
          <button
            type="button"
            className="rounded bg-[#a83f16] px-6 py-3 font-primary-bold text-base text-white"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded bg-[#a83f16] px-6 py-3 font-primary-bold text-base text-white"
          >
            Prepare
          </button>
        </div>
      </div>

      <h2 className="mt-14 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
