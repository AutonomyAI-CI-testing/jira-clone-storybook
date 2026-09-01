export const FeiView = (): JSX.Element => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "CircularStdBlack, sans-serif",
          fontWeight: 900,
          fontSize: "10rem",
          color: "#ff0000",
          lineHeight: 1,
        }}
      >
        Fei
      </span>
    </div>
  );
};
