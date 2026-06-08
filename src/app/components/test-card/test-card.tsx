import React from 'react';

export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem" 
      className="rounded-md bg-elevation-surface p-5 shadow"
    >
      <h3 className="font-primary-bold text-lg text-font">Test Card Title</h3>
      <p className="mt-2 font-primary text-sm text-font-subtle">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
