import { TbChevronUp, TbInfoCircle, TbSettings } from "react-icons/tb";

import { Button } from "@app/components/button/button";

const FIELDS = [
  {
    id: "test-card-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const Field = ({ id, label, placeholder }: (typeof FIELDS)[number]) => (
  <div className="flex flex-col gap-3">
    <label
      htmlFor={id}
      className="flex items-center gap-2 font-primary text-base text-font"
    >
      {label}
      <TbInfoCircle aria-hidden size={18} className="text-font-subtlest" />
    </label>
    <input
      id={id}
      placeholder={placeholder}
      className="rounded-md bg-background-input p-3 font-primary-light text-base text-font placeholder:text-font-subtlest"
    />
  </div>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="flex items-center gap-2 font-primary-bold text-xl text-font">
    <TbChevronUp aria-hidden size={22} />
    {children}
  </h2>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface p-10 font-primary-light text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex h-8 w-8 items-center justify-center rounded text-icon hover:bg-background-neutral"
      >
        <TbSettings aria-hidden size={22} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-base text-font-subtle">
      <TbChevronUp aria-hidden size={20} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <section className="mt-32 flex flex-col">
      <SectionHeading>Add New Design</SectionHeading>

      <div className="mt-10 flex flex-col gap-8">
        {FIELDS.map((field) => (
          <Field key={field.id} {...field} />
        ))}
      </div>

      <div className="mx-12 mt-14 flex gap-6">
        <Button color="neutral" size="lg" className="flex-1">
          Awesome
        </Button>
        <Button color="neutral" size="lg" className="flex-1">
          Prepare
        </Button>
      </div>
    </section>

    <section className="mt-24">
      <h2 className="font-primary-bold text-xl">Recent Breakdowns</h2>
    </section>
  </div>
);
