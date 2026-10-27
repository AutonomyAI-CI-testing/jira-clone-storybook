import { HiOutlineInformationCircle } from "react-icons/hi";
import { RiArrowUpSLine, RiSettings3Line } from "react-icons/ri";
import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex h-[508px] w-[254px] flex-col rounded bg-elevation-surface p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <RiSettings3Line size={16} className="text-font-subtlest" aria-hidden="true" />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtlest">
      <RiArrowUpSLine size={14} aria-hidden="true" />
      <span className="truncate text-xs">From entire frame to a singl…</span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <RiArrowUpSLine size={16} aria-hidden="true" />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <label className="mt-7 flex flex-col gap-2">
      <span className="flex items-center gap-2 text-xs text-font-subtle">
        Personal Access Token
        <HiOutlineInformationCircle
          size={14}
          className="text-font-subtlest"
          aria-hidden="true"
        />
      </span>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded bg-background-input px-3 py-2.5 text-xs outline-none placeholder:text-font-subtlest"
      />
    </label>

    <label className="mt-3 flex flex-col gap-2">
      <span className="flex items-center gap-2 text-xs text-font-subtle">
        Design URL
        <HiOutlineInformationCircle
          size={14}
          className="text-font-subtlest"
          aria-hidden="true"
        />
      </span>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded bg-background-input px-3 py-2.5 text-xs outline-none placeholder:text-font-subtlest"
      />
    </label>

    <div className="mt-6 flex gap-4">
      <Button variant="contained" color="warning" className="px-4">
        Awesome
      </Button>
      <Button variant="contained" color="warning" className="px-4">
        Prepare
      </Button>
    </div>

    <span className="mb-10 mt-auto font-primary-bold text-xs text-font-subtle">
      Recent Breakdowns
    </span>
  </div>
);
