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
  subNavv?: NavItem[]; // for level 3 under certain items
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
    const lastSegment = pathname?.split("/").filter(Boolean).pop();
    let path = lastSegment || "home";
    setActiveItem(path);
  }, [pathname]);

  const [openMenus, setOpenMenus] = useState<{
    level1: string | null;
    level2: string | null;
    level3: string | null;
  }>({
    level1: null,
    level2: null,
    level3: null
  });

  const toggleLevel1 = (itemId: string) => {
    setOpenMenus({ level1: itemId === openMenus.level1 ? null : itemId, level2: null, level3: null });
  };

  const toggleLevel2 = (itemId: string) => {
    setOpenMenus(prev => ({ ...prev, level2: itemId === prev.level2 ? null : itemId, level3: null }));
  };

  const toggleLevel3 = (itemId: string) => {
    setOpenMenus(prev => ({ ...prev, level3: itemId === prev.level3 ? null : itemId }));
  };

  const handleItemClick = (href: string) => {
    onItemClick(href);
    setIsMobileMenuOpen(false);
  };

  const renderNavItems = (items: NavItem[], level = 1) => {
  return items.map((item) => {
    const idStr = item.id.toString();

    // Get submenu at current level
    const children =
      level === 1 || level === 2
        ? item.subNav
        : level === 3
        ? item.subNavv
        : undefined;

    const hasChildren = children && children.length > 0;

    const isOpen =
      level === 1
        ? openMenus.level1 === idStr
        : level === 2
        ? openMenus.level2 === idStr
        : level === 3
        ? openMenus.level3 === idStr
        : false;

    const toggleFn =
      level === 1
        ? toggleLevel1
        : level === 2
        ? toggleLevel2
        : toggleLevel3;

    const paddingClass = level === 1 ? "px-4" : level === 2 ? "px-8" : "px-12";
    const hoverText = onTop ? "hover:text-color2" : "hover:text-color1";
    const textColor =
      activeItem === item.href
        ? "text-color1"
        : onTop
        ? "text-white"
        : "text-black";

    return (
      <div key={`${level}-${item.id}`}>
        <div
          className={`flex items-center justify-between ${paddingClass} py-2 cursor-pointer ${textColor} ${hoverText}`}
          onClick={() => {
            if (hasChildren) {
              toggleFn(idStr);
            } else {
              handleItemClick(item.href);
            }
          }}
        >
          {level === 1 ? (
            <Link href={item.href} className="font transition-all duration-300">
              {item.label}
            </Link>
          ) : (
            <span className="whitespace-nowrap">{item.label}</span>
          )}
          {hasChildren && (
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          )}
        </div>

        {/* RECURSIVE: render subNav at level 1 and 2, subNavv at level 3 */}
        {hasChildren && isOpen && (
          <div className="w-full">
            {renderNavItems(children, level + 1)}
          </div>
        )}
      </div>
    );
  });
};


  return (
    <ul className="w-full flex flex-col">
      {navigationMenu?.primaryMenu?.map((item: NavItem) => (
        <li key={item.id} className="border-b border-gray-100/20 last:border-none">
          <div className="w-full">{renderNavItems([item], 1)}</div>
        </li>
      ))}
      {navigationMenu?.secondaryMenu?.map((item: NavItem) => (
        <li key={item.id} className="border-b border-gray-100/20 last:border-none">
          <div className="w-full">{renderNavItems([item], 1)}</div>
        </li>
      ))}
    </ul>
  );
};

export default MenuMobile;
