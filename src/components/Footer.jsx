import Image from "next/image";
import Link from "next/link";
import {
  FaLightbulb,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/ideaVault.png"
                alt="IdeaVault Logo"
                width={160}
                height={52}
                className="h-[52px] w-auto object-contain"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600 dark:text-gray-400">
              A platform where innovative minds share startup ideas, exchange
              feedback, and build better ideas together.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Platform
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/ideas"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-400"
                >
                  Explore Ideas
                </Link>
              </li>
              <li>
                <Link
                  href="/add-idea"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-400"
                >
                  Add Idea
                </Link>
              </li>

              <li>
                <Link
                  href="/my-ideas"
                  className="text-gray-600 transition hover:text-blue-600 dark:text-gray-400"
                >
                  My Ideas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-400">
                  support@ideavault.com
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-400">
                  +880 1403873664
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-600" />
                <span className="text-gray-600 dark:text-gray-400">
                  Bangladesh
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Follow Us
            </h3>

            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Stay connected and discover new startup ideas and innovation.
            </p>

            <ul className="mt-5 flex items-center gap-3">
              <li
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-gray-700 dark:text-gray-400"
              >
                <FaFacebook />
              </li>

              <li
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-gray-700 dark:text-gray-400"
              >
                <FaGithub />
              </li>

              <li
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-gray-700 dark:text-gray-400"
              >
                <FaLinkedin />
              </li>

              <li
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-gray-700 dark:text-gray-400"
              >
                <FaXTwitter />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
            <p className="text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} IdeaVault. All rights reserved.
            </p>

            <div className="flex gap-5">
              <span className="text-gray-500 dark:text-gray-400">Privacy</span>

              <span className="text-gray-500 dark:text-gray-400">Terms</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
