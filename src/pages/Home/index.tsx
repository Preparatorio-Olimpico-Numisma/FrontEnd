import { Header } from "../../components/Header";
import { About } from "../../components/Homes/About";
import { Curse } from "../../components/Homes/Curse";
import { Depoiments } from "../../components/Homes/Depoiments";
import { Blog } from "../../components/Homes/Blog";
import { Squad } from "../../components/Homes/Squad";
import { Footer } from "../../components/Homes/Footer";
import { Start } from "../../components/Homes/Start";


export function Home() {
  return (
    <>
    <Header/>
    <Start/>
    <About/>
    <Curse/>
    <Depoiments/>
    <Blog/>
    <Squad/>
    <Footer/>
  </>
  )
}