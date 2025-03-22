import {Routes, Route} from 'react-router';

import Header from './components/header/Header';
import Slider from './components/home/Slider';
import Login from './components/login/Login';
import Register from './components/register/Register';
import About from './components/About';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Pricing from './components/Pricing';
import ServiceCatalog from './components/service-catalog/ServiceCatalog';
import ServiceCreate from './components/service-create/ServiceCreate';
import CustomerReview from './components/customer-review/CustomerReview';

function App() {
  return (
    <>
    <Loader />
  <div className="full_bg">
    <Header />
    <Routes>
      <Route path="/" element={<Slider />} />
      <Route path="/services" element={<ServiceCatalog />} />
      <Route path="/services/create" element={<ServiceCreate />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/customers" element={<CustomerReview />} />
      

    </Routes>
  </div>
    <Footer />
    </>
  );
}

export default App;
