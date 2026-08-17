export function TestFei() {
  return (
    <div
      style={{ backgroundColor: "#ff0000" }}
      className="min-h-screen w-full flex flex-col items-center justify-center gap-8"
    >
      <h1
        className="font-primary-black text-[3rem] leading-none"
        style={{ color: "#000000" }}
      >
        Test Fei
      </h1>
      <img
        src="/images/fei-wizard.png"
        alt="Fei the wizard robot"
        className="w-64 h-auto"
      />
    </div>
  );
}
