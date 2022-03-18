import React, { useEffect, useState } from "react";
import Onboard from '@web3-onboard/core'
import injectedModule, { ProviderLabel } from '@web3-onboard/injected-wallets'
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
    name: 'My App',
    icon: '<SVG_ICON_STRING>',
    description: 'My app using Onboard'
  }
})

const wallets = await onboard.connectWallet()

console.log("ll",wallets)
    }
    





  return (
    <div>
      hello
     <button onClick={u} >connect</button>
    </div>
  )
}

export default isMobileDevice

