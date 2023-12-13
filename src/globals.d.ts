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

  type ArrayElement<ArrayType> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never

  namespace Color {
    export type White = "white" | "white90" | "white75" | "white50" | "white15" | "white10" | "white5"

    export type Yellow = "yellow" | "yellow20" | "yellow10"

    export type Green = "green" | "green15" | "green50"

    export type Blue = "blue" | "blue15" | "blue50"

    export type Red = "red" | "red10"
  }

  type AnyColor = Color.White & Color.Yellow & Color.Green & Color.Blue & Color.Red

  interface Pool {
    token0: Erc20Token
    token1: Erc20Token

    feePercent: number
    address: string
  }


}
