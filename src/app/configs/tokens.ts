import Constants from "@/app/configs/constants"

const Tokens: { [key: number]: Erc20Token[] } = {
  56: [
    {
      symbol: "tBNB",
      address: Constants.zeroAddress,
      decimals: 18,
      icon: "binance.png",
      name: "BNB",
      chainId: 56,
      currentBlockchainNative: true,
      nativeCoin: true
    },
    {
      symbol: "twBNB",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      decimals: 18,
      icon: "binance.png",
      name: "Wrapped BNB",
      chainId: 56,
      nativeCoin: true
    },
    {
      symbol: "tUSDC",
      address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      decimals: 18,
      icon: "/tokens/usdc.png",
      name: "USD Coin",
      chainId: 137,
      stableCoin: true
    },
    {
      symbol: "tUSDT",
      address: "0x55d398326f99059ff775485246999027b3197955",
      decimals: 18,
      icon: "/tokens/usdt.png",
      name: "Tether USD",
      chainId: 137,
      stableCoin: true
    },
    {
      symbol: "tDAI",
      address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
      decimals: 18,
      icon: "/tokens/dai.png",
      name: "Dai Stablecoin",
      chainId: 137,
      stableCoin: true
    }
  ]
}

export default Tokens