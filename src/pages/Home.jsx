import { Navbar, Main, Product, Footer } from "../components";
import Banners from '../components/Banner';
import '../style.css'

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <Banners />
      <Footer />
    </>
  )
}

export default Home