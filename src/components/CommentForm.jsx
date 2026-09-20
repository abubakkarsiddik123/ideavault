import { FaPaperPlane } from "react-icons/fa";

const CommentForm = () => {
  return (
    <form className="mt-6">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">

        {/* Textarea */}
        <div className="p-5">
          <textarea
            placeholder="Share your thoughts about this idea..."
            rows={5}
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              p-4
              text-gray-900
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
              dark:border-gray-700
              dark:bg-gray-950
              dark:text-white
              dark:placeholder:text-gray-500
            "
          />
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Be respectful and constructive.
          </p>

          <button
            type="submit"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-blue-600
              px-5
              py-2.5
              font-semibold
              text-white
              transition
              hover:bg-blue-700
              dark:bg-blue-500
              dark:hover:bg-blue-600
            "
          >
            <FaPaperPlane className="text-sm" />
            Comment
          </button>

        </div>
      </div>
    </form>
  );
};

export default CommentForm;



