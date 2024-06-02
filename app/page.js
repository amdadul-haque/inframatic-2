import { Blog, ContactUs, FAQ, FormModal, Hero, Knowledge } from "@/components";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Knowledge />
        <Blog />
        <ContactUs />
        <FAQ />
        {/* <FormModal /> */}
      </main>
    </>
  );
}
