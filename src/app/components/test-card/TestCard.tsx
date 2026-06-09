
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Card Title</h3>
        <p className="text-gray-700 dark:text-gray-300">This is a short description for the test card, providing some context or details.</p>
      </div>
    </div>
  );
};
