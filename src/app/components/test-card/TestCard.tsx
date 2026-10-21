import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";
import { Button } from "@app/components/button/button";

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface px-5 py-6 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-icon hover:bg-background-neutral hover:text-icon-brand"
      >
        <MdSettings className="size-5" />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <MdKeyboardArrowUp className="size-5 shrink-0" aria-hidden />
      <span className="font-primary-light text-sm">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-14">
      <div className="flex items-center gap-2">
        <MdKeyboardArrowUp
          className="size-5 shrink-0 text-font-subtle"
          aria-hidden
        />
        <h2 className="font-primary-black text-lg">Add New Design</h2>
      </div>

      <div className="mt-7 flex flex-col gap-4">
        {FIELDS.map(({ label, placeholder }) => (
          <label key={label} className="flex flex-col gap-2">
            <span className="flex items-center gap-2 font-primary-light text-sm">
              {label}
              <MdInfoOutline className="size-4 text-font-subtle" aria-hidden />
            </span>
            <input
              type="text"
              readOnly
              placeholder={placeholder}
              className="rounded border border-border bg-background-input p-3 font-primary-light text-sm placeholder:text-font-subtlest"
            />
          </label>
        ))}
      </div>

      <div className="mt-7 flex justify-center gap-8">
        <Button color="warning" className="w-[170px] py-4">
          Awesome
        </Button>
        <Button color="warning" className="w-[170px] py-4">
          Prepare
        </Button>
      </div>
    </section>

    <h2 className="mt-14 font-primary-black text-lg">Recent Breakdowns</h2>
  </div>
);
