import { MenuProvider, SideBar } from "~/components/side-bar";
import { Outlet } from "react-router";

export default function Welcome() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <MenuProvider>
        <SideBar />
        <main className="flex-1 w-full overflow-x-hidden bg-[#f3f4ff]">
          <Outlet />
        </main>
      </MenuProvider>
    </div>
  );
}

