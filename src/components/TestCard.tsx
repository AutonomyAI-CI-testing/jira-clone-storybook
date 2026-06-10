import React from 'react';

const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="flex items-center justify-center min-h-[inherit]">
      <div className="bg-elevation-surface-raised rounded shadow-xs p-4 flex flex-col gap-2 max-w-sm w-full text-center">
        <h3 className="text-font">Test Card Title</h3>
        <p className="text-font-subtle">This is a short description for the test card component.</p>
      </div>
    </div>
  );
};

export default TestCard;
