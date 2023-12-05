import { observer } from "mobx-react-lite"
import "./App.scss"
import React from "react"
import EthereumProvider from "@walletconnect/ethereum-provider"
import Wrapper, { WrapperVariant } from "@/shared/components/Wrapper"
import Button from "@/shared/components/Button"
import { ButtonVariant } from "@/shared/components/Button/Button"
import Input from "@/shared/components/Input"
import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"

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
      <Wrapper variant={ WrapperVariant.FlexFullPage } fullWidth>
        <Wrapper variant={ WrapperVariant.FlexColumnCenter } gap={ 10 }>

          <Button>Default variant</Button>
          <Button variant={ ButtonVariant.Monochrome }>Monochrome variant</Button>
          <Button variant={ ButtonVariant.TransparentYellow }>Transparent yellow variant</Button>
          <Button variant={ ButtonVariant.TransparentRed }>Transparent red variant</Button>

          <Button variant={ ButtonVariant.TransparentRed } icon={ <ArrowPathIcon /> } />

          <Input width={ 300 } icon={ <MagnifyingGlassIcon /> } />

        </Wrapper>
      </Wrapper>
    </div>
  )
}

export default observer(App)
