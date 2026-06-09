import React from "react";

/**
 * TestCard provides a simple demonstration of card styling and layout.
 * Used primarily for testing design system components and their integration.
 */
const TestCard = (): JSX.Element => {
  return (
    <article className="rounded-md border border-border-neutral bg-background-neutral p-4 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold text-font-bold">
        Test Card Title
      </h3>
      <p className="text-sm text-font-subtle">
        This is a short description for the test card. It provides a quick
        overview of the content within.
      </p>
    </article>
  );
};

export default TestCard;
