import { observer } from "mobx-react-lite"
import "./App.scss"
import React from "react"
import EthereumProvider from "@walletconnect/ethereum-provider"

EthereumProvider.init({
  chains: [137],
  showQrModal: true,
  projectId: process.env.WALLETCONNECT_PROJECT_ID
}).then(provider => {
  (window as any).__WALLET_CONNECT_PROVIDER = provider
})

function App() {
  return (
    <div className="app-wrapper">
      Hello world
    </div>
  )
}

export default observer(App)