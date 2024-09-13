import './App.css';
import SecondPage from './components/SecondPage';
import Tokenomics from './components/Tokenomics';
import WelcomePage from './components/WelcomePage';

function App() {

  return (
    <div className="appCont">
      <WelcomePage />
      <SecondPage />
      <Tokenomics/>
    </div>
  )
}

export default App
