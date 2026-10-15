import type { Meta, StoryObj } from "@storybook/react-vite";

const ChevronUp = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 5 5 1l4 4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.8" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="7.5" cy="4.3" r="0.9" fill="currentColor" />
    <rect x="6.7" y="6.3" width="1.6" height="4.9" rx="0.8" fill="currentColor" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7 1v1.8M7 13.2V15M1.6 4.5l1.6.9M10.8 10.6l1.6.9M1.6 11.5l1.6-.9M10.8 5.4l1.6-.9"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-[52px] pt-5 font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <h2 className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</h2>
      <span className="text-[#b5b5b5]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUp />
      <span className="truncate text-[11.5px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-[84px]" />

    <div className="flex items-center gap-2">
      <span className="text-[#b2b2b1]">
        <ChevronUp />
      </span>
      <h3 className="text-[13.5px] text-[#b2b2b1]">Add New Design</h3>
    </div>

    <div className="mt-[27px]">
      <div className="flex items-center gap-2 text-[#a4a4a3]">
        <span className="text-[11.5px]">Personal Access Token</span>
        <InfoIcon />
      </div>
      <div className="mt-[16px] flex h-[34px] w-full items-center border border-[#a5adad] bg-[#272822] px-3">
        <span className="truncate text-[11.5px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    <div className="mt-[13px]">
      <div className="flex items-center gap-2 text-[#a3a3a2]">
        <span className="text-[11.5px]">Design URL</span>
        <InfoIcon />
      </div>
      <div className="mt-[10px] flex h-[35px] w-full items-center border-2 border-[#929291] bg-[#272822] px-3">
        <span className="truncate text-[10.5px] text-[#71726e]">
          https://www.figma.com/file/
        </span>
      </div>
    </div>

    <div className="mt-[25px] flex justify-center gap-[17px]">
      <span className="flex h-[37px] w-[84px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]">
        Awesome
      </span>
      <span className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]">
        Prepare
      </span>
    </div>

    <h3 className="mt-[49px] text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);

const meta: Meta<typeof TestCard> = {
  title: "Components/TestCard",
  component: TestCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TestCard>;

export const Default: Story = {};
