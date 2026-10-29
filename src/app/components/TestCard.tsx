import { BiChevronUp, BiCog, BiInfoCircle } from "react-icons/bi";

import { Button } from "@app/components/button/button";

const FIELDS = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    value: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    value: "https://www.figma.com/file/:",
  },
];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-elevation-surface-sunken px-5 py-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
        <BiCog size={16} className="text-icon-subtle" aria-hidden />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <BiChevronUp size={12} className="shrink-0" aria-hidden />
        <span className="truncate font-primary-light text-2xs text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <BiChevronUp size={16} className="shrink-0" aria-hidden />
        <h3 className="font-primary-black text-sm">Add New Design</h3>
      </div>

      {FIELDS.map((field) => (
        <div key={field.id} className="mt-5">
          <div className="flex items-center gap-2">
            <label
              htmlFor={field.id}
              className="font-primary text-2xs text-font-subtle"
            >
              {field.label}
            </label>
            <BiInfoCircle
              size={12}
              className="shrink-0 text-icon-subtle"
              aria-hidden
            />
          </div>
          <input
            id={field.id}
            name={field.id}
            value={field.value}
            readOnly
            className="mt-1 h-[29px] w-full rounded border-none bg-background-input px-2.5 text-2xs text-font-subtle outline outline-2 outline-border-input"
          />
        </div>
      ))}

      <div className="mt-6 flex gap-4">
        <Button color="warning" className="flex-1 text-sm">
          Awesome
        </Button>
        <Button color="warning" className="flex-1 text-sm">
          Prepare
        </Button>
      </div>

      <h3 className="mt-12 font-primary-black text-xs">Recent Breakdowns</h3>
    </div>
  );
};
