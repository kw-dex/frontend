import Constants from "@/app/configs/constants"

const Tokens: { [key: number]: Erc20Token[] } = {
  97: [
    {
      symbol: "tBNB",
      address: Constants.zeroAddress,
      decimals: 18,
      icon: "binance.png",
      name: "BNB",
      chainId: 97,
      currentBlockchainNative: true,
      nativeCoin: true
    },
    {
      symbol: "twBNB",
      address: "0x4d63CfAcd60eA397B7a17BD2A3a26F4EE6Fc3De3",
      decimals: 18,
      icon: "binance.png",
      name: "Wrapped BNB",
      chainId: 97,
      nativeCoin: true
    },
    {
      symbol: "tUSDC",
      address: "0x3BEE470a8A2e3D41440dd25F984D1884f163Fc41",
      decimals: 18,
      icon: "/tokens/usdc.png",
      name: "USD Coin",
      chainId: 97,
      stableCoin: true
    },
    {
      symbol: "tUSDT",
      address: "0xBa3ce4244a8e42a915d50d52603C7A6C1f9bFa29",
      decimals: 18,
      icon: "/tokens/usdt.png",
      name: "Tether USD",
      chainId: 97,
      stableCoin: true
    },
    {
      symbol: "tDAI",
      address: "0x0F213F6E7B46Eaf0cedf34Fde2C0185ed976B60a",
      decimals: 18,
      icon: "/tokens/dai.png",
      name: "Dai Stablecoin",
      chainId: 97,
      stableCoin: true
    },
    {
      symbol: "twETH",
      address: "0x98938313E3a5CE46fD9EF31d240eE3e8C29e45ac",
      decimals: 18,
      icon: "/tokens/ethereum.png",
      name: "Wrapped Ether",
      chainId: 97
    }
  ]
}

export default Tokens