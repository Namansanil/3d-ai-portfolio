import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naman Sanil — AI & Full-Stack Engineer" },
      { name: "description", content: "Portfolio of Naman Sanil — Full-Stack AI Developer building marketplaces, booking systems and intelligent agents with React, Node.js and modern AI tooling." },
      { property: "og:title", content: "Naman Sanil — AI & Full-Stack Engineer" },
      { property: "og:description", content: "Full-Stack AI Developer & BCA (AI & ML) student shipping production marketplaces and booking platforms." },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
