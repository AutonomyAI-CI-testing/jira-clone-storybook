import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";
import { Button } from "@app/components/button/button";

/**
 * TestCard is a self-contained reproduction of the "UI magician Agent" Figma
 * frame. It is a smoke test of the design-to-component pipeline: it takes no
 * props, holds its own content, and has no dependency on the rest of the app.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-elevation-surface px-10 py-8 font-primary text-font"
    >
      <div className="mx-auto flex w-full max-w-[508px] flex-col">
        {/* Title bar */}
        <div className="flex items-center justify-between">
          <h1 className="font-primary-black text-xl">UI magician Agent</h1>
          <button
            type="button"
            aria-label="Settings"
            className="flex cursor-pointer items-center justify-center rounded-full p-1 text-icon hover:bg-background-neutral hover:text-icon-brand"
          >
            <IoSettingsOutline aria-hidden className="text-2xl" />
          </button>
        </div>

        {/* Collapsed section line */}
        <div className="mt-8 flex items-center gap-2">
          <IoChevronUp aria-hidden className="shrink-0 text-lg text-icon" />
          <p className="truncate font-primary-light text-base text-font-subtle">
            From entire frame to a single component
          </p>
        </div>

        {/* Add New Design */}
        <div className="mt-16 flex items-center gap-2">
          <IoChevronUp aria-hidden className="shrink-0 text-xl text-icon" />
          <h2 className="font-primary-black text-xl">Add New Design</h2>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          <TextField
            id="testCardPersonalAccessToken"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
          <TextField
            id="testCardDesignUrl"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <Button type="button" className="px-10 py-3 text-base">
            Awesome
          </Button>
          <Button type="button" className="px-10 py-3 text-base">
            Prepare
          </Button>
        </div>

        {/* Recent Breakdowns */}
        <h2 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

const TextField = ({ id, label, placeholder }: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="flex items-center gap-2 font-primary-light text-sm text-font-subtle"
      >
        {label}
        <IoInformationCircleOutline aria-hidden className="text-base" />
      </label>
      <input
        id={id}
        name={id}
        type="text"
        placeholder={placeholder}
        className="w-full rounded-md border-none bg-background-input p-4 font-primary-light text-font outline-2 outline-border-input placeholder:text-font-subtlest hover:bg-background-input-hovered focus-visible:bg-background-input-pressed"
      />
    </div>
  );
};

interface TextFieldProps {
  id: string;
  label: string;
  placeholder: string;
}
