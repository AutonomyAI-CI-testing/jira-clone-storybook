import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";
import { Button } from "@app/components/button/button";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-elevation-surface px-10 py-8 text-font"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <HiCog size={24} aria-hidden className="text-icon" />
      </div>

      <div className="mt-5 flex items-center gap-2 text-font-subtle">
        <HiChevronUp size={20} aria-hidden />
        <span className="truncate font-primary-light text-sm">
          From entire frame to a singl...
        </span>
      </div>

      <section className="mt-16">
        <div className="flex items-center gap-2">
          <HiChevronUp size={22} aria-hidden className="text-icon" />
          <h2 className="font-primary-bold text-2xl">Add New Design</h2>
        </div>

        <label className="mt-10 block">
          <span className="flex items-center gap-2 font-primary-light text-sm">
            Personal Access Token
            <HiInformationCircle
              size={16}
              aria-hidden
              className="text-icon-subtle"
            />
          </span>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxx"
            className="mt-2 w-full rounded-md border border-border-input bg-background-input p-3 placeholder:text-font-subtlest"
          />
        </label>

        <label className="mt-6 block">
          <span className="flex items-center gap-2 font-primary-light text-sm">
            Design URL
            <HiInformationCircle
              size={16}
              aria-hidden
              className="text-icon-subtle"
            />
          </span>
          <input
            type="text"
            placeholder="https://www.figma.com/file/"
            className="mt-2 w-full rounded-md border border-border-input bg-background-input p-3 placeholder:text-font-subtlest"
          />
        </label>

        <div className="mt-8 flex gap-10">
          <Button color="warning" size="lg" className="w-[168px]">
            Awesome
          </Button>
          <Button color="warning" size="lg" className="w-[168px]">
            Prepare
          </Button>
        </div>
      </section>

      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
