import logo from './logo.svg';
import MetaMaskAuth from "./metamask-auth"
import './App.css';

function App() {
  return (
    <div className="App">
      <MetaMaskAuth onAddressChanged={address => {}}/>
    </div>
  );
}

export default App;
