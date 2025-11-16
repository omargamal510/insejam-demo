import HomeHero from "@/app/components/HomeHero/HomeHero";
import HomeSmartSolution from "@/app/components/HomeSmartSolution/HomeSmartSolution";

export default function Home() {
  return (
    <div className="">
      <HomeHero />
      <div className="*:p-10">
        <HomeSmartSolution />
      </div>
    </div>
  );
}
