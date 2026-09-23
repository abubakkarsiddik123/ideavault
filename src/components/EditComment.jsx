"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const EditCommentPage = ({ commentId, initialComment }) => {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [comment, setComment] = useState(initialComment);
  const [loading, setLoading] = useState(false);

  const handleEdit = async () => {
    if (!comment.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    setLoading(true);

    const { data } = await authClient.token();

    const token = data?.token;

    if (!token) {
      toast.error("Authentication token not found");
      setLoading(false);
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${commentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        comment: comment.trim(),
      }),
    });

    const result = await res.json();

    if (res.ok) {
      toast.success("Comment updated successfully!");
    } else {
      toast.error(data.message || "Failed to update comment!");
    }

    toast.success("Comment updated successfully");

    setIsEditing(false);
    setLoading(false);

    router.refresh();
  };

  return (
    <>
      {/* Edit Button */}
      <button
        type="button"
        onClick={() => setIsEditing(true)}
        className="rounded-lg border border-gray-200 bg-white px-3.5 py-1.5 text-sm font-medium text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
      >
        Edit
      </button>

      {/* Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Edit Comment
            </h3>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Update your comment below.
            </p>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
              autoFocus
              className="mt-4 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            />

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setComment(initialComment);
                  setIsEditing(false);
                }}
                disabled={loading}
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleEdit}
                disabled={loading}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditCommentPage;
