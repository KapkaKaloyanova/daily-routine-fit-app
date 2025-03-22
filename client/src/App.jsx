import About from "./components/About";
import Appointment from "./components/Appointment";
import Blog from "./components/Blog";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Slider from "./components/Slider";

function App() {
  return (
    <>
  {/* body */}
  {/* loader  */}
    <Loader />
  {/* end loader */}
  <div className="full_bg">
    {/* header */}
    <Header />
    {/* end header inner */}
    {/* top */}
    <Slider />
  </div>
  {/* end banner */}
  {/* appointment */}
    <Appointment />
  {/* end appointment */}
  {/* services */}
    <Services />
  {/* end services */}
  {/* priceing */}
    <Pricing />
  {/* end priceing */}
  {/* blog */}
    {/* <Blog /> */}
  {/* end blog */}
  {/* about */}
    <About />
  {/* end about */}
  {/* customers */}
    <Customers />
  {/* end customers */}
  {/*  footer */}
    <Footer />
  {/* end footer */}
  {/* Javascript files*/}
    </>
  );
}

export default App;
