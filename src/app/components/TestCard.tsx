import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

import { Button } from "@app/components/button/button";

/**
 * Static, self-contained panel used as a rendering smoke test.
 * It takes no props and holds no state.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] rounded-md bg-elevation-surface p-8 text-font"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-xl">UI magician Agent</h1>
        <FiSettings className="h-6 w-6 shrink-0" aria-hidden />
      </div>

      {/* Collapsed row */}
      <div className="mt-6 flex items-center gap-3 text-font-subtle">
        <FiChevronUp className="h-5 w-5 shrink-0" aria-hidden />
        <span className="truncate font-primary-light text-base">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="mt-24 flex items-center gap-3">
        <FiChevronUp className="h-6 w-6 shrink-0" aria-hidden />
        <h2 className="font-primary-black text-xl">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-token" className="font-primary text-base">
            Personal Access Token
          </label>
          <FiInfo className="h-5 w-5 shrink-0 text-font-subtle" aria-hidden />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full rounded-md border border-border-bold bg-background-input p-3 font-primary-light text-base placeholder:text-font-subtlest"
        />
      </div>

      {/* Design URL */}
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-url" className="font-primary text-base">
            Design URL
          </label>
          <FiInfo className="h-5 w-5 shrink-0 text-font-subtle" aria-hidden />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-3 w-full rounded-md border border-border-bold bg-background-input p-3 font-primary-light text-base placeholder:text-font-subtlest"
        />
      </div>

      {/* Actions */}
      <div className="mt-8 flex items-center gap-8">
        <Button color="danger" className="w-[172px] py-3 text-base">
          Awesome
        </Button>
        <Button color="danger" className="w-[172px] py-3 text-base">
          Prepare
        </Button>
      </div>

      {/* Section heading */}
      <h2 className="mt-24 font-primary-black text-xl">Recent Breakdowns</h2>
    </div>
  );
};
