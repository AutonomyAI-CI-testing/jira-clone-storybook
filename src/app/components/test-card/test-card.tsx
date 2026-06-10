
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-md border border-gray-300 bg-white p-4 shadow-sm"
    >
      <h2 className="mb-2 text-lg font-semibold">Test Card Title</h2>
      <p className="text-sm text-gray-700">
        This is a short description for the test card.
      </p>
    </div>
  );
};
