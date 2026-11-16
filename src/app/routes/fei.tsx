// Standalone page: deliberately outside the __main layout so that nothing but
// the wordmark renders — no header, no navigation, no other chrome.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </div>
  );
}
