import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex h-screen w-full max-w-[508px] flex-col bg-elevation-surface px-10 py-10 text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-3xl">UI magician Agent</h1>
      <RiSettings3Line size={28} aria-hidden className="mt-1 shrink-0 text-icon" />
    </div>

    <div className="mt-4 flex items-center gap-3 text-font-subtle">
      <RiArrowUpSLine size={24} aria-hidden className="shrink-0" />
      <span className="truncate font-primary-light text-lg">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-[150px]" />

    <h2 className="flex items-center gap-3 font-primary-black text-2xl">
      <RiArrowUpSLine size={28} aria-hidden className="shrink-0" />
      Add New Design
    </h2>

    <div className="mt-9">
      <label
        htmlFor="test-card-token"
        className="flex items-center gap-4 font-primary-light text-lg"
      >
        Personal Access Token
        <RiInformationLine
          size={24}
          aria-hidden
          className="shrink-0 text-icon-subtle"
        />
      </label>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-border-bold bg-background-input px-10 py-4 font-primary-light text-base placeholder:text-font-subtle"
      />
    </div>

    <div className="mt-6">
      <label
        htmlFor="test-card-url"
        className="flex items-center gap-4 font-primary-light text-lg"
      >
        Design URL
        <RiInformationLine
          size={24}
          aria-hidden
          className="shrink-0 text-icon-subtle"
        />
      </label>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 w-full rounded border border-border-bold bg-background-input px-10 py-4 font-primary-light text-base placeholder:text-font-subtle"
      />
    </div>

    <div className="mt-10 flex justify-center gap-12">
      <button
        type="button"
        className="h-16 w-[170px] rounded-md bg-[#a63d1c] font-primary-bold text-lg text-white/80"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-16 w-[170px] rounded-md bg-[#a63d1c] font-primary-bold text-lg text-white/80"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
