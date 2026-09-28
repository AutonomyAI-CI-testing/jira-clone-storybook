import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";
import { Spinner } from "./spinner";

/**
 * Renders the real `Spinner` at a larger size so the track ring is legible.
 * Only the demo wrapper's CSS is overridden — the component itself is untouched.
 */
const LargeSpinner = ({ className = "" }: { className?: string }) => (
  <>
    <style>
      {`.spinner-demo svg { height: 96px; width: 96px; margin-right: 0; }`}
    </style>
    <div className={`spinner-demo leading-none ${className}`}>
      <Spinner />
    </div>
  </>
);

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

/** The spinner enlarged: the arc inherits the text colour and the track ring
 * is the same colour at 20% opacity, so both are clearly visible. */
export const Default: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-10">
      <LargeSpinner />
      <LargeSpinner className="text-font-brand" />
    </div>
  ),
};

/** The spinner at its shipped size (20px), as it appears in the app's
 * submitting buttons. */
export const NaturalSize: Story = {
  render: () => (
    <div className="flex items-center gap-4 text-font">
      <Spinner />
      <span>Loading…</span>
    </div>
  ),
};

/** The real submit-button context: a disabled Accept button in its
 * submitting state, exactly as the create-issue and create-project panels
 * render it. */
export const InSubmittingButton: Story = {
  render: () => (
    <Button color="primary" size="lg" className="w-fit" disabled>
      Submitting
      <Spinner />
    </Button>
  ),
};
