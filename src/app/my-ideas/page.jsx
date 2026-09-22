import EditIdeaModal from "@/components/EditMyIdeaForm";
import { MyIdeasDeleteAlert } from "@/components/MyIdeasDeleteAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaLightbulb, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "My Ideas | IdeaVault",
  description:
    "Manage and edit your startup ideas.",
};

const MyIdeasPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch("http://localhost:8080/my-idea", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const ideas = await res.json();
  //   const ideas = [];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="relative mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          {/* Decorative Background */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                My Ideas
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-400">
                Manage, edit, and keep track of all the ideas you have shared
                with the IdeaVault community.
              </p>
            </div>

            <Link
              href="/add-idea"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
            >
              {" "}
              <FaPlus className="text-sm transition-transform duration-300 group-hover:rotate-90" />{" "}
              Add New Idea{" "}
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-10">
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-primary/5 transition-all duration-300 group-hover:bg-primary/10" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                <FaLightbulb />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Total Ideas
                </p>

                <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
                  {ideas.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ideas */}
        {ideas.length > 0 ? (
          <section>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Your Ideas
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Manage your submitted ideas.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ideas.map((idea) => (
                <article
                  key={idea._id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  {/* Image */}

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

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="line-clamp-1 text-xl font-bold text-slate-900 dark:text-white">
                      {idea.title}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {idea.shortDescription}
                    </p>

                    {/* Actions */}
                    <div className="mt-5 flex items-center justify-end gap-5">
                      <EditIdeaModal idea={idea} />

                      <MyIdeasDeleteAlert id={idea._id} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : (
          /* Empty State */
          <section className="relative overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
            {/* Decorative circles */}
            <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-indigo-500/5 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-3xl text-primary">
                <FaLightbulb />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                No ideas yet
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-400">
                You have not shared any ideas yet. Turn your creativity into an
                idea and share it with the IdeaVault community.
              </p>

              <Link
                href="/add-idea"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
              >
                {" "}
                <FaPlus className="transition-transform duration-300 group-hover:rotate-90" />{" "}
                Create Your First Idea{" "}
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />{" "}
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default MyIdeasPage;
