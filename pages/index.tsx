import ContactInfo from "../components/contact/ContactInfo";
import Hero from "../components/home/Hero";
import Info from "../components/home/Info";
import Knowledge from "../components/projects/Knowledge";
import MyProjects from "../components/projects/MyProjects";
import TimeLine from "../components/projects/TimeLine";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <MyProjects />
      <TimeLine />
      <Knowledge />
      <ContactInfo />
      <Footer />
    </>
  );
}
