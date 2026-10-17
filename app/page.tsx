import {
  About,
  Blog,
  Contact,
  Experience,
  Footer,
  Hero,
  Nav,
  Projects,
  Resume,
  Skills,
} from "@/components";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
