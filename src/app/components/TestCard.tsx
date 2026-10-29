import type { ReactNode } from "react";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const inputClassName =
  "w-full rounded border-none bg-background-input px-4 py-3 font-primary text-base text-font outline outline-2 outline-border-input placeholder:font-primary-light placeholder:text-font-subtlest";

const buttonClassName =
  "w-[170px] rounded bg-background-warning-bold px-4 py-4 font-primary-bold text-base text-font-inverse";

const actions = ["Awesome", "Prepare"];

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) => (
  <div className="flex items-center gap-3">
    <label htmlFor={htmlFor} className="font-primary-bold text-base">
      {children}
    </label>
    <IoInformationCircleOutline
      size={20}
      aria-hidden="true"
      className="text-font-subtle"
    />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col gap-8 bg-elevation-surface-sunken px-10 py-7 text-font"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="rounded p-1 text-font-subtle hover:bg-background-neutral"
        >
          <IoSettingsOutline size={22} aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center gap-2 text-font-subtlest">
        <IoChevronUp size={18} aria-hidden="true" />
        <span className="font-primary text-base">
          From entire frame to a singl...
        </span>
      </div>

      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <IoChevronUp size={20} aria-hidden="true" />
          <h2 className="font-primary-black text-2xl">Add New Design</h2>
        </div>

        <div className="flex flex-col gap-3">
          <FieldLabel htmlFor="personal-access-token">
            Personal Access Token
          </FieldLabel>
          <input
            id="personal-access-token"
            name="personal-access-token"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className={inputClassName}
          />
        </div>

        <div className="flex flex-col gap-3">
          <FieldLabel htmlFor="design-url">Design URL</FieldLabel>
          <input
            id="design-url"
            name="design-url"
            readOnly
            placeholder="https://www.figma.com/file:"
            className={inputClassName}
          />
        </div>

        <div className="flex gap-6">
          {actions.map((label) => (
            <button key={label} type="button" className={buttonClassName}>
              {label}
            </button>
          ))}
        </div>
      </section>

      <h2 className="font-primary-black text-2xl">Recent Breakdowns</h2>
    </div>
  );
};
