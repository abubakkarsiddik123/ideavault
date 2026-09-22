import {
  FaLightbulb,
  FaUsers,
  FaComments,
  FaRocket,
} from "react-icons/fa";

const WhyJoinIdeaVault = () => {
  const benefits = [
    {
      icon: <FaLightbulb />,
      title: "Discover New Ideas",
      description:
        "Explore creative startup ideas and discover new concepts from the community.",
    },
    {
      icon: <FaRocket />,
      title: "Share Your Vision",
      description:
        "Publish your startup ideas and present your vision to a community of creators.",
    },
    {
      icon: <FaComments />,
      title: "Get Valuable Feedback",
      description:
        "Receive comments and feedback that can help you improve and validate your ideas.",
    },
    {
      icon: <FaUsers />,
      title: "Connect With Creators",
      description:
        "Join discussions and connect with people interested in innovation and entrepreneurship.",
    },
  ];

  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] dark:text-white sm:text-4xl">
            Why Join IdeaVault?
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            A place to share ideas, discover opportunities, and connect with
            other innovators.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2563EB]/10 text-xl text-[#2563EB] transition duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold text-[#0F172A] dark:text-white">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinIdeaVault;