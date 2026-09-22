import Banner from "@/components/Banner";
import HowIdeaVaultWorks from "@/components/HowIdeaVaultWorks";
import TrendingIdeas from "@/components/TrendingIdeas";
import WhyJoinIdeaVault from "@/components/WhyJoinIdeaVault";

export const metadata = {
  title: "Home | IdeaVault",
  description:
    "Discover, share, and discuss innovative startup ideas.",
};

export default function Home() {
  return (
   <div>
   <Banner/>
   <TrendingIdeas/>
   <HowIdeaVaultWorks/>
   <WhyJoinIdeaVault/>
   </div>
  );
}
