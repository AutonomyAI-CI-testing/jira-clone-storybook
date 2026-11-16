// Minimal standalone page. It sits outside the __main layout on purpose,
// so the page renders the name alone — no header, sidebar or other chrome.
export default function FeiRoute() {
  return (
    <div className="grid h-full w-full place-items-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </div>
  );
}
