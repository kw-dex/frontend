import Constants from "@/app/configs/constants"
import { NetworkType } from "@/types"

export default function getNetworkData(chainId: ChainId): NetworkData {
  const _id = String(chainId)
  const chainsManifest: { [key: string]: NetworkData } = {
    137: {
      id: 137,
      icon: "chains/polygon.png",
      name: "Polygon",
      symbol: "MATIC",
      type: NetworkType.Mainnet,
      rpc: "https://polygon-rpc.com/",
      wrappedAddress: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      scannerURL: "https://polygonscan.com/",
      priceFeed: "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0"
    },
    1: {
      id: 1,
      icon: "chains/ethereum.png",
      name: "Ethereum",
      symbol: "ETH",
      type: NetworkType.Mainnet,
      rpc: "https://mainnet.infura.io/v3/",
      wrappedAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      scannerURL: "https://etherscan.io/",
      priceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
    },
    5: {
      id: 5,
      icon: "chains/ethereum.png",
      name: "Ethereum Goerli",
      symbol: "ETH",
      type: NetworkType.Testnet,
      rpc: "https://rpc.ankr.com/eth_goerli",
      wrappedAddress: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
      scannerURL: "https://goerli.etherscan.io/",
      priceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e"
    },
    80001: {
      id: 80001,
      icon: "chains/polygon.png",
      name: "Polygon Mumbai",
      symbol: "MATIC",
      type: NetworkType.Testnet,
      rpc: "https://rpc-mumbai.maticvigil.com",
      wrappedAddress: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
      scannerURL: "https://mumbai.polygonscan.com/",
      priceFeed: "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada"
    },
    97: {
      id: 97,
      icon: "chains/bnb.png",
      name: "BNB Chain Testnet",
      symbol: "tBNB",
      type: NetworkType.Testnet,
      rpc: "https://bsc-testnet.publicnode.com",
      wrappedAddress: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
      scannerURL: "https://testnet.bscscan.com/",
      priceFeed: "0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526"
    },
    56: {
      id: 56,
      icon: "chains/bnb.png",
      name: "BNB Chain",
      symbol: "BNB",
      type: NetworkType.Mainnet,
      rpc: "https://binance.llamarpc.com",
      wrappedAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      scannerURL: "https://bscscan.com/",
      priceFeed: "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE"
    },
    42161: {
      id: 42161,
      icon: "chains/arbitrum.png",
      name: "Arbitrum One",
      symbol: "ETH",
      type: NetworkType.Mainnet,
      rpc: "https://arbitrum.llamarpc.com",
      wrappedAddress: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      scannerURL: "https://arbiscan.io/",
      priceFeed: "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612"
    }
  }

  if (!_id || !(_id in chainsManifest)) {
    return {
      id: -1,
      icon: "",
      name: "Unknown network",
      symbol: "?",
      type: NetworkType.Unknown,
      rpc: String(),
      wrappedAddress: Constants.zeroAddress,
      scannerURL: String(),
      priceFeed: Constants.zeroAddress
    }
  }

  return chainsManifest[_id] as NetworkData
}