const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="rounded-md border bg-white p-4 shadow-md">
      <h2 className="mb-2 text-xl font-semibold">Test Card Title</h2>
      <p className="text-gray-700">
        This is a short description for the test card component.
      </p>
    </div>
  );
};

export default TestCard;
