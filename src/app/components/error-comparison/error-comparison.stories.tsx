import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "../error-404/error-404";
import { Error500 } from "../error-500/error-500";

const meta: Meta = {
  title: "Components/ErrorComparison",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const SideBySide: Story = {
  name: "Side by Side",
  render: () => (
    <div className="flex flex-row flex-wrap items-start justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-primary-bold text-xl text-font">Error 404</h2>
        <Error404 message="Error 404: Not Found" href="" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-primary-bold text-xl text-font">Error 500</h2>
        <Error500 message="Error 500: Server error" href="" />
      </div>
    </div>
  ),
};
