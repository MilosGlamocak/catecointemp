import './App.css';
import FAQ from './components/FAQ';
import SecondPage from './components/SecondPage';
import Tokenomics from './components/Tokenomics';
import WelcomePage from './components/WelcomePage';

function App() {

  return (
    <div className="appCont">
      <WelcomePage />
      <SecondPage />
      <Tokenomics/>
      <FAQ />
    </div>
  )
}

export default App
