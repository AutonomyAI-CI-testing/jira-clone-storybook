import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { Button } from "@app/components/button";

const labelClass = "flex items-center gap-2 font-primary-light text-base";

const inputClass =
  "mt-2 h-[50px] w-full rounded bg-background-input px-4 font-primary-light text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest";

const actionButtonClass = "min-w-[168px] px-10 py-3 text-base";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] max-w-full flex-col bg-elevation-surface-overlay px-10 py-6 text-font"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <HiOutlineCog
        aria-hidden
        className="shrink-0 text-2xl text-font-subtlest"
      />
    </header>

    <div className="mt-5 flex items-center gap-2 text-font-subtlest">
      <HiChevronUp aria-hidden className="shrink-0 text-lg" />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-24">
      <h2 className="flex items-center gap-2 font-primary-bold text-xl">
        <HiChevronUp aria-hidden className="shrink-0 text-lg" />
        Add New Design
      </h2>

      <div className="mt-8">
        <label className={labelClass} htmlFor="test-card-access-token">
          Personal Access Token
          <HiOutlineInformationCircle
            aria-hidden
            className="shrink-0 text-lg text-font-subtlest"
          />
        </label>
        <input
          id="test-card-access-token"
          name="personalAccessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={inputClass}
        />
      </div>

      <div className="mt-6">
        <label className={labelClass} htmlFor="test-card-design-url">
          Design URL
          <HiOutlineInformationCircle
            aria-hidden
            className="shrink-0 text-lg text-font-subtlest"
          />
        </label>
        <input
          id="test-card-design-url"
          name="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClass}
        />
      </div>

      <div className="mt-8 flex gap-6">
        <Button color="warning" className={actionButtonClass}>
          Awesome
        </Button>
        <Button color="warning" className={actionButtonClass}>
          Prepare
        </Button>
      </div>
    </section>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
