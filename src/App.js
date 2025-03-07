import './App.css';
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import CompanyInfo from './components/Company-info/company-info'
import Slider from './components/Slider/slider'
import Features from './components/Features/features';
import Services from './components/Services comp/services';
import Banner from './components/Banner/banner';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
       <Navbar />
       <Header />
       <CompanyInfo />
       <Slider />
       <Features />
       <Services />
       <Banner />
       <Portfolio />
    </div>
  );
}

export default App;
