import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Self-contained recreation of the "UI magician Agent" panel.
 * Takes no props and holds no state — it renders the same markup everywhere.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] shrink-0 rounded-md bg-elevation-surface-sunken p-6 font-primary text-font"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-xl text-font">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="rounded-full p-1 text-font hover:bg-background-neutral-hovered"
        >
          <HiOutlineCog className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-7 flex items-center gap-2 text-font-subtle">
        <HiOutlineChevronUp className="h-4 w-4 shrink-0" />
        <span className="truncate font-primary-light text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <HiOutlineChevronUp className="h-5 w-5 shrink-0 text-font" />
        <h2 className="font-primary-bold text-xl text-font">Add New Design</h2>
      </div>

      <div className="mt-7">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-access-token"
            className="font-primary text-sm text-font"
          >
            Personal Access Token
          </label>
          <HiOutlineInformationCircle className="h-4 w-4 shrink-0 text-font" />
        </div>
        <input
          id="test-card-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full rounded-sm bg-background-input px-3 py-3 font-primary-light text-sm text-font outline outline-1 outline-border-bold placeholder:text-font-subtlest"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-design-url"
            className="font-primary text-sm text-font"
          >
            Design URL
          </label>
          <HiOutlineInformationCircle className="h-4 w-4 shrink-0 text-font" />
        </div>
        <input
          id="test-card-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-3 w-full rounded-sm bg-background-input px-3 py-3 font-primary-light text-sm text-font outline outline-1 outline-border-bold placeholder:text-font-subtlest"
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button
          type="button"
          className="rounded bg-[#974f0c] px-7 py-3 font-primary text-sm text-white hover:bg-[#b65c02] active:bg-[#5f3811]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#974f0c] px-7 py-3 font-primary text-sm text-white hover:bg-[#b65c02] active:bg-[#5f3811]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-12 font-primary-bold text-xl text-font">
        Recent Breakdowns
      </h2>
    </div>
  );
};
