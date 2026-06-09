import React from "react";

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-4">
      <div className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-gray-800 mb-2 text-2xl font-bold">
          Test Card Title
        </h2>
        <p className="text-gray-600 text-base">
          This is a short description for the test card. It provides some static
          content to demonstrate the component's structure.
        </p>
      </div>
    </div>
  );
};

export default TestCard;
