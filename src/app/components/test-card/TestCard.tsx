import { FaCaretUp, FaCog, FaInfoCircle } from "react-icons/fa";

import { Button } from "@app/components/button/button";

const fields = [
  {
    id: "testElem-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file:",
  },
];

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-4 bg-elevation-surface p-6 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <FaCog aria-hidden className="shrink-0 text-icon-subtle" size={22} />
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <FaCaretUp aria-hidden className="shrink-0" size={16} />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a singl…
      </span>
    </div>

    <section className="mt-10 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <FaCaretUp aria-hidden className="shrink-0" size={18} />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      {fields.map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-font-subtle">
            <label htmlFor={field.id} className="font-primary text-base">
              {field.label}
            </label>
            <FaInfoCircle aria-hidden className="shrink-0" size={16} />
          </div>
          <input
            id={field.id}
            name={field.id}
            type="text"
            placeholder={field.placeholder}
            className="rounded border border-border bg-background-input p-3 font-primary-light text-font placeholder:text-font-subtlest"
          />
        </div>
      ))}

      <div className="mt-4 flex gap-6">
        <Button className="w-[172px] py-3 text-base">Awesome</Button>
        <Button variant="subtlest" className="w-[172px] py-3 text-base">
          Prepare
        </Button>
      </div>
    </section>

    <h3 className="mt-8 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
