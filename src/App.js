import './App.css';
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import CompanyInfo from './components/Company-info/company-info'

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <Header></Header>
       <CompanyInfo></CompanyInfo>
    </div>
  );
}

export default App;
