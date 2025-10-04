import { MenuProvider, SideBar } from "~/components/side-bar";
import { Dashboard } from "~/components/dashboard";


export function Welcome() {
  return (
    <div className="flex flex-row">
      <MenuProvider>
        <SideBar />
        <Dashboard />
      </MenuProvider>
    </div>
  );
}

