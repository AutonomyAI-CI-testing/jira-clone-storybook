// Bare page: a top-level route (no __main layout, so no header or nav). It renders the
// marker text with a decorative divider beneath it, sitting where the page was clicked.
export default function McpRoute() {
  return (
    <>
      <span className="text-font-danger">M_C-P_+_</span>
      <div aria-hidden="true" className="mx-5 mt-16 flex items-center gap-3">
        <span className="h-0.5 flex-1 bg-border-danger" />
        <span className="h-2 w-2 rotate-45 bg-background-danger-bold" />
        <span className="h-0.5 flex-1 bg-border-danger" />
      </div>
    </>
  );
}
