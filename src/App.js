import './App.css';
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import CompanyInfo from './components/Company-info/company-info'
import Slider from './components/Slider/slider'

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Header></Header>
       <CompanyInfo></CompanyInfo>
       <Slider></Slider>
    </div>
  );
}

export default App;
