import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import WeddingInfo from "../components/home/WeddingInfo";
import OurStory from "../components/home/OurStory";
import Timeline from "../components/home/Timeline";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <WeddingInfo />
      <OurStory />
      <Timeline />
    </Layout>
  );
}
