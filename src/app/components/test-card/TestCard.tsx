
import React from 'react';

/**
 * A simple card component for testing purposes.
 * This component provides a consistent container with a title and description.
 */
const TestCard: React.FC = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-2">Test Card Title</h2>
      <p className="text-sm text-gray-600">This is a short description for the test card component.</p>
    </div>
  );
};

export default TestCard;
