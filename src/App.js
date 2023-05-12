import './App.css';
import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";
function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  // state for keeping track of current connected account.
  const [account, setAccount] = useState(null);
  let fox = "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg";
  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }

  if (account === null) {
    return (
      <div className="App btndiv">
        {
          isWalletInstalled ? (<><button className="connect-wallet-button" onClick={connectWallet}>
            <img src={fox} alt="MetaMask Logo" className="metamask-logo" />
            Connect MetaMask Wallet
          </button></>) : (
            <p>Install Metamask wallet</p>
          )
        }
      </div>
    );
  }
  return (
    <div className="App">
      <p>Connected as: <br /> {account}</p>
    </div>
  );
}
export default App;