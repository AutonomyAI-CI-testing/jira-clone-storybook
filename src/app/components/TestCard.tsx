import React from "react";

/**
 * A simple card component used for testing and demonstration purposes.
 * It features a title and a description with a shadow-md border.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-white rounded-lg shadow-md border border-gray-200 p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-2">Test Card Title</h2>
      <p className="text-gray-700">This is a short description for the test card.</p>
    </div>
  );
};
