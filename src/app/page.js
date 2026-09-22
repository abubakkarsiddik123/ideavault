import Banner from "@/components/Banner";
import HowIdeaVaultWorks from "@/components/HowIdeaVaultWorks";
import TrendingIdeas from "@/components/TrendingIdeas";
import WhyJoinIdeaVault from "@/components/WhyJoinIdeaVault";

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
