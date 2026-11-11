import type { MetaFunction } from "react-router";
import { formatTags } from "@utils/meta";

export const meta: MetaFunction = () => {
  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: "Fei",
  };

  return formatTags(tags);
};

export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </div>
  );
}
