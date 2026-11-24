import { useState } from "react";
import cx from "classix";
import { Button } from "@app/components/button";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineChevronUp } from "react-icons/hi";
import { TbInfoCircle } from "react-icons/tb";

const INPUT_CLASS =
  "w-full rounded-md border border-border-bold bg-background-input px-4 py-3 font-primary-light text-base text-font placeholder:text-font-subtlest";

const Chevron = ({ isOpen }: { isOpen: boolean }): JSX.Element => (
  <HiOutlineChevronUp
    size={20}
    aria-hidden="true"
    className={cx(
      "shrink-0 transition-transform duration-200",
      !isOpen && "rotate-180"
    )}
  />
);

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}): JSX.Element => (
  <label
    htmlFor={htmlFor}
    className="flex items-center gap-2 font-primary text-base"
  >
    {children}
    <TbInfoCircle
      size={18}
      aria-hidden="true"
      className="shrink-0 text-font-subtlest"
    />
  </label>
);

/**
 * Panel reproduced from the "UI magician Agent" Figma frame.
 * Self-contained: it takes no props and owns only the open/closed state of its
 * two collapsible sections.
 */
export const TestCard = (): JSX.Element => {
  const [isSourceOpen, setIsSourceOpen] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(true);

  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open agent settings"
          className="flex cursor-pointer items-center justify-center rounded p-1 text-icon hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
        >
          <IoSettingsOutline size={24} aria-hidden="true" />
        </button>
      </div>

      <button
        type="button"
        aria-expanded={isSourceOpen}
        onClick={() => setIsSourceOpen((open) => !open)}
        className="mt-6 flex w-full cursor-pointer items-center gap-2 rounded text-left font-primary-light text-base text-font-subtle hover:text-font"
      >
        <Chevron isOpen={isSourceOpen} />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      <section className="mt-28">
        <h2>
          <button
            type="button"
            aria-expanded={isFormOpen}
            onClick={() => setIsFormOpen((open) => !open)}
            className="flex w-full cursor-pointer items-center gap-2 rounded text-left font-primary-bold text-2xl"
          >
            <Chevron isOpen={isFormOpen} />
            Add New Design
          </button>
        </h2>

        {isFormOpen && (
          <div className="mt-6 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <FieldLabel htmlFor="test-card-access-token">
                Personal Access Token
              </FieldLabel>
              <input
                id="test-card-access-token"
                name="accessToken"
                type="text"
                placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
                className={INPUT_CLASS}
              />
            </div>

            <div className="flex flex-col gap-4">
              <FieldLabel htmlFor="test-card-design-url">Design URL</FieldLabel>
              <input
                id="test-card-design-url"
                name="designUrl"
                type="text"
                placeholder="https://www.figma.com/file/"
                className={INPUT_CLASS}
              />
            </div>

            <div className="mt-2 flex gap-8">
              <Button className="min-w-[172px] px-6 py-4">Awesome</Button>
              <Button className="min-w-[172px] px-6 py-4">Prepare</Button>
            </div>
          </div>
        )}
      </section>

      <h2 className="mt-24 font-primary-bold text-xl text-font-subtle">
        Recent Breakdowns
      </h2>
    </div>
  );
};
