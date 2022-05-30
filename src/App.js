import './App.css';
import Header from './components/Layout/Header';
import OurServices from './components/Contents/OurServices';
import WhyUs from './components/Contents/WhyUs';
import CtaBanner from './components/Contents/CtaBanner';
import Faq from './components/Contents/Faq';
import Footer from './components/Layout/Footer';
import CarChart from './components/Contents/CarChart';

function App() {
  return (
    <>
    <Header />
    <OurServices />
    <WhyUs />
    <CarChart />
    <CtaBanner />
    <Faq />
    <Footer />
    </>
  );
}

export default App;
