import { AcademicCapIcon, CurrencyDollarIcon, HomeIcon, UserGroupIcon, UserIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import React, { createContext, useState, useContext, use } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface MenuItemType {
    icon: React.ReactElement;
    name: string;
    href: string;
    current: boolean;
}

export const menuItems: MenuItemType[] = [
    { icon: <HomeIcon className="size-6" />, name: "Dashboard", href: "/", current: false },
    { icon: <AcademicCapIcon className="size-6" />, name: "Students", href: "/students", current: true },
    { icon: <UserPlusIcon className="size-6" />, name: "Add Student", href: "/add-student", current: false },
    { icon: <UserGroupIcon className="size-6" />, name: "Teachers", href: "/teachers", current: false },
    { icon: <CurrencyDollarIcon className="size-6" />, name: "Finance", href: "/finance", current: false },
    { icon: <UserIcon className="size-6" />, name: "User", href: "/user", current: false },
];

type MenuContextType = {
    selectedItem: MenuItemType;
    setSelectedItem: (item: MenuItemType) => void;
};

const MenuContext = createContext<MenuContextType>({
    selectedItem: menuItems.find(item => item.current) || menuItems[0],
    setSelectedItem: () => { }
});

export function useMenu() {
    return useContext(MenuContext);
}

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [selectedItem, setSelectedItem] = useState<MenuItemType>(() => {
        return menuItems.find(item => item.current) || menuItems[0];
    });

    return (
        <MenuContext.Provider value={{ 
            selectedItem, 
            setSelectedItem: (item: MenuItemType) => setSelectedItem(item) 
        }}>
            {children}
        </MenuContext.Provider>
    );
}

export function SideBar() {
    const [menuState, setMenuState] = useState(menuItems);
    const { selectedItem, setSelectedItem } = useMenu();

    const handleMenuItemClick = (clickedItem: MenuItemType) => {
        const updatedMenu = menuState.map(item => ({
            ...item,
            current: item.name === clickedItem.name
        }));

        setMenuState(updatedMenu);
        setSelectedItem(clickedItem);
        const navigate = useNavigate();
        navigate(clickedItem.href);
    };

    return (
        <aside className="w-70 bg-[#4d44b5] text-white py-8 pl-8 font-sans">
            <div className="flex flex-row items-center gap-2 font-bold text-2xl text-white select-none">
                <span className="flex flex-1 items-center justify-center rounded-xl bg-[#f97316] p-1">
                    A
                </span>
                <h2 className="flex-4 p-2">Akademi</h2>
            </div>
            <nav>
                <ul className="mt-4 font-medium">
                    {menuState.map((item) => (
                        <li key={item.name} 
                            className={
                                `flex p-4 
                                hover:bg-[#f3f4ff] hover:text-[#4d44b5] 
                                rounded-s-4xl transition-all duration-200 
                                ${item.current ? "bg-[#f3f4ff] text-[#4d44b5]" : "bg-[#4d44b5] text-[#c1bbeb]"} 
                                cursor-pointer`}
                            onClick={() => handleMenuItemClick(item)}>
                            <Link to={item.href} className="flex items-center gap-2 text-sm w-full">
                                {item.icon}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}