import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Avatar } from "@heroui/react";
import EditCommentPage from "./EditComment";
import DeleteComment from "./DeleteComment";

const Comment = async ({ ideaId }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const currentUserId = session?.user?.id;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${ideaId}`, {
    cache: "no-store",
  });

  const comments = await res.json();

  return (
    <div className="mt-10">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Comments
          </h3>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {comments.length} {comments.length === 1 ? "comment" : "comments"}{" "}
            on this idea
          </p>
        </div>

        <div className="flex h-9 min-w-9 items-center justify-center rounded-full bg-blue-50 px-3 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          {comments.length}
        </div>
      </div>

      {/* Empty State */}
      {comments.length === 0 ? (
        <div className="mt-5 rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center dark:border-gray-700 dark:bg-gray-900/50">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl dark:bg-blue-500/10">
            💬
          </div>

          <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">
            No comments yet
          </h4>

          <p className="mx-auto mt-1 max-w-sm text-sm text-gray-500 dark:text-gray-400">
            Be the first person to share your thoughts about this idea.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          {comments.map((comment) => {
            const isOwner = currentUserId === comment.userId;

            return (
              <div
                key={comment._id}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900"
              >
                {/* User Info */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <Avatar
                      size="sm"
                      className="shrink-0 ring-2 ring-gray-100 dark:ring-gray-800"
                    >
                      <Avatar.Image
                        alt={comment?.name || "User"}
                        src={comment?.image}
                      />

                      <Avatar.Fallback className="bg-gradient-to-br from-blue-500 to-indigo-600 font-semibold text-white">
                        {comment?.name?.charAt(0)?.toUpperCase() || "U"}
                      </Avatar.Fallback>
                    </Avatar>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                        {comment?.name || "Anonymous User"}
                      </p>

                      <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                        {new Date(comment.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comment Content */}
                <div className="mt-4 rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-800/60">
                  <p className="whitespace-pre-wrap text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {comment?.comment}
                  </p>
                </div>

                {/* Actions */}
                {isOwner && (
                  <div className="mt-4 flex justify-end gap-2">
                    <EditCommentPage
                      commentId={comment._id}
                      initialComment={comment.comment}
                    />

                    <DeleteComment commentId={comment._id} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;
