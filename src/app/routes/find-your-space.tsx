import type { MetaFunction } from "react-router";
import { FindYourSpaceView } from "@app/ui/find-your-space";

export const meta: MetaFunction = () => [
  { title: "SuddenlySpaces" },
  {
    name: "description",
    content:
      "Discover residential and commercial properties tailored to your needs.",
  },
];

export default function FindYourSpaceRoute() {
  return <FindYourSpaceView />;
}
