import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeiView } from "./fei.view";

const meta: Meta<typeof FeiView> = {
  title: "Pages/Fei",
  component: FeiView,
  parameters: {
    layout: "fullscreen",
  },
  // The view is full height (`h-full`), which resolves against the document in
  // the app (`<html class="h-full">` / `<body class="h-full">` in root.tsx).
  // Storybook's preview document has no height, so give it a full-viewport
  // wrapper — same approach as `board.view.stories.tsx`.
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FeiView>;

export const Default: Story = {};
