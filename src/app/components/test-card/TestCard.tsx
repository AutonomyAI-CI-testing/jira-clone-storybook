import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

import { Button } from "@app/components/button/button";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface p-10 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <MdSettings aria-hidden size={24} className="text-icon-subtle" />
    </div>

    <div className="mt-12 flex items-center gap-2 text-font-subtle">
      <MdKeyboardArrowUp aria-hidden size={20} />
      <span className="truncate font-primary-light text-base">
        From entire frame to a single frame
      </span>
    </div>

    <div className="mt-40 flex items-center gap-2">
      <MdKeyboardArrowUp aria-hidden size={22} />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-20 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <label htmlFor="testElem-token" className="font-primary text-base">
          Personal Access Token
        </label>
        <MdInfoOutline aria-hidden size={18} className="text-icon-subtle" />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="rounded-md bg-background-input px-4 py-3 font-primary text-base text-font outline outline-2 outline-transparent placeholder:text-font-subtlest focus:outline-border-brand"
      />
    </div>

    <div className="mt-8 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <label htmlFor="testElem-url" className="font-primary text-base">
          Design URL
        </label>
        <MdInfoOutline aria-hidden size={18} className="text-icon-subtle" />
      </div>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="rounded-md bg-background-input px-4 py-3 font-primary text-base text-font outline outline-2 outline-transparent placeholder:text-font-subtlest focus:outline-border-brand"
      />
    </div>

    <div className="mt-12 flex gap-4">
      <Button color="danger" className="px-6 py-3">
        Awesome
      </Button>
      <Button color="danger" className="px-6 py-3">
        Prepare
      </Button>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
