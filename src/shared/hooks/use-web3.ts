import useEthereumProvider from "@/shared/hooks/use-ethereum-provider"
import { ethers } from "ethers"
import useStorage from "@/shared/hooks/use-storage"
import StorageKeys from "@/shared/keys/storage-keys"

export enum ProviderType {
  WRITE,
  READ_PUBLIC,
  READ_ALCHEMY
}

function safeParseProvider(type: ProviderType, chainId?: ChainId) {
  const storage = useStorage(localStorage)

  const eth = storage.getItem(StorageKeys.UseWalletConnect) && (window as any).__WALLET_CONNECT_PROVIDER
    ? (window as any).__WALLET_CONNECT_PROVIDER
    : useEthereumProvider()

  if (type === ProviderType.WRITE || !chainId) return eth

  try {
    let providersList: { [key: string]: string } = {}
    // if (type === ProviderType.READ_PUBLIC) providersList = JSON.parse(process.env.PUBLIC_RPC)
    //
    // if (type === ProviderType.READ_ALCHEMY) providersList = JSON.parse(process.env.ALCHEMY_API_KEY)

    return providersList[String(chainId)] ?? eth
  } catch {
    return eth
  }
}

export default function useWeb3(): ethers.providers.Web3Provider

export default function useWeb3(type: ProviderType.WRITE): ethers.providers.Web3Provider

export default function useWeb3(type: ProviderType.READ_PUBLIC | ProviderType.READ_ALCHEMY, chainId: ChainId): ethers.providers.Web3Provider

export default function useWeb3(type: ProviderType = ProviderType.WRITE, chainId?: ChainId): ethers.providers.Web3Provider {
  return new ethers.providers.Web3Provider(safeParseProvider(type, chainId), chainId || "any")
}