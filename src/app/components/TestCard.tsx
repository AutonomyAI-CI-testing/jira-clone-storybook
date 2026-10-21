import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";
import { Button } from "@app/components/button/button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="mx-auto flex w-[508px] flex-col gap-6 bg-elevation-surface-raised p-5 text-font"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-primary-black text-2xl">UI magician Agent</span>
          <RiSettings3Line size={24} className="text-icon" aria-hidden />
        </div>

        <div className="flex items-center gap-2 text-font-subtle">
          <RiArrowUpSLine size={20} aria-hidden />
          <span className="font-primary-light text-sm">
            From entire frame to a singl…
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <RiArrowUpSLine size={20} className="text-font-subtle" aria-hidden />
          <span className="font-primary-black text-2xl">Add New Design</span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-primary text-xs text-font-subtle">
              Personal Access Token
            </span>
            <RiInformationLine size={16} className="text-icon-subtle" aria-hidden />
          </div>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded-md bg-background-input p-3 font-primary-light text-sm text-font outline-2 outline-border placeholder:text-font-subtlest"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-primary text-xs text-font-subtle">
              Design URL
            </span>
            <RiInformationLine size={16} className="text-icon-subtle" aria-hidden />
          </div>
          <input
            readOnly
            placeholder="https://www.figma.com/file:"
            className="w-full rounded-md bg-background-input p-3 font-primary-light text-sm text-font outline-2 outline-border placeholder:text-font-subtlest"
          />
        </div>

        <div className="flex gap-4">
          <Button color="danger" className="px-6">
            Awesome
          </Button>
          <Button color="danger" className="px-6">
            Prepare
          </Button>
        </div>
      </div>

      <span className="font-primary-black text-2xl">Recent Breakdowns</span>
    </div>
  );
};
