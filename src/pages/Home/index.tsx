import { Header } from "../../components/Header";
import { About } from "../../components/Home/About";
import { Curse } from "../../components/Home/Curse";
import { Depoiments } from "../../components/Home/Depoiments";
import { Blog } from "../../components/Home/Blog";
import { Squad } from "../../components/Home/Squad";
import { Footer } from "../../components/Home/Footer";
import { Start } from "../../components/Home/Start";

export function Home() {
  return (
    <>
      <Header />
      <Start />
      <About />
      <Curse />
      <Depoiments />
      <Blog />
      <Squad />
      <Footer />
    </>
  );
}
