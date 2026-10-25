import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";
import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[460px] rounded-md bg-elevation-surface p-6 font-primary text-font shadow-sm"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-lg">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Open settings"
          className="flex items-center justify-center rounded p-1 text-icon-subtle duration-100 ease-linear hover:bg-background-neutral hover:text-icon"
        >
          <MdSettings size={20} />
        </button>
      </div>

      <div className="mt-3 flex items-center gap-1 text-font-subtlest">
        <MdKeyboardArrowUp size={18} aria-hidden />
        <p className="truncate font-primary-light text-sm">
          From entire frame to a single component
        </p>
      </div>

      <div className="mt-20 flex items-center gap-1">
        <MdKeyboardArrowUp size={22} aria-hidden />
        <h3 className="font-primary-black text-2xl">Add New Design</h3>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="testElem-token"
            className="flex items-center gap-2 font-primary-light text-sm text-font-subtle"
          >
            Personal Access Token
            <MdInfoOutline size={16} aria-hidden />
          </label>
          <input
            id="testElem-token"
            name="personalAccessToken"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-border-bold bg-background-input p-3 font-primary-light text-sm text-font placeholder:text-font-subtlest"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="testElem-url"
            className="flex items-center gap-2 font-primary-light text-sm text-font-subtle"
          >
            Design URL
            <MdInfoOutline size={16} aria-hidden />
          </label>
          <input
            id="testElem-url"
            name="designUrl"
            placeholder="https://www.figma.com/file/"
            className="w-full rounded border border-border-bold bg-background-input p-3 font-primary-light text-sm text-font placeholder:text-font-subtlest"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <Button type="button" className="flex-1 py-3">
          Awesome
        </Button>
        <Button
          type="button"
          color="neutral"
          variant="subtlest"
          className="flex-1 py-3"
        >
          Prepare
        </Button>
      </div>

      <h3 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h3>
    </div>
  );
};
