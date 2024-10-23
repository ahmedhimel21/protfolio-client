import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Blog } from "../components/Blog";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
