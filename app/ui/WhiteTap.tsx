import { Sparkle } from "lucide-react";

function WhiteTap({ text }: { text: string }) {
  return (
    <p className="w-fit flex items-center justify-center gap-1 bg-white text-black rounded-full px-1  text-sm">
      <Sparkle /> {text}
    </p>
  );
}

export default WhiteTap;
