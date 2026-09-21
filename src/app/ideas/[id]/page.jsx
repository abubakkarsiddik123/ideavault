import React from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaUser,
  FaTag,
  FaDollarSign,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import Image from "next/image";
import CommentForm from "@/components/CommentForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const IdeaDetailsPage = async ({ params }) => {
  const { id } = await params;
   const {token}=await auth.api.getToken({
    headers:await headers()
   })
  
   console.log(token,"token");
  

  const res = await fetch(`http://localhost:8080/idea/${id}`, {
   headers:{
      authorization:`Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch idea");
  }

  const data = await res.json();

  const idea = data.data || data;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/ideas"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-primary dark:text-gray-400"
        >
          <FaArrowLeft />
          Back to Ideas
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          {/* Image */}
          <div className="relative h-72 w-full overflow-hidden bg-gray-100 md:h-96 dark:bg-gray-800">
            <Image
              src={idea.imageURL}
              alt={idea.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />

            {/* Category */}
            <div className="absolute left-5 top-5">
              <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow">
                {idea.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              {idea.title}
            </h1>

            {/* Short Description */}
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              {idea.shortDescription}
            </p>

            {/* Author + Date */}
            <div className="mt-6 flex flex-wrap items-center gap-5 border-b border-gray-200 pb-6 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FaUser />
                </div>

                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Created by
                  </p>

                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    {idea.authorName || "Anonymous"}
                  </p>
                </div>
              </div>

              <div className="text-sm text-gray-500 dark:text-gray-400">
                {idea.createdAt
                  ? new Date(idea.createdAt).toLocaleDateString()
                  : ""}
              </div>
            </div>

            {/* Important Information */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Budget */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30">
                    <FaDollarSign />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Estimated Budget
                    </p>

                    <p className="font-semibold text-gray-900 dark:text-white">
                      {idea.estimatedBudget || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Target Audience */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                    <FaUsers />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Target Audience
                    </p>

                    <p className="font-semibold text-gray-900 dark:text-white">
                      {idea.targetAudience || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Category */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30">
                    <FaLightbulb />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Category
                    </p>

                    <p className="font-semibold text-gray-900 dark:text-white">
                      {idea.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                About This Idea
              </h2>

              <p className="mt-4 leading-8 text-gray-600 dark:text-gray-400">
                {idea.detailedDescription ||
                  "No detailed description available."}
              </p>
            </section>

            {/* Problem Statement */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Problem Statement
              </h2>

              <div className="mt-4 rounded-xl border-l-4 border-red-500 bg-red-50 p-5 dark:bg-red-950/20">
                <p className="leading-7 text-gray-700 dark:text-gray-300">
                  {idea.problemStatement || "No problem statement provided."}
                </p>
              </div>
            </section>

            {/* Proposed Solution */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Proposed Solution
              </h2>

              <div className="mt-4 rounded-xl border-l-4 border-green-500 bg-green-50 p-5 dark:bg-green-950/20">
                <p className="leading-7 text-gray-700 dark:text-gray-300">
                  {idea.proposedSolution || "No solution provided."}
                </p>
              </div>
            </section>

            {/* Tags */}
            <section className="mt-10">
              <div className="flex items-center gap-2">
                <FaTag className="text-primary" />

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Tags
                </h2>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {idea.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Comment Button */}
            {/* Comments Section */}
            <section
              id="comments"
              className="mt-12 border-t border-gray-200 pt-10 dark:border-gray-800"
            >
              {/* Section Header */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Join the Discussion
                </h2>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Share your thoughts, feedback, or questions about this idea.
                </p>
              </div>

              {/* Comment Form */}
              <CommentForm ideaId={idea._id} />

              {/* Comments will be displayed here later */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Comments
                </h3>

                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  No comments yet. Be the first to share your thoughts!
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IdeaDetailsPage;
