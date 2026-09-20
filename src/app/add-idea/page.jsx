
"use client";

const AddIdeaPage = () => {
  const onSubmit =async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const ideaData = Object.fromEntries(formData.entries());

    console.log(ideaData,"ideaData");

    const res = await fetch("http://localhost:8080/idea",{
      method:"POST",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(ideaData)
    })
    const data = await res.json();
    console.log(data,"add-idea data");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 dark:bg-gray-950 sm:px-6">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-[#FBBF24] px-4 py-1.5 text-sm font-semibold text-[#0F172A]">
            Share Your Idea
          </span>

          <h1 className="mt-4 text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
            Add a New Startup Idea
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
            Share your innovative startup idea with the IdeaVault community
            and inspire others.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8"
        >
          <div className="space-y-6">

            {/* Idea Title */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Idea Title
              </label>

              <input
                name="title"
                type="text"
                placeholder="Enter your startup idea title"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Short Description
              </label>

              <textarea
                name="shortDescription"
                rows="3"
                placeholder="Describe your idea in one or two sentences"
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              />
            </div>

            {/* Category + Budget */}
            <div className="grid gap-6 md:grid-cols-2">

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Category
                </label>

                <select
                  name="category"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                >
                  <option value="">Select category</option>
                  <option value="Tech">Tech</option>
                  <option value="Health">Health</option>
                  <option value="AI">AI</option>
                  <option value="Education">Education</option>
                  <option value="Finance">Finance</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Environment">Environment</option>
                  <option value="Social Impact">Social Impact</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Estimated Budget
                </label>

                <input
                  name="budget"
                  type="number"
                  placeholder="e.g. 50000"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Tags
              </label>

              <input
                name="tags"
                type="text"
                placeholder="e.g. AI, SaaS, Education, Mobile App"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              />

              <p className="mt-2 text-xs text-gray-500">
                Separate multiple tags with commas.
              </p>
            </div>

            {/* Image URL */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Image URL
              </label>

              <input
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              />
            </div>

            {/* Target Audience */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Target Audience
              </label>

              <input
                name="targetAudience"
                type="text"
                placeholder="e.g. Students, Small Business Owners"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              />
            </div>

            {/* Problem Statement */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Problem Statement
              </label>

              <textarea
                name="problemStatement"
                rows="5"
                placeholder="What problem does your idea solve?"
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              />
            </div>

            {/* Proposed Solution */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Proposed Solution
              </label>

              <textarea
                name="proposedSolution"
                rows="5"
                placeholder="How will your idea solve the problem?"
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              />
            </div>

            {/* Detailed Description */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Detailed Description
              </label>

              <textarea
                name="description"
                rows="7"
                placeholder="Explain your startup idea in detail..."
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end dark:border-gray-800">

              <button
                type="reset"
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Clear
              </button>

              <button
                type="submit"
                className="rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Publish Idea
              </button>

            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddIdeaPage;

