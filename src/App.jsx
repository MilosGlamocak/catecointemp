import './App.css';
import FAQ from './components/FAQ';
import SecondPage from './components/SecondPage';
import Tokenomics from './components/Tokenomics';
import Trading from './components/Trading';
import WelcomePage from './components/WelcomePage';

function App() {

  return (
    <div className="appCont">
      <WelcomePage />
      <SecondPage />
      <Tokenomics/>
      <FAQ />
      <Trading />
    </div>
  )
}

export default App
