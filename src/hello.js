import React from 'react'
import {
  init,
  useConnectWallet,
  useSetChain,
  useWallets
} from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
// import trezorModule from '@web3-onboard/trezor'
// import ledgerModule from '@web3-onboard/ledger'
import walletConnectModule from '@web3-onboard/walletconnect'
import fortmaticModule from '@web3-onboard/fortmatic'
// import torusModule from '@web3-onboard/torus'
// import keepkeyModule from '@web3-onboard/keepkey'

const injected = injectedModule()
const walletConnect = walletConnectModule()

console.log(injected)

// const fortmatic = fortmaticModule({
//   apiKey: 'pk_test_886ADCAB855632AA'
// })

// const torus = torusModule()
// const ledger = ledgerModule()
// const keepkey = keepkeyModule()

// const trezorOptions = {
//   email: 'test@test.com',
//   appUrl: 'https://www.blocknative.com'
// }

// const trezor = trezorModule(trezorOptions)

const web3Onboard = init({
  wallets: [
    walletConnect,
    injected,
  ],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: 'https://mainnet.infura.io/v3/ababf9851fd845d0a167825f97eeb12b'
    },
    {
      id: '0x1',
      token: 'tROP',
      label: 'Ethereum Ropsten Testnet',
      rpcUrl: 'https://ropsten.infura.io/v3/ababf9851fd845d0a167825f97eeb12b'
    },
    {
      id: '0x1',
      token: 'rETH',
      label: 'Ethereum Rinkeby Testnet',
      rpcUrl: 'https://rinkeby.infura.io/v3/ababf9851fd845d0a167825f97eeb12b'
    },
    {
      id: '0x1',
      token: 'MATIC',
      label: 'Matic Mainnet',
      rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
    }
  ],
  appMetadata: {
    name: 'Blocknative',
    icon: '<svg><svg/>',
    description: 'Demo app for Onboard V2',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    ]
  }
})

function Hello() {

    const y = () => {
    }
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()
  const connectedWallets = useWallets()

  return (
    <div>
      <button onClick={() => connect()}>
        {connecting ? 'connecting' : 'connect'}
      </button>
      {wallet && (
        <div>
          <label>Switch Chain</label>
          {settingChain ? (
            <span>Switching chain...</span>
          ) : (
            <select
              onChange={({ target: { value } }) =>
                console.log('onChange called') || setChain({ chainId: value })
              }
              value={connectedChain.id}
            >
              {chains.map(({ id, label }) => {
                return <option value={id}>{label}</option>
              })}
            </select>
          )}
          <button onClick={() => disconnect(wallet)}>
            Disconnect Wallet
          </button>
        </div>
      )}

      {connectedWallets.map(({ label, accounts }) => {
        return (
          <div>
            <div>{label}</div>
            <div>Accounts: {JSON.stringify(accounts, null, 2)}</div>
          </div>
        )
      })}
      ff
    </div>
  )
}

export default Hello