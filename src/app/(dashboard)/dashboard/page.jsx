"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  HiHome,
  HiChartBar,
  HiUsers,
  HiShoppingBag,
  HiDocumentText,
  HiCog,
  HiMail,
  HiCalendar,
  HiOutlineLogout,
  HiUserCircle,
  HiTemplate,
  HiFolder,
  HiStar
} from "react-icons/hi";
import { useContext, useState } from "react";
// import { postContext } from "@/app/context/postContext";

const Sidebar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === '/dashboard') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  const toggleMobileSidebar = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: HiHome },
    { name: "Analytics", href: "/dashboard/analytics", icon: HiChartBar },
    { name: "Users", href: "/dashboard/users", icon: HiUsers },
    { name: "Products", href: "/dashboard/products", icon: HiShoppingBag },
    { name: "Orders", href: "/dashboard/orders", icon: HiFolder, badge: "8" },
    { name: "Messages", href: "/dashboard/messages", icon: HiMail, badge: "3" },
    { name: "Calendar", href: "/dashboard/calendar", icon: HiCalendar },
    { name: "Documents", href: "/dashboard/documents", icon: HiDocumentText },
    { name: "Templates", href: "/dashboard/templates", icon: HiTemplate },
    { name: "Favorites", href: "/dashboard/favorites", icon: HiStar },
    { name: "Settings", href: "/dashboard/settings", icon: HiCog },
  ];

  // const posts = useContext(postContext)
  // console.log(posts);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary text-white shadow-lg hover:bg-primary-focus transition-colors"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={closeMobileSidebar}></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-base-100 shadow-2xl overflow-y-auto z-50 transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Logo Section */}
        <div className="p-4 border-b border-base-200">
          <Link href="/dashboard" className="flex items-center gap-2" onClick={closeMobileSidebar}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-3.442 1.476 3.442 1.476a1 1 0 01-.788 1.838l-4-1.714a.999.999 0 01-.356-.257l-2.5-1.5v2.98a1 1 0 00.5.866l7 3.5a1 1 0 00.788 0l7-3.5a1 1 0 00.5-.866v-2.98l-2.5 1.5a.999.999 0 01-.356.257l-4 1.714a1 1 0 11-.788-1.838l3.442-1.476-3.442-1.476a1 1 0 11.788-1.838l4 1.714c.14.06.26.15.356.257l2.5 1.5v-2.98a1 1 0 00-.5-.866l-7-3z" />
              </svg>
            </div>
            <span className="font-bold text-lg">Dashboard</span>
          </Link>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-base-200">
          <div className="flex items-center gap-2">
            <HiUserCircle className="w-10 h-10 text-primary" />
            <div>
              <p className="font-semibold text-sm">John Doe</p>
              <p className="text-xs text-base-content/50">Admin</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={closeMobileSidebar}
                  className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-base-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="badge badge-primary badge-sm">{item.badge}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-base-200">
          <button
            onClick={() => console.log("Logout")}
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-error/10 text-error transition-colors"
          >
            <HiOutlineLogout className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Content Padding */}
      <div className="lg:ml-64"></div>
    </>
  );
};

export default Sidebar;