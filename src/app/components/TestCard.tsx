import type { JSX } from "react";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h2 className="text-lg text-font">Test Card</h2>
      <p className="mt-2 text-font-subtle">
        This is a simple card component displaying a title and description text.
      </p>
    </div>
  );
};
