"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  HiHome, 
  HiInformationCircle, 
  HiMail, 
  HiNewspaper, 
  HiUserGroup,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineLogin,
  HiOutlineMenu,
  HiOutlineX
} from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname(); // ✅ get current route

    const navLinks = [
        { href: "/", label: "Home", icon: HiHome },
        { href: "/about", label: "About", icon: HiInformationCircle },
        { href: "/contact", label: "Contact", icon: HiMail },
        { href: "/blogs", label: "Blogs", icon: HiNewspaper },
        { href: "/dashboard", label: "Dashboard", icon: HiUserGroup },
    ];

    return (
        <div className="navbar bg-base-100 shadow-lg border-b border-base-200 sticky top-0 z-50">
            
            {/* Navbar Start */}
            <div className="navbar-start">
                
                {/* Mobile Menu */}
                <div className="dropdown">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="btn btn-ghost lg:hidden"
                    >
                        {isMenuOpen ? (
                            <HiOutlineX className="h-5 w-5" />
                        ) : (
                            <HiOutlineMenu className="h-5 w-5" />
                        )}
                    </button>

                    {isMenuOpen && (
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-xl border border-base-200">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link 
                                        href={link.href}
                                        className={`gap-2 ${
                                            pathname === link.href 
                                                ? "active bg-primary/10 text-primary" 
                                                : ""
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <link.icon className="h-4 w-4" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Logo */}
                <Link href="/" className="btn btn-ghost text-xl gap-2">
                    <span className="font-bold text-primary">
                        Next App
                    </span>
                </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link 
                                href={link.href}
                                className={`gap-2 ${
                                    pathname === link.href 
                                        ? "bg-primary/10 text-primary font-semibold" 
                                        : "hover:bg-base-200"
                                }`}
                            >
                                <link.icon className="h-4 w-4" />
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Navbar End */}
            <div className="navbar-end gap-2">
                
                {/* Search */}
                <button className="btn btn-ghost btn-circle hidden sm:flex">
                    <HiOutlineSearch className="h-5 w-5" />
                </button>
                
                {/* User */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
                        <div className="w-10 rounded-full bg-primary text-white flex items-center justify-center">
                            <HiOutlineUser className="h-5 w-5" />
                        </div>
                    </div>

                    <ul className="dropdown-content menu bg-base-100 rounded-box z-50 w-56 p-2 shadow-xl border border-base-200 mt-3">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li className="divider my-0"></li>
                        <li><a className="text-error">Logout</a></li>
                    </ul>
                </div>
                
                {/* Login */}
                <Link href="/login" className="btn btn-primary gap-2">
                    <HiOutlineLogin className="h-4 w-4" />
                    Sign in
                </Link>
            </div>
        </div>
    );
};

export default Navbar;