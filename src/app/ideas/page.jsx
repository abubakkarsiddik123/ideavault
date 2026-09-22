import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "All Ideas | IdeaVault",
  description:
    "Explore startup ideas shared by the IdeaVault community.",
};

const IdeaPage = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";
  const category = params?.category || "";

  const query = new URLSearchParams();

  if (search) {
    query.set("search", search);
  }

  if (category) {
    query.set("category", category);
  }

  const queryString = query.toString();

  const res = await fetch(
    `http://localhost:8080/idea${queryString ? `?${queryString}` : ""}`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <section className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mt-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl lg:text-5xl">
              Discover Startup Ideas
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
              Explore innovative startup ideas, discover new opportunities, and
              get inspired by creative entrepreneurs from the community.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <form
          method="GET"
          className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:flex-row"
        >
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search by idea title..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
          />

          <select
            name="category"
            defaultValue={category}
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white md:w-56"
          >
            <option value="">All Categories</option>
            <option value="Tech">Tech</option>
            <option value="AI">AI</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Finance">Finance</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Environment">Environment</option>
            <option value="Social Impact">Social Impact</option>
          </select>

          <button
            type="submit"
            className="rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
          >
            Search
          </button>
        </form>
      </section>

      {/* Ideas */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white">
              Latest Ideas
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Explore ideas shared by the community
            </p>
          </div>

          <span className="rounded-full bg-[#2563EB]/10 px-4 py-2 text-sm font-semibold text-[#2563EB]">
            {data.length} Ideas
          </span>
        </div>

        {data.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((idea) => (
              <section
                key={idea._id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {idea.imageURL ? (
                    <Image
                      src={idea.imageURL}
                      alt={idea.title || "Startup idea"}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm text-gray-400">
                        No image available
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="line-clamp-2 text-xl font-bold text-[#0F172A] transition group-hover:text-[#2563EB] dark:text-white">
                    {idea.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {idea.shortDescription || "No description available."}
                  </p>

                  {idea.category && (
                    <div className="mt-4">
                      <span className="rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-semibold text-[#2563EB]">
                        {idea.category}
                      </span>
                    </div>
                  )}

                  {Array.isArray(idea.tags) && idea.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {idea.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-md bg-[#4F46E5]/10 px-2.5 py-1 text-xs font-medium text-[#4F46E5]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Budget
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#0F172A] dark:text-gray-200">
                        {idea.estimatedBudget
                          ? `$${Number(idea.estimatedBudget).toLocaleString()}`
                          : "Not specified"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Audience
                      </p>

                      <p className="mt-1 line-clamp-1 text-sm font-semibold text-[#0F172A] dark:text-gray-200">
                        {idea.targetAudience || "Everyone"}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/ideas/${idea._id}`}
                    className="mt-5 flex w-full items-center justify-center rounded-lg bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
                  >
                    View Details
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center dark:border-gray-700 dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-[#0F172A] dark:text-white">
              No Ideas Found
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              No ideas match your search or selected category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default IdeaPage;
