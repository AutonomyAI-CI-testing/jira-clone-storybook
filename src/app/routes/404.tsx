import { Error404 } from "@app/components/error-404";

export default function NotFound404Route() {
  return (
    <div className="flex h-screen w-full items-center justify-center" style={{ backgroundColor: "#00a8d8" }}>
      <Error404
        message="Looks like this page got lost — even our cat can't find it."
        href="/"
      />
    </div>
  );
}
