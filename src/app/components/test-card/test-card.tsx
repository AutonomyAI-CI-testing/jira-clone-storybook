export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
      style={{
        padding: "16px",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      }}
    >
      <h2
        className="mb-2 text-xl font-semibold text-slate-900"
        style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "8px" }}
      >
        Card Title
      </h2>
      <p className="text-slate-600" style={{ color: "#4a5568" }}>
        This is a short description for the test card.
      </p>
    </div>
  );
};
