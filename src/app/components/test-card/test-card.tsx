import React from "react";

/**
 * TestCard provides a simple visual container for demonstration purposes.
 * It uses the theme's elevation and typography tokens to ensure visual consistency.
 *
 * @returns {JSX.Element} A rounded card with a title and description.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded bg-elevation-surface-raised p-5 shadow-sm text-font">
      <h2 className="font-primary-bold text-lg">Test Card</h2>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        This is a short description of the test card.
      </p>
    </div>
  );
};
