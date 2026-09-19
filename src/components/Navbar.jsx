"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  // Detect client-side mounting without useEffect + setState
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
      <div className="mx-auto flex  items-center justify-between px-2 py-2 sm:px-6">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/ideaVault.png"
            alt="IdeaVault Logo"
            width={160}
            height={52}
            className="h-[52px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
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
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {mounted ? theme === "dark" ? <FaSun /> : <FaMoon /> : <FaMoon />}
          </button>

          {/* Login */}
          <Link
            href="/login"
            className="hidden text-sm font-medium text-gray-900 transition hover:text-primary dark:text-white sm:block"
          >
            Login
          </Link>

          {/* Register */}
          <Link
            href="/register"
            onClick={closeMenu}
            className="hidden text-sm font-medium text-gray-900 transition hover:text-primary dark:text-white sm:block"
          >
            Register
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950 lg:hidden">
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

            {/* Mobile Login & Register */}
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
