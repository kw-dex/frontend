import { observer } from "mobx-react-lite"
import "./App.scss"
import React from "react"
import EthereumProvider from "@walletconnect/ethereum-provider"
import Header from "@/widgets/Header/Header"
import { Route, Routes } from "react-router-dom"
import PoolsList from "@/pages/PoolsList"

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
      <Header />

      <div className="app-content">
        <div className="app-content-wrapper">
          <Routes>
            <Route path="/pools" element={ <PoolsList /> } />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default observer(App)
