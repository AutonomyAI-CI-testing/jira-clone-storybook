
import cx from 'classix';
import React from 'react';

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className={cx(
      'p-4 rounded border border-border bg-elevation-surface-raised shadow-sm'
    )}>
      <h2 className={cx(
        'font-primary-black text-xl text-font mb-2'
      )}>
        Test Card Title
      </h2>
      <p className={cx(
        'font-primary-light text-sm text-font-subtle'
      )}>
        This is a short description for the test card.
      </p>
    </div>
  );
};
