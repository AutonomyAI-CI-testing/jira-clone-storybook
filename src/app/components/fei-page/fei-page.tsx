export function FeiPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8">
      <img
        src="/images/fei-wizard.png"
        alt="Fei the wizard robot"
        className="w-64 h-auto drop-shadow-2xl"
      />
      <h1
        className="font-primary-black text-[6rem] leading-none tracking-tight"
        style={{ color: "#ff0000" }}
      >
        Fei
      </h1>
    </div>
  );
}
