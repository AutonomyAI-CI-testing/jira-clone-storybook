import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

import { Button } from "@app/components/button/button";

const ACTION_LABELS = ["Awesome", "Prepare"];

const INPUT_CLASSES =
  "w-full rounded border-none bg-background-input px-4 py-4 font-primary text-base text-font outline outline-2 outline-border-input placeholder:font-primary-light placeholder:text-font-subtlest";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-6">
    <div className="mb-3 flex items-center gap-4">
      <span className="font-primary-bold text-base">{label}</span>
      <MdInfoOutline size={18} />
    </div>
    <input type="text" placeholder={placeholder} className={INPUT_CLASSES} />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col rounded-md bg-elevation-surface p-10 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded p-1 text-font-subtle hover:bg-background-neutral"
      >
        <MdSettings size={22} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <MdKeyboardArrowUp size={20} />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <section className="mt-20">
      <div className="flex items-center gap-3">
        <MdKeyboardArrowUp size={22} />
        <h2 className="font-primary-black text-xl">Add New Design</h2>
      </div>

      <div className="mt-8">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5">
        {ACTION_LABELS.map((label) => (
          <Button
            key={label}
            color="warning"
            variant="contained"
            className="w-full py-4 font-primary text-base"
          >
            {label}
          </Button>
        ))}
      </div>
    </section>

    <h2 className="mt-24 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
