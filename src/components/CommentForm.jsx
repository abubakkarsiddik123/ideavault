"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const CommentForm = ({ ideaId }) => {
  const router = useRouter();
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      toast.error("Please write a comment");
      return;
    }

    const { data } = await authClient.token();
    const token = data?.token;

    if (!token) {
      toast.error("Authentication token not found");
      return;
    }

    const commentData = {
      ideaId,
      comment: comment.trim(),
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(commentData),
    });

    const result = await res.json();

    if (res.ok) {
      toast.success("Comment added successfully!");
      setComment("");
    } else {
      toast.error(result.message || "Failed to add comment!");
    }

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="p-5">
          <textarea
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts about this idea..."
            rows={5}
            className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
          />
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 px-5 py-3 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Share your thoughts respectfully.
          </p>

          <button
            type="submit"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
