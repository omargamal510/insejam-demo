import { Menu } from "lucide-react";

function Navbar() {
  return (
    <div className="bg-transparent w-full flex justify-between p-2 absolute top-0 z-10">
      <div></div>
      <button className="bg-purple-primary p-1 px-2 rounded-lg border cursor-pointer">
        <Menu color="#FFF" />
      </button>
    </div>
  );
}

export default Navbar;
