import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";
import { Button } from "@app/components/button";

const fieldClassName =
  "w-full border border-border-input bg-background-input px-3 text-2xs text-font placeholder:text-font-subtlest";

const FieldLabel = ({ label }: { label: string }): JSX.Element => (
  <div className="mt-2.5 flex items-center gap-5 text-2xs text-font-subtle">
    <span>{label}</span>
    <MdInfoOutline aria-hidden size={15} className="text-icon" />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-elevation-surface p-5 font-primary-bold text-font"
  >
    <div className="flex items-center justify-between">
      <span className="text-xs">UI magician Agent</span>
      <MdSettings aria-hidden size={16} className="text-icon" />
    </div>

    <div className="mt-4 flex items-center gap-2 text-2xs text-font-subtlest">
      <MdKeyboardArrowUp aria-hidden size={14} />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-2 text-xs">
      <MdKeyboardArrowUp aria-hidden size={16} />
      <span>Add New Design</span>
    </div>

    <FieldLabel label="Personal Access Token" />
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={`mt-2.5 h-[39px] ${fieldClassName}`}
    />

    <FieldLabel label="Design URL" />
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className={`mt-2.5 h-[41px] ${fieldClassName}`}
    />

    <div className="mt-5 ml-6 flex gap-3.5 text-2xs">
      <Button color="danger" variant="contained" className="h-10 w-[87px]">
        Awesome
      </Button>
      <Button color="danger" variant="contained" className="h-10 w-[87px]">
        Prepare
      </Button>
    </div>

    <div className="mt-11 text-xs">Recent Breakdowns</div>
  </div>
);
