import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Akademi" },
    { name: "description", content: "Welcome to Akademi!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
