import { FiChevronUp, FiInfo } from "react-icons/fi";
import { MdSettings } from "react-icons/md";
import { Button } from "./button";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 bg-elevation-surface p-6 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded p-1 text-font hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
      >
        <MdSettings size={20} aria-hidden="true" />
      </button>
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <FiChevronUp size={18} aria-hidden="true" className="shrink-0" />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a single frame
      </span>
    </div>

    <section className="mt-6 flex flex-col gap-4">
      <h3 className="flex items-center gap-2 font-primary-bold text-base">
        <FiChevronUp size={18} aria-hidden="true" className="shrink-0" />
        Add New Design
      </h3>

      <div className="flex flex-col gap-2">
        <span className="flex items-center gap-2 font-primary-light text-2xs text-font-subtle">
          Personal Access Token
          <FiInfo size={14} aria-hidden="true" className="shrink-0" />
        </span>
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-border-bold bg-background-input px-3 py-2 font-primary-light text-sm text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="flex items-center gap-2 font-primary-light text-2xs text-font-subtle">
          Design URL
          <FiInfo size={14} aria-hidden="true" className="shrink-0" />
        </span>
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className="w-full rounded border border-border-bold bg-background-input px-3 py-2 font-primary-light text-sm text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="mt-2 flex items-center gap-4">
        <Button size="lg">Awesome</Button>
        <Button size="lg">Prepare</Button>
      </div>
    </section>

    <h3 className="mt-4 font-primary-bold text-lg">Recent Breakdowns</h3>
  </div>
);
