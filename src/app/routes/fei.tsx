// This page is intentionally theme-independent (fixed white background), so it
// names base palette values instead of semantic tokens: --Red600 is the design
// system's accent-red (#e34935) in every theme.
export default function FeiRoute() {
  return (
    <main className="grid h-full place-items-center bg-white">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </main>
  );
}
