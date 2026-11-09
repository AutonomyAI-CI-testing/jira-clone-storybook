import { useState } from "react";
import { BsChevronUp, BsGear, BsInfoCircle } from "react-icons/bs";

const INPUT_CLASSES =
  "box-border w-full rounded-md border-none bg-background-input p-3 font-primary text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest hover:bg-background-input-hovered focus:outline-border-brand";

const ACTION_CLASSES =
  "cursor-pointer rounded-md bg-[var(--Orange800)] px-6 py-4 font-primary text-base text-[color:var(--Neutral0)] outline outline-2 outline-transparent hover:bg-[var(--Orange900)] hover:outline-border-brand";

const FIELDS = [
  {
    id: "testcard-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxx",
  },
  {
    id: "testcard-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setValues((previous) => ({ ...previous, [id]: value }));
    };

  return (
    <div
      id="testElem"
      className="w-[508px] rounded-md bg-elevation-surface p-10 text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-lg">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="flex cursor-pointer items-center justify-center rounded-full p-2 outline outline-2 outline-transparent hover:bg-background-neutral-hovered hover:outline-border-brand"
        >
          <BsGear size={18} />
        </button>
      </div>

      <button
        type="button"
        className="mt-4 flex w-full cursor-pointer items-center gap-2 rounded p-2 text-left font-primary text-sm text-font-subtle outline outline-2 outline-transparent hover:bg-background-neutral-hovered hover:outline-border-brand"
      >
        <BsChevronUp aria-hidden="true" className="shrink-0" size={14} />
        <span className="truncate">From entire frame to a single component</span>
      </button>

      <h3 className="mt-14 flex items-center gap-2 font-primary-bold text-xl">
        <BsChevronUp aria-hidden="true" className="shrink-0" size={16} />
        Add New Design
      </h3>

      <div className="mt-8 space-y-6">
        {FIELDS.map(({ id, label, placeholder }) => (
          <div key={id}>
            <label
              htmlFor={id}
              className="flex items-center gap-2 font-primary text-sm"
            >
              {label}
              <BsInfoCircle aria-hidden="true" size={14} />
            </label>
            <input
              id={id}
              type="text"
              value={values[id] ?? ""}
              onChange={handleChange(id)}
              placeholder={placeholder}
              className={INPUT_CLASSES}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4">
        {ACTIONS.map((label) => (
          <button key={label} type="button" className={ACTION_CLASSES}>
            {label}
          </button>
        ))}
      </div>

      <h3 className="mt-14 font-primary-bold text-xl">Recent Breakdowns</h3>
    </div>
  );
};
