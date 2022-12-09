import type {NextPage} from "next"
import ContactInfo from "../components/contact/ContactInfo";
import Hero from "../components/home/Hero";
import Info from "../components/home/Info";
import Knowledge from "../components/projects/Knowledge";
import MyProjects from "../components/projects/MyProjects";
import TimeLine from "../components/projects/TimeLine";
import Footer from "../components/shared/Footer";

const Home: NextPage = () => {
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


export default Home;