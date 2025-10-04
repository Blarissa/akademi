import { SideBar, itemSelected } from "~/components/side-bar";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Dashboard } from "~/components/dashboard";


export function Welcome() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Dashboard />
    </div>
  );
}

