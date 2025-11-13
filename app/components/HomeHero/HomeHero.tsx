import OrangeBtn from "@/app/ui/OrangeBtn";
import WhiteTap from "@/app/ui/WhiteTap";
import Image from "next/image";

function HomeHero() {
  return (
    <div
      style={{
        backgroundImage: "url('/home/hero.avif')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="hero h-svh "
    >
      <div className="hero-wrapper wrapper-component text-white flex flex-col items-center justify-center gap-10">
        <Image height={300} width={300} alt="insejam logo" src={"/logo.png"} />

        <WhiteTap text="All-in-One Collaboration Platform" />
        <h1 className="text-[7vw] sm:leading-20 md:leading-30 font-semibold">
          Empower Your Team to <br /> Build Smarter, Together
        </h1>
        <p>
          Insejam connects ideas, people, and workflows in one powerful
          collaborative space, <br className="md:block hidden" /> designed to
          help your organization move faster and stay aligned
        </p>

        <OrangeBtn text="Get Started" />
      </div>
    </div>
  );
}

export default HomeHero;
