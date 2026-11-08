import type { MetaFunction } from "react-router";
import { formatTags } from "@utils/meta";

export const meta: MetaFunction = () => {
  const title = "Jira clone - Fei";
  const description = "A plain page showing the word Fei.";

  const tags = {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: title,
    description: description,
  };

  return [{ title }, ...formatTags(tags)];
};

export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
}
