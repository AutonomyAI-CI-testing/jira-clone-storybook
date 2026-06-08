
import React from 'react';
import { cx } from 'classix';

const TestCard: React.FC = () => {
  return (
    <div id="testElem" className={cx(
      'bg-background-surface',
      'border',
      'border-border-subtle',
      'rounded-md',
      'p-4',
      'shadow-sm'
    )}>
      <h2 className={cx(
        'font-primary-bold',
        'text-lg',
        'mb-2'
      )}>
        Test Card Title
      </h2>
      <p className={cx(
        'font-primary',
        'text-sm',
        'text-font-subtle'
      )}>
        This is a short description for the test card component.
      </p>
    </div>
  );
};

export default TestCard;
