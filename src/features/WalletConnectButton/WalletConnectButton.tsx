import Button from "@/shared/components/Button"
import Icon, { IconSize } from "@/shared/components/Icon"
import { ArrowPathIcon, WalletIcon } from "@heroicons/react/24/solid"
import { observer } from "mobx-react-lite"
import { useCallback } from "react"
import useEthereumProvider from "@/shared/hooks/use-ethereum-provider"
import useStore from "@/shared/hooks/use-store"
import Web3Store from "@/shared/stores/web3-store"
import shortenAddress from "@/shared/utils/shorten-address"
import { ButtonVariant } from "@/shared/components/Button/Button"
import useWeb3 from "@/shared/hooks/use-web3"
import requestNetworkChange from "@/shared/utils/request-network-change"

function WalletConnectButton() {
  const web3Store = useStore(Web3Store)

  const handleConnect = useCallback(async () => {
    const ethereum = useEthereumProvider()

    await ethereum.request({
      method: "wallet_requestPermissions",
      params: [{
        eth_accounts: {}
      }]
    }).catch(() => {
      /* void */
    }).finally(() => {
      web3Store.updateAccountData()
    }).then(async () => {
      const chainId = await useWeb3().getSigner().getChainId()

      if (chainId !== 97) await requestNetworkChange(97)
    })
  }, [web3Store.state.chainId])

  return (
    <Button
      loaderInvert
      icon={ <Icon
        size={ IconSize.x24 }
        icon={ !web3Store.state.address ? <WalletIcon /> : <ArrowPathIcon /> }
      /> }
      onClick={ handleConnect }
      variant={ web3Store.state.address ? ButtonVariant.TransparentYellow : ButtonVariant.Default }
    >
      { web3Store.state.address ? (
        shortenAddress(web3Store.state.address)
      ) : "Connect wallet" }
    </Button>
  )
}

export default observer(WalletConnectButton)
