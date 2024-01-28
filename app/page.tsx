import Countries from "@/components/Countries";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Properties from "@/components/Properties";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countries />
      <Properties />
    </>
  );
}
