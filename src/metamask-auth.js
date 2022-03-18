// import React, { useEffect, useState } from "react";
// import styles from "./metamask-auth.module.css";

// function isMobileDevice() {
//   return 'ontouchstart' in window || 'onmsgesturechange' in window;
// }

// async function connect(onConnected) {
//   if (!window.ethereum) {
//     alert("Get MetaMask!");
//     return;
//   }

//   const accounts = await window.ethereum.request({
//     method: "eth_requestAccounts",
//   });

//   onConnected(accounts[0]);
// }

// async function checkIfWalletIsConnected(onConnected) {
//   if (window.ethereum) {
//     const accounts = await window.ethereum.request({
//       method: "eth_accounts",
//     });

//     if (accounts.length > 0) {
//       const account = accounts[0];
//       onConnected(account);
//       return;
//     }

//     if (isMobileDevice()) {
//       await connect(onConnected);
//     }
//   }
// }


// export default function MetaMaskAuth({ onAddressChanged }) {
//   const [userAddress, setUserAddress] = useState("");

//   useEffect(() => {
//     checkIfWalletIsConnected(setUserAddress);
//   }, []);

//   useEffect(() => {
//     onAddressChanged(userAddress);
//   }, [userAddress]);

//   return userAddress ? (
//     <div>
//       Connected with <Address userAddress={userAddress} />
//     </div>
//   ) : (
//      <Connect setUserAddress={setUserAddress}/>
//   );
// }


// function Connect({ setUserAddress }) {
//   if (isMobileDevice()) {
//     const dappUrl = "metamask_connectivity.surge.sh"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
//     const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
//     return (
//       <a href={metamaskAppDeepLink}>
//          <button className={styles.button} onClick={() => connect(setUserAddress)}>
//            Connect to MetaMask
//          </button>
//       </a>
//     );
//   }

  
//   return (
//     <button className={styles.button} onClick={() => connect(setUserAddress)}>
//       Connect to MetaMask
//     </button>
//   );
// }


// function Address({ userAddress }) {
//   return (
//     <span className={styles.address}>{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
//   );
// }

import React, { useEffect, useState } from 'react'
import Onboard from '@web3-onboard/core'
import injectedModule, {ProviderLabel} from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'
import {useConnectWallet,  useSetChain, useWallets, init} from "@web3-onboard/react"


 function  MetamaskAuth() {

  
    

    const onBoarding = async () => {
        // const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/<INFURA_KEY>'

        // const injected = injectedModule({
        //     filter: {
        //       // allow only on non android mobile
        //       [ProviderLabel.Detected]: ['Android', 'desktop', 'Windows Phone', 'iOS']
        //     }
        //   })

        const walletConnect = walletConnectModule({
            bridge: 'https://bridge.walletconnect.org',
            qrcodeModalOptions: {
              mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar']
            }
          })

        //   const onboard = Onboard({
        //     // ... other Onboard options
        //     wallets: [
        //       walletConnect
        //       //... other wallets
        //     ]
        //   })
    
    const onboard = Onboard({
      wallets: [walletConnect],
      chains: [
        {
          id: '0x1',  // chain ID must be in hexadecimel
          token: 'ETH',  // main chain token
          label: 'Ethereum Mainnet',
          rpcUrl: `https://mainnet.infura.io/v3/76b2b48a68cb43df9b0654fcd9c30ce7`  // rpcURL required for wallet balances
        },
        {
          id: '0x3',
          token: 'tROP',
          label: 'Ethereum Ropsten Testnet',
          rpcUrl: `https://ropsten.infura.io/v3/76b2b48a68cb43df9b0654fcd9c30ce7`
        },
        {
          id: '0x4',
          token: 'rETH',
          label: 'Ethereum Rinkeby Testnet',
          rpcUrl: `https://rinkeby.infura.io/v3/76b2b48a68cb43df9b0654fcd9c30ce7`
        },
        {
          id: '0x38',
          token: 'BNB',
          label: 'Binance Smart Chain',
          rpcUrl: 'https://bsc-dataseed.binance.org/'
        },
        {
          id: '0x89',
          token: 'MATIC',
          label: 'Matic Mainnet',
          rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
        },
        {
          id: '0xfa',
          token: 'FTM',
          label: 'Fantom Mainnet',
          rpcUrl: 'https://rpc.ftm.tools/'
        }
      ],
      appMetadata: {
        name: 'My App',
        icon: '<SVG_ICON_STRING>',
        logo: '<SVG_LOGO_STRING>',
        description: 'My app using Onboard',
        recommendedInjectedWallets: [ 
          { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
          { name: 'MetaMask', url: 'https://metamask.io' }
        ]
      }
    })


        const wallets = await onboard.connectWallet()
    
    
    console.log(wallets)
    }
    
    // useEffect(() => {
    //     onBoarding()
    // }, [])

    // console.log(useConnectWallet())

  return (
    <div>
      hello
     <button onClick={onBoarding} >connect</button>
    </div>
  )
}

export default MetamaskAuth

