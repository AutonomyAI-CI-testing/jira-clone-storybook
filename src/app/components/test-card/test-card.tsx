import React from 'react';

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="bg-elevation-surface-raised shadow-sm rounded p-4 text-font">
      <h2 className="text-lg font-primary-bold">Test Card Title</h2>
      <p className="mt-1 font-primary-light text-sm text-font-subtle">
        This is a short description of the test card component.
      </p>
    </div>
  );
};