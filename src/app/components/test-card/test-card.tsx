import React from "react";

/**
 * TestCard component
 * A simple card component that displays a title and description.
 * Uses Tailwind CSS classes for styling and follows the design system.
 */
const TestCard: React.FC = () => {
  return (
    <div className="w-80 rounded border border-border bg-elevation-surface p-4 shadow-sm">
      <h2 className="mb-2 font-primary-bold text-xl text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtle">
        This is a short description for the test card component. It demonstrates
        the basic structure and styling.
      </p>
    </div>
  );
};

export default TestCard;
