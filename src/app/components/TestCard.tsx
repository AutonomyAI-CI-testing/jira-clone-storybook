import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { Button } from "@app/components/button/button";

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center gap-2 font-primary-bold text-base text-font-subtle">
      {label}
      <IoInformationCircleOutline aria-hidden className="text-lg" />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="h-12 w-full rounded bg-background-input px-3 text-font outline outline-2 outline-border-input placeholder:text-font-subtle"
    />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 bg-elevation-surface-overlay px-8 py-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <IoSettingsOutline aria-hidden className="text-2xl text-font-subtle" />
    </div>

    <div className="flex items-center gap-3 font-primary-light text-base text-font-subtle">
      <IoChevronUp aria-hidden className="text-lg" />
      From entire frame to a singl…
    </div>

    <h3 className="mt-4 flex items-center gap-3 font-primary-black text-2xl">
      <IoChevronUp aria-hidden className="text-2xl" />
      Add New Design
    </h3>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-2 flex gap-8">
      <Button color="warning" className="h-12 flex-1 text-lg">
        Awesome
      </Button>
      <Button color="warning" className="h-12 flex-1 text-lg">
        Prepare
      </Button>
    </div>

    <h3 className="mt-8 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);
