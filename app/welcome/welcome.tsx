import { MenuProvider, SideBar } from "~/components/side-bar";
import { Outlet } from "react-router";

export default function Welcome() {
  return (
    <div className="flex flex-row">
      <MenuProvider>
        <SideBar />
        <main className="flex-1">
          <Outlet />
        </main>
      </MenuProvider>
    </div>
  );
}

