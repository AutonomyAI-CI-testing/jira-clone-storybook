
import React from 'react';

export const TestCard = () => {
  return (
    // The id="testElem" is a requirement for visual regression testing or other external selectors
    <div id="testElem">
      <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">Test Card Title</h3>
        <p className="text-sm text-muted-foreground mt-2">This is a short description for the test card.</p>
      </div>
    </div>
  );
};

export default TestCard;
