export function FeiPage() {
  return (
    <div
      style={{ backgroundColor: "#000000", minHeight: "100vh" }}
      className="flex flex-col items-center justify-center gap-6"
    >
      <img
        src="/images/fei-mascot.png"
        alt="Fei mascot"
        className="w-64 h-auto drop-shadow-2xl"
      />
      <h1
        className="font-primary-black"
        style={{ fontSize: "4rem", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#ff0000" }}
      >
        Fei
      </h1>
    </div>
  );
}
