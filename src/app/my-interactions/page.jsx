import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { FaRegCommentDots } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

const MyInteractionPage = async () => {
  const tokenResult = await auth.api.getToken({
    headers: await headers(),
  });

  const token = tokenResult?.token;

  const res = await fetch("http://localhost:8080/my-comments", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900/40 dark:bg-red-950/20">
          <h2 className="font-semibold text-red-600 dark:text-red-400">
            Failed to load interactions
          </h2>

          <p className="mt-2 text-sm text-red-500/80 dark:text-red-400/70">
            Something went wrong while loading your comments.
          </p>
        </div>
      </div>
    );
  }

  const comments = await res.json();

  return (
    <main className="min-h-screen bg-gray-50/50 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <FiMessageCircle />
                Your Activity
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                My Interactions
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                View the ideas you have interacted with through comments.
              </p>
            </div>

            {/* Total */}
            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
                <FaRegCommentDots className="text-lg text-blue-600 dark:text-blue-400" />
              </div>

              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Total Comments
                </p>

                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {comments.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {comments.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-500/10">
              <FaRegCommentDots className="text-3xl text-blue-600 dark:text-blue-400" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
              No interactions yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
              You have not commented on any idea yet. Explore ideas and share
              your thoughts with the community.
            </p>
          </div>
        ) : (
          /* Comment List */
          <div className="space-y-5">
            {comments.map((item) => (
              <article
                key={item._id}
                className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-6 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900"
              >
                {/* Top */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
                    <FaRegCommentDots className="text-lg text-blue-600 dark:text-blue-400" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Commented Idea
                    </p>

                    <h2 className="mt-1 truncate text-lg font-bold text-gray-900 dark:text-white">
                      {item.ideaTitle || "Unknown Idea"}
                    </h2>
                  </div>
                </div>

                {/* Comment */}
                <div className="mt-5 rounded-2xl bg-gray-50 p-4 dark:bg-gray-800/60">
                  <div className="flex gap-3">
                    <span className="text-2xl leading-none text-blue-300 dark:text-blue-700">
                      “
                    </span>

                    <p className="whitespace-pre-wrap text-sm leading-7 text-gray-700 dark:text-gray-300">
                      {item.comment}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    Comment
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyInteractionPage;