import { NetworkType } from "@/types"

export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      WALLETCONNECT_PROJECT_ID: string
    }
  }

  type ChainId = string | numbert

  interface NetworkData {
    id: number,
    icon: string,
    name: string,
    symbol: string,
    rpc: string,
    type: NetworkType
    wrappedAddress: string,
    scannerURL: string
    priceFeed: string
  }

  interface Erc20Token {
    symbol: string
    address: string
    decimals: number
    icon: string
    name: string
    chainId: number

    currentBlockchainNative?: true
    nativeCoin?: boolean
    stableCoin?: boolean
  }

  type EthereumLikeAddress = `0x${string}`

  type ArrayElement<ArrayType> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never
}