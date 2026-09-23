import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrendingIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/trending-ideas`);

  const trendingData = await res.json();
  return (
    <section className="mx-auto max-w-7xl mt-5 lg:3 px-4 pb-16 sm:px-6 lg:px-8 ">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white">
            Trending Ideas
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Discover popular startup ideas from the community
          </p>
        </div>
      </div>

      {trendingData.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trendingData.map((idea) => (
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
            No Trending Ideas
          </h3>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            There are no ideas available right now.
          </p>
        </div>
      )}
    </section>
  );
};

export default TrendingIdeas;
