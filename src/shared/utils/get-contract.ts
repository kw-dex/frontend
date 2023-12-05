import { MultiSwapABI, PoolABI, PoolFactoryABI, TokenABI, TokenFactoryABI, WrapperABI } from "@/app/abis/types"
import useWeb3 from "@/shared/hooks/use-web3"
import { ethers } from "ethers"
import Constants from "@/app/configs/constants"

export enum ContractType {
  MultiSwap = "MultiSwap",
  Pool = "Pool",
  PoolFactory = "PoolFactory",
  Token = "Token",
  TokenFactory = "TokenFactory",
  Wrapper = "Wrapper"
}

interface ContractTypingsMap {
  [ContractType.MultiSwap]: MultiSwapABI,
  [ContractType.Pool]: PoolABI,
  [ContractType.PoolFactory]: PoolFactoryABI,
  [ContractType.Token]: TokenABI,
  [ContractType.TokenFactory]: TokenFactoryABI,
  [ContractType.Wrapper]: WrapperABI,
}

const ContractAddressesMap = {
  [ContractType.MultiSwap]: Constants.multiSwapAddress,
  [ContractType.PoolFactory]: Constants.poolFactoryAddress,
  [ContractType.TokenFactory]: Constants.tokenFactoryAddress,
  [ContractType.Wrapper]: Constants.wrapperAddress
} as { [key: string]: string }

export default function getContract<T extends ContractType>(
  contract: T,
  address?: string
): ContractTypingsMap[T] {
  const web3 = useWeb3()

  const abi = require("../../app/abis/" + contract + "ABI.json")

  const parsedAddress = ContractAddressesMap[contract] ?? address ?? Constants.zeroAddress

  return new ethers.Contract(parsedAddress, abi, web3.getSigner()) as ContractTypingsMap[T]
}