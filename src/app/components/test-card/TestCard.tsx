import { HiChevronUp, HiCog, HiOutlineInformationCircle } from "react-icons/hi";
import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface-sunken px-10 py-8 font-primary-light text-font"
  >
    <header className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center rounded p-1 text-icon hover:bg-background-neutral"
      >
        <HiCog size={24} aria-hidden />
      </button>
    </header>

    <div className="mt-12 flex items-center gap-3 text-font-subtle">
      <HiChevronUp size={20} aria-hidden />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <HiChevronUp size={24} aria-hidden />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <div className="mt-20">
      <div className="flex items-center gap-2">
        <label htmlFor="personal-access-token" className="font-primary-bold">
          Personal Access Token
        </label>
        <HiOutlineInformationCircle
          size={18}
          className="text-icon"
          aria-hidden
        />
      </div>
      <input
        id="personal-access-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxxx"
        className="mt-8 w-full rounded-md bg-background-input p-3 text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-2">
        <label htmlFor="design-url" className="font-primary-bold">
          Design URL
        </label>
        <HiOutlineInformationCircle
          size={18}
          className="text-icon"
          aria-hidden
        />
      </div>
      <input
        id="design-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-8 w-full rounded-md bg-background-input p-3 text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-12 flex gap-10">
      <Button color="primary" size="lg" className="font-primary-bold">
        Awesome
      </Button>
      <Button color="primary" size="lg" className="font-primary-bold">
        Prepare
      </Button>
    </div>

    <h3 className="mt-28 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
