import Image from "next/image";
import Hero from "./modules/hero";
import GenerativeEng from "@/components/GenerativeEng";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <GenerativeEng />
      </main>
    </>
  );
}
