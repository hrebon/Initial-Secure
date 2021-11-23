import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import HeaderMain from './component/HeaderMain/HeaderMain';
import Slider from './component/Slider/Slider';
import Why from './component/Why/Why';

function App() {
  return (
    <div>
      <Header/>
      <HeaderMain/>
      <About/>
      <Slider/>
      <Why/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
