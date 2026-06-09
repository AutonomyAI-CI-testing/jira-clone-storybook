
import cx from 'classix';

/**
 * A basic card component used for testing UI layouts and theme integration.
 */
const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={cx(
        'p-4 border border-border rounded-md bg-background-neutral shadow-sm'
      )}
    >
      <h2 className="font-primary-bold text-xl text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-sm text-font-subtle mt-2">
        This is a short description for the test card component.
      </p>
    </div>
  );
};

export default TestCard;
