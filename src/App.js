import './App.css';
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import CompanyInfo from './components/Company-info/company-info'
import Slider from './components/Slider/slider'
import Features from './components/Features/features';
import Servises from './components/Services comp/services';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Header></Header>
       <CompanyInfo></CompanyInfo>
       <Slider></Slider>
       <Features></Features>
       <Servises></Servises>
    </div>
  );
}

export default App;
