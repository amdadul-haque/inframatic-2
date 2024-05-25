import Image from "next/image";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ContactUs />
      </main>
    </>
  );
}
