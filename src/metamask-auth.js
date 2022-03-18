import React, { useEffect, useState } from "react";
import Onboard from '@web3-onboard/core'
import injectedModule, { ProviderLabel } from '@web3-onboard/injected-wallets'
// import { useOnboard } from "use-onboard";
import { async } from "q";


function isMobileDevice() {
   
    const u = async () => {

        const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/76b2b48a68cb43df9b0654fcd9c30ce7'

        const injected = injectedModule({
            filter: {
                // allow only on non android mobile
                [ProviderLabel.Detected]: [
                    'Windows Phone',
                     'Windows',
                     'macOS',
                     'iOS',
                     'Android',
                     'Linux',
                     'Chrome OS',
                     'Android Browser',
                     'Chrome',
                     'Chromium',
                     'Firefox',
                     'Microsoft Edge',
                     'Opera',
                     'Safari',
                     'desktop',
                     'mobile',
                    'tablet',
                ]
              }
        })

    const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: MAINNET_RPC_URL
    }
  ],
  appMetadata: {
    name: 'dohdkljkldfhklj',
    icon: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci83YmEzMTE4ODAxNmQ1OTY1NzZkNGY5YWZmMDg4MjFlNT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.jQsUMF09WqBdFBDxhexPJGNliSyHvnTRKCKEq1hDOgQ',
    description: 'fkfk'
  }
})

const wallets = await onboard.connectWallet()

console.log("ll",onboard)
    }
    





  return (
    <div>
      hello
     <button onClick={u} >connect</button>
    </div>
  )
}

export default isMobileDevice

