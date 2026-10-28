import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { Button } from "./button/button";

const accessTokenPlaceholder = "figd_xxxxxxxxxxxxxxxxxxx";
const designUrlPlaceholder = "https://www.figma.com/file/";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] rounded-lg bg-elevation-surface p-6 font-primary text-font"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
        <IoSettingsOutline className="h-6 w-6 shrink-0 text-icon" aria-hidden />
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm font-primary-light text-font-subtle">
        <IoChevronUp className="h-4 w-4 shrink-0" aria-hidden />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <IoChevronUp className="h-5 w-5 shrink-0" aria-hidden />
        <h3 className="font-primary-bold text-lg">Add New Design</h3>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <span className="text-sm font-primary-light">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          className="h-4 w-4 shrink-0 text-icon"
          aria-hidden
        />
      </div>
      <div className="mt-2 rounded-md border border-border-bold bg-background-input px-4 py-4 text-font-subtlest">
        {accessTokenPlaceholder}
      </div>

      <div className="mt-6 flex items-center gap-2">
        <span className="text-sm font-primary-light">Design URL</span>
        <IoInformationCircleOutline
          className="h-4 w-4 shrink-0 text-icon"
          aria-hidden
        />
      </div>
      <div className="mt-2 rounded-md border border-border-bold bg-background-input px-4 py-4 text-font-subtlest">
        {designUrlPlaceholder}
      </div>

      <div className="mt-6 flex gap-4">
        <Button color="danger" size="lg" className="w-[168px]">
          Awesome
        </Button>
        <Button color="danger" size="lg" className="w-[168px]">
          Prepare
        </Button>
      </div>

      <h3 className="mt-16 font-primary-bold text-lg">Recent Breakdowns</h3>
    </div>
  );
};
