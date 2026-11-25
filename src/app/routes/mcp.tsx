// Bare page: a top-level route (no __main layout, so no header or nav) that renders
// the marker text in the theme's danger (red) colour and nothing else.
export default function McpRoute() {
  return <span className="text-font-danger">M_C-P_+_</span>;
}
