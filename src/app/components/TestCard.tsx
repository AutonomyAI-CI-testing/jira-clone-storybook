import React from 'react';

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded bg-elevation-surface-raised p-6 shadow-sm text-font"
    >
      <h2 className="font-primary-bold text-lg">Test Card</h2>
      <p className="mt-2 text-font-subtle">
        This is a short hardcoded description for the TestCard component.
      </p>
    </div>
  );
};
