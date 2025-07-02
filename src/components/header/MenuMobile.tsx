import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { navigationMenu } from "@/data/homeData";
import { usePathname } from "next/navigation";

interface NavItem {
  id: number | string;
  label: string;
  href: string;
  subNav?: NavItem[];
}

interface MenuMobileProps {
  setIsMobileMenuOpen: (value: boolean) => void;
  onItemClick: (href: string) => void;
  onTop: boolean;
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  setIsMobileMenuOpen,
  onItemClick,
  onTop
}) => {

   const [activeItem, setActiveItem] = useState<string | null>(null);
  
    const pathname = usePathname();
  
    useEffect(() => {
      // Split the pathname and get the last part
      const lastSegment = pathname?.split("/").filter(Boolean).pop();
  
      let path = lastSegment || "home";
      // Store the last word (segment) in the state
      setActiveItem(path);
    }, [pathname]);
  // Track both level 1 and level 2 open submenus
  const [openMenus, setOpenMenus] = useState<{
    level1: string | null;
    level2: string | null;
  }>({
    level1: null,
    level2: null
  });

  const toggleLevel1 = (itemId: string) => {
    setOpenMenus(prev => ({
      level1: prev.level1 === itemId ? null : itemId,
      level2: null // Reset level 2 when toggling level 1
    }));
  };

  const toggleLevel2 = (itemId: string) => {
    setOpenMenus(prev => ({
      ...prev,
      level2: prev.level2 === itemId ? null : itemId
    }));
  };

  const handleItemClick = (href: string) => {
    onItemClick(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <ul className="w-full flex flex-col">
       {navigationMenu?.primaryMenu?.map((item: NavItem) => (
        <li key={item.id} className="border-b border-gray-100/20 last:border-none">
          <div className="w-full">
            {/* Level 1 Menu Item */}
            <div
              className={`flex items-center justify-between px-4 py-3 cursor-pointer
                ${activeItem === item.href ? " text-color1" : ""}
                ${onTop ? "text-white hover:text-color2" : "text-black hover:text-color1"}
              `}
              onClick={() => {
                if (item.subNav && item.subNav.length > 0) {
                  toggleLevel1(item.id.toString());
                } else {
                  handleItemClick(item.href);
                }
              }}
            >
              <Link href={item.href} className="font transition-all duration-300">
                {item.label}
              </Link>
              {item.subNav && item.subNav.length > 0 && (
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openMenus.level1 === item.id.toString() ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
            </div>

            {/* Level 1 Submenu */}
            {item.subNav && openMenus.level1 === item.id.toString() && (
              <div
                className={`w-full ${
                  onTop ? " " : "bg-white"
                }`}
              >
                {item.subNav.map((subItem: NavItem) => (
                  <div key={subItem.id}>
                    {/* Level 2 Menu Item */}
                    <div
                      className={`flex items-center justify-between px-8 py-2 cursor-pointer
                        ${activeItem === subItem.href ? "  text-color1" : ""}
                        ${onTop ? "text-white hover:text-color2" : "text-black hover:text-color1"}
                      `}
                      onClick={() => {
                        if (subItem.subNav && subItem.subNav.length > 0) {
                          toggleLevel2(subItem.id.toString());
                        } else {
                          handleItemClick(subItem.href);
                        }
                      }}
                    >
                      <span className="whitespace-nowrap">{subItem.label}</span>
                      {subItem.subNav && subItem.subNav.length > 0 && (
                        <IoIosArrowDown
                          className={`transition-transform duration-300 ${
                            openMenus.level2 === subItem.id.toString() ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      )}
                    </div>

                    {/* Level 2 Submenu */}
                    {subItem.subNav && openMenus.level2 === subItem.id.toString() && (
                      <div
                        className={`w-full `}
                      >
                        {subItem.subNav.map((level2Item: NavItem) => (
                          <Link
                            key={level2Item.id}
                            href={level2Item.href}
                            className={`block px-12 py-2 transition-all duration-300
                              ${activeItem === level2Item.href ? " text-color1" : ""}
                              ${onTop ? "text-white hover:text-color2" : "text-black hover:text-color1"}
                            `}
                            onClick={() => handleItemClick(level2Item.href)}
                          >
                            <span className="whitespace-nowrap">{level2Item.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
      {navigationMenu?.secondaryMenu?.map((item: NavItem) => (
        <li key={item.id} className="border-b border-gray-100/20 last:border-none">
          <div className="w-full">
            {/* Level 1 Menu Item */}
            <div
              className={`flex items-center justify-between px-4 py-3 cursor-pointer
                ${activeItem === item.href ? " text-color1" : ""}
                ${onTop ? "text-white hover:text-color2" : "text-black hover:text-color1"}
              `}
              onClick={() => {
                if (item.subNav && item.subNav.length > 0) {
                  toggleLevel1(item.id.toString());
                } else {
                  handleItemClick(item.href);
                }
              }}
            >
              <Link href={item.href} className="font transition-all duration-300">
                {item.label}
              </Link>
              {item.subNav && item.subNav.length > 0 && (
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openMenus.level1 === item.id.toString() ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}
            </div>

            {/* Level 1 Submenu */}
            {item.subNav && openMenus.level1 === item.id.toString() && (
              <div
                className={`w-full ${
                  onTop ? " " : "bg-white"
                }`}
              >
                {item.subNav.map((subItem: NavItem) => (
                  <div key={subItem.id}>
                    {/* Level 2 Menu Item */}
                    <div
                      className={`flex items-center justify-between px-8 py-2 cursor-pointer
                        ${activeItem === subItem.href ? "  text-color1" : ""}
                        ${onTop ? "text-white hover:text-color2" : "text-black hover:text-color1"}
                      `}
                      onClick={() => {
                        if (subItem.subNav && subItem.subNav.length > 0) {
                          toggleLevel2(subItem.id.toString());
                        } else {
                          handleItemClick(subItem.href);
                        }
                      }}
                    >
                      <span className="whitespace-nowrap">{subItem.label}</span>
                      {subItem.subNav && subItem.subNav.length > 0 && (
                        <IoIosArrowDown
                          className={`transition-transform duration-300 ${
                            openMenus.level2 === subItem.id.toString() ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      )}
                    </div>

                    {/* Level 2 Submenu */}
                    {subItem.subNav && openMenus.level2 === subItem.id.toString() && (
                      <div
                        className={`w-full `}
                      >
                        {subItem.subNav.map((level2Item: NavItem) => (
                          <Link
                            key={level2Item.id}
                            href={level2Item.href}
                            className={`block px-12 py-2 transition-all duration-300
                              ${activeItem === level2Item.href ? " text-color1" : ""}
                              ${onTop ? "text-white hover:text-color2" : "text-black hover:text-color1"}
                            `}
                            onClick={() => handleItemClick(level2Item.href)}
                          >
                            <span className="whitespace-nowrap">{level2Item.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
      
    </ul>
  );
};

export default MenuMobile;