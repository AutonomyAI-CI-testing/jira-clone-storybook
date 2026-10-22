import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { Button } from "@app/components/button";

/**
 * Static reproduction of the "UI magician Agent" panel.
 * Self-contained: no props, no state, no data.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark flex w-[508px] flex-col bg-elevation-surface p-9 text-font"
    >
      <header className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer rounded p-1 text-icon-subtle hover:bg-background-neutral-hovered"
        >
          <IoSettingsOutline size={26} />
        </button>
      </header>

      <div className="mt-4 flex items-center gap-2 text-font-subtle">
        <IoChevronUp size={22} className="shrink-0" />
        <span className="truncate font-primary-light text-base">
          From entire frame to a singl...
        </span>
      </div>

      <section className="mt-44 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <IoChevronUp size={24} className="shrink-0" />
          <h2 className="font-primary-bold text-xl">Add New Design</h2>
        </div>

        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-3 font-primary-light text-base text-font-subtle">
            Personal Access Token
            <IoInformationCircleOutline
              size={20}
              className="shrink-0 text-icon-subtle"
            />
          </span>
          <input
            type="text"
            defaultValue=""
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
            className="rounded-md bg-background-input p-4 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-3 font-primary-light text-base text-font-subtle">
            Design URL
            <IoInformationCircleOutline
              size={20}
              className="shrink-0 text-icon-subtle"
            />
          </span>
          <input
            type="text"
            defaultValue=""
            placeholder="https://www.figma.com/file/"
            className="rounded-md bg-background-input p-4 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
          />
        </label>

        <div className="mt-4 flex gap-4">
          <Button className="flex-1">Awesome</Button>
          <Button className="flex-1">Prepare</Button>
        </div>
      </section>

      <h2 className="mt-32 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
