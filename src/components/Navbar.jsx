"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import {
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const handleLogout =async ()=>{
await authClient.signOut();
  }
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto flex min-h-[68px] items-center justify-between gap-2 px-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src="/ideaVault.png"
            alt="IdeaVault Logo"
            width={160}
            height={52}
            className="h-[46px] w-auto object-contain sm:h-[52px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition hover:text-primary dark:text-white"
          >
            Home
          </Link>

          <Link
            href="/ideas"
            className="text-sm font-medium transition hover:text-primary dark:text-white"
          >
            Ideas
          </Link>

          <Link
            href="/add-idea"
            className="text-sm font-medium transition hover:text-primary dark:text-white"
          >
            Add Idea
          </Link>

          <Link
            href="/my-ideas"
            className="text-sm font-medium transition hover:text-primary dark:text-white"
          >
            My Ideas
          </Link>

          <Link
            href="/my-interactions"
            className="text-sm font-medium transition hover:text-primary dark:text-white"
          >
            My Interactions
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {mounted ? theme === "dark" ? <FaSun /> : <FaMoon /> : <FaMoon />}
          </button>

          {/* Desktop User */}
          {user ? (
            <div className="relative hidden sm:block">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />

                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <span className="hidden max-w-[120px] truncate text-sm font-medium md:block">
                  {user?.name || "User"}
                </span>

                <FaChevronDown
                  className={`shrink-0 text-xs transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    <FaUser className="text-sm" />
                    <span>Profile</span>
                  </Link>

                  <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50 dark:hover:bg-red-950">
                    <FaSignOutAlt className="text-sm" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Desktop Login/Register */
            <div className="hidden items-center gap-3 sm:flex">
              <Link
                href="/login"
                className="text-sm font-medium text-gray-900 transition hover:text-primary dark:text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={closeMenu}
                className="text-sm font-medium text-gray-900 transition hover:text-primary dark:text-white"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 sm:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-3 py-4 dark:border-gray-800 dark:bg-gray-950 sm:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm hover:bg-gray-100 hover:text-primary dark:text-white dark:hover:bg-gray-900"
            >
              Home
            </Link>

            <Link
              href="/ideas"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm hover:bg-gray-100 hover:text-primary dark:text-white dark:hover:bg-gray-900"
            >
              Ideas
            </Link>

            <Link
              href="/add-idea"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm hover:bg-gray-100 hover:text-primary dark:text-white dark:hover:bg-gray-900"
            >
              Add Idea
            </Link>

            <Link
              href="/my-ideas"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm hover:bg-gray-100 hover:text-primary dark:text-white dark:hover:bg-gray-900"
            >
              My Ideas
            </Link>

            <Link
              href="/my-interactions"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm hover:bg-gray-100 hover:text-primary dark:text-white dark:hover:bg-gray-900"
            >
              My Interactions
            </Link>

            {/* Mobile Login/Register */}
            {!user && (
              <div className="mt-2 flex gap-2 border-t border-gray-200 pt-3 dark:border-gray-800">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-center text-sm font-medium dark:border-gray-700 dark:text-white"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={closeMenu}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-center text-sm font-medium text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile User */}
            {user && (
              <div className="mt-2 border-t border-gray-200 pt-3 dark:border-gray-800">
                <div className="flex items-center gap-3 px-4 py-2">
                  <Avatar>
                    <Avatar.Image alt={user?.name} src={user?.image} />

                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>

                  <span className="truncate text-sm font-medium">
                    {user?.name}
                  </span>
                </div>

                <Link
                  href="/profile"
                  onClick={closeMenu}
                  className="mt-2 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900"
                >
                  <FaUser />
                  <span>Profile</span>
                </Link>

                <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
