import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";
import { Button } from "@app/components/button/button";

const FIELDS = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[380px] rounded bg-elevation-surface-overlay p-6 text-font"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer rounded p-1 text-icon-subtle hover:bg-background-neutral-hovered hover:text-icon"
      >
        <RiSettings3Line size={24} aria-hidden />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <RiArrowUpSLine size={20} aria-hidden />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a single component
      </span>
    </div>

    <div className="h-24" />

    <div className="flex items-center gap-2">
      <RiArrowUpSLine size={20} aria-hidden />
      <h2 className="font-primary-black text-lg">Add New Design</h2>
    </div>

    {FIELDS.map((field) => (
      <div key={field.id} className="mt-6">
        <div className="flex items-center gap-2">
          <label htmlFor={field.id} className="font-primary-light text-sm">
            {field.label}
          </label>
          <RiInformationLine
            size={18}
            role="img"
            aria-label={`More information about ${field.label}`}
            className="text-icon-subtle"
          />
        </div>
        <input
          id={field.id}
          name={field.id}
          placeholder={field.placeholder}
          className="mt-2 w-full rounded bg-background-input px-3 py-2.5 font-primary-light text-sm outline outline-2 outline-border-input placeholder:text-font-subtlest focus:outline-border-brand"
        />
      </div>
    ))}

    <div className="mt-6 flex gap-3">
      <Button color="danger" variant="contained" className="flex-1">
        Awesome
      </Button>
      <Button color="danger" variant="contained" className="flex-1">
        Prepare
      </Button>
    </div>

    <h2 className="mt-8 font-primary-black text-lg">Recent Breakdowns</h2>
  </div>
);
