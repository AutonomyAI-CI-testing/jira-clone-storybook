import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "@app/components/error-404";

/**
 * Renders the index route's `CatchBoundary` exactly as a user sees it when
 * a page is not found. The markup mirrors `CatchBoundary` in
 * `src/app/routes/index.tsx`, which wraps the real `Error404` component
 * with the route's not-found message and a link back to the home page.
 *
 * The route module itself is not imported here because it statically imports
 * `@remix-run/node` (server-only), which cannot be bundled for the browser.
 * We replicate the same JSX so the preview reflects the real route output.
 */
const IndexCatchBoundary = () => (
  <div>
    <Error404
      message="It seems that you have lost! Go to the main page"
      href="/"
    />
  </div>
);

const meta: Meta<typeof IndexCatchBoundary> = {
  title: "Routes/Index/CatchBoundary",
  component: IndexCatchBoundary,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof IndexCatchBoundary>;

/**
 * The 404 state shown to users who navigate to a missing page under the
 * index route.
 */
export const NotFound: Story = {};
