import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button";

/**
 * Static replica of the "UI magician Agent" panel from the attached Figma frame.
 * Smoke test only: no props, no state, no data, and spacing/colour/type are
 * approximations drawn from the design system's semantic tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col rounded-md bg-elevation-surface-raised p-10 shadow-sm"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-black text-2xl text-font">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Settings"
          className="flex cursor-pointer items-center justify-center rounded p-1 text-icon-subtle hover:bg-background-neutral hover:text-icon"
        >
          <FiSettings size={24} />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-2">
        <FiChevronUp size={20} className="shrink-0 text-icon-subtle" />
        <span className="truncate font-primary-light text-sm text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-36 flex items-center gap-3 pl-6">
        <FiChevronUp size={22} className="shrink-0 text-icon" />
        <h3 className="font-primary-black text-2xl text-font">
          Add New Design
        </h3>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-token"
            className="font-primary text-xs text-font-subtle"
          >
            Personal Access Token
          </label>
          <FiInfo
            role="img"
            aria-label="More information about the personal access token"
            size={16}
            className="shrink-0 text-icon-subtle"
          />
        </div>
        <input
          id="test-card-token"
          placeholder="figd_xxxxxxxxxxxxxxxx"
          className="mt-6 w-full rounded-md border-none bg-background-input px-4 py-4 font-primary-light text-sm text-font outline-2 placeholder:text-font-subtlest hover:bg-background-input-hovered focus-visible:bg-background-input-pressed"
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-design-url"
            className="font-primary text-xs text-font-subtle"
          >
            Design URL
          </label>
          <FiInfo
            role="img"
            aria-label="More information about the design URL"
            size={16}
            className="shrink-0 text-icon-subtle"
          />
        </div>
        <input
          id="test-card-design-url"
          placeholder="https://www.figma.com/file/"
          className="mt-6 w-full rounded-md border-none bg-background-input px-4 py-4 font-primary-light text-sm text-font outline-2 placeholder:text-font-subtlest hover:bg-background-input-hovered focus-visible:bg-background-input-pressed"
        />
      </div>

      <div className="mt-10 flex justify-end gap-8">
        <Button color="primary" variant="contained" size="lg">
          Awesome
        </Button>
        <Button color="primary" variant="contained" size="lg">
          Prepare
        </Button>
      </div>

      <h3 className="mt-24 font-primary-black text-2xl text-font">
        Recent Breakdowns
      </h3>
    </div>
  );
};
