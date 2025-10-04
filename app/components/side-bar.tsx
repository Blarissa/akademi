import { AcademicCapIcon, CurrencyDollarIcon, HomeIcon, UserGroupIcon, UserIcon, UserPlusIcon } from '@heroicons/react/24/outline'

export function SideBar() {
    return (
        <div className="w-70 h-screen bg-[#4d44b5] text-white py-16 pl-8 font-sans">
            <div className="flex flex-row items-center gap-2 font-bold text-2xl text-white select-none">
                <span className="flex flex-1 items-center justify-center rounded-xl bg-[#f97316] w-fit h-fit p-1">
                    A
                </span>
                <h2 className="flex-4 p-2">Akademi</h2>
            </div>
            <ul className="mt-4 font-medium">
                {menuItems.map((item) => (
                    <li key={item.name} 
                        className={
                            `flex p-4 hover:bg-[gray-700] rounded-s-4xl ${item.current ? 
                            "bg-[#f3f4ff] text-[#4d44b5]" : "text-[#c1bbeb]"}`}
                        onClick={() => {
                            item.current = true;
                            itemSelected = item;
                        }}>
                        <a href={item.href} className="flex items-center gap-2 text-sm">
                            {item.icon}
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const menuItems = [
    { icon: <HomeIcon className="size-6"/>, name: "Dashboard", href: "#", current: false },
    { icon: <AcademicCapIcon className="size-6"/>, name: "Students", href: "#", current: true },
    { icon: <UserPlusIcon className="size-6"/>, name: "Add Student", href: "#", current: false },
    { icon: <UserGroupIcon className="size-6"/>, name: "Teachers", href: "#", current: false },
    { icon: <CurrencyDollarIcon className="size-6"/>, name: "Finance", href: "#", current: false },
    { icon: <UserIcon className="size-6"/>, name: "User", href: "#", current: false },
];

let itemSelected = menuItems.find(item => item.current);

export { itemSelected };


