import type { MetaFunction } from "react-router";
import { LandingView } from "@app/ui/landing";

export const meta: MetaFunction = () => [
  { title: "SuddenlySpaces" },
  {
    name: "description",
    content:
      "Discover residential and commercial properties tailored to your needs.",
  },
];

export default function LandingRoute() {
  return <LandingView />;
}
