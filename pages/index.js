import Head from "next/head";
import Intro from "../components/Intro";
import Services from "../components/Services";
import { data } from "../data";
import Testimonials from "../components/Testimonials";

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Agency Website</title>
        <meta name="description" content="Get to know about our agency." />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
