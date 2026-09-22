import Link from "next/link";
import { FaArrowLeft, FaLightbulb } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB]">
          <FaLightbulb size={36} />
        </div>

        <p className="mt-8 text-7xl font-extrabold text-[#2563EB]">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold text-[#0F172A] dark:text-white">
          Idea Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-gray-600 dark:text-gray-400">
          The page or idea you are looking for does not exist or may have
          been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white transition hover:bg-[#1D4ED8]"
        >
          <FaArrowLeft size={14} />
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

