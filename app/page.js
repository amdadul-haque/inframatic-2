import { Blog, ContactUs, Hero, Knowledge } from "@/components";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Knowledge />
        <Blog />
        <ContactUs />
      </main>
    </>
  );
}
