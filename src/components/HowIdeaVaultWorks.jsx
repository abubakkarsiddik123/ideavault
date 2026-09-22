import { FaLightbulb, FaSearch, FaComments } from "react-icons/fa";

const HowIdeaVaultWorks = () => {
  const steps = [
    {
      icon: <FaLightbulb />,
      title: "Share Your Idea",
      description:
        "Share your startup idea with the community. Add the problem, solution, target audience, and other important details.",
    },
    {
      icon: <FaSearch />,
      title: "Discover Ideas",
      description:
        "Explore startup ideas shared by the community and discover new opportunities, concepts, and possibilities.",
    },
    {
      icon: <FaComments />,
      title: "Connect & Discuss",
      description:
        "Comment on ideas, share useful feedback, and join meaningful discussions with other creators.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 dark:from-[#0F172A] dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
            How IdeaVault Works
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Turn your startup idea into something bigger — share, discover,
            and connect.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Number */}
              <div className="mx-auto mb-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#2563EB] text-sm font-bold text-white">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-2xl text-[#2563EB] transition duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-[#0F172A] dark:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIdeaVaultWorks;