import OrangeBtn from "@/app/ui/OrangeBtn";
import Image from "next/image";

function HomeSmartSolution() {
  return (
    <div className="bg-light-purple">
      <div className="flex flex-col gap-7 mb-20">
        <h2 className="text-blue-primary font-black text-8xl">
          Smart Solution
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-5 text-blue-primary">
          <h3 className="text-7xl font-medium">
            Transform Facilities with Intelligent Optimization
          </h3>
          <p className="text-xl">
            Leverage IoT-driven insights and digital twins to automate
            infrastructure systems — achieving higher efficiency, lower costs,
            and sustainable performance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 bg-white rounded-2xl p-10">
        <div className="col-span-3 md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-7">
          <div className="flex flex-col gap-6 text-lg">
            <h3 className="text-4xl  text-blue-primary">
              Energy <br /> Saving
            </h3>
            <p>Smarter Energy, Lower Costs</p>
            <p>
              Reduce up to 40% of operational and maintenance expenses through
              intelligent monitoring and predictive optimization.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-lg border-t border-blue-primary pt-5 md:border-none md:p-0">
            <h3 className="text-4xl  text-blue-primary">
              Unified <br /> Experience
            </h3>
            <p>All Systems, One Platform</p>
            <p>
              Enjoy seamless integration across all building components —
              delivering maximum compatibility and control in one unified
              dashboard.
            </p>
          </div>
        </div>

        <div className="relative col-span-3 md:col-span-1 h-[300px] md:h-[600px]">
          <Image
            alt="cosmo"
            src={"/home/bulb.avif"}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="flex  items-center justify-center mt-7">
        <OrangeBtn className="text-white" text="Contact us" />
      </div>
    </div>
  );
}

//         style={{ background: "linear-gradient(to right, #e6664d, #944d94)" }}

export default HomeSmartSolution;
