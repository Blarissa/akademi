import { AcademicCapIcon, Bars3Icon, CurrencyDollarIcon, HomeIcon, UserGroupIcon, UserIcon, UserPlusIcon } from '@heroicons/react/24/outline'
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
    selectedItem: menuItems.find(item => item.current) || menuItems[1],
    setSelectedItem: () => { }
});

export function useMenu() {
    return useContext(MenuContext);
}

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [selectedItem, setSelectedItem] = useState<MenuItemType>(() => {
        return menuItems.find(item => item.current) || menuItems[1];
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
    const [isOpen, setIsOpen] = useState(false);
    const { selectedItem, setSelectedItem } = useMenu();
    const navigate = useNavigate(); // Use o hook no nível superior do componente

    const handleMenuItemClick = (clickedItem: MenuItemType) => {
        const updatedMenu = menuState.map(item => ({
            ...item,
            current: item.name === clickedItem.name
        }));

        setMenuState(updatedMenu);
        setSelectedItem(clickedItem);
        setIsOpen(false);
        
        if (["Dashboard", "Teachers", "Finance", "User"].includes(clickedItem.name)) 
            navigate("/page-not-found");
        else 
            navigate(clickedItem.href);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button 
                className={`lg:hidden fixed top-7 left-4 z-50 bg-[#4d44b5] p-2 rounded-md text-white 
                    ${isOpen ? 'top-[38px] left-52' : ''}`}
                onClick={toggleSidebar}
                aria-label="Abrir menu"
            >
                <Bars3Icon className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} />
                {isOpen ? '✕' : ''}
            </button>

            {isOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <aside className={`
                fixed lg:static inset-y-0 left-0 z-40
                transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:translate-x-0 transition-transform duration-300 ease-in-out
                bg-[#4d44b5] text-white py-8 pl-8 font-sans overflow-y-auto w-64 md:w-72 lg:w-70}
            `}>
                <div className={`flex flex-row items-center gap-2 font-bold text-2xl text-white select-none`}>
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#f97316]">
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
                                <div className="flex items-center gap-2 text-sm w-full">
                                    <div className="flex-shrink-0">{item.icon}</div>
                                    <span className="truncate">{item.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
}