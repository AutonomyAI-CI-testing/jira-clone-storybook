import React from "react";

/**
 * TestCard is a placeholder component used to verify the design system's
 * card styling and layout in isolation.
 */
const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="border-gray-200 rounded-lg border p-4 shadow-md">
        <h2 className="mb-2 text-lg font-semibold">Test Card Title</h2>
        <p className="text-gray-600">
          This is a short description for the test card component.
        </p>
      </div>
    </div>
  );
};

export default TestCard;
