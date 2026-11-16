// Minimal standalone page. It sits outside the __main layout on purpose,
// so the page renders the name alone — no header, sidebar or other chrome.
// The surface is pinned to white, so the page is scoped to the light theme's
// semantic values and the name keeps the same red in every app theme.
export default function FeiRoute() {
  return (
    <div className="light grid h-full w-full place-items-center bg-white">
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
