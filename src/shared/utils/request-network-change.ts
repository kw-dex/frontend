import getNetworkData from "@/shared/utils/get-network-data"
import { NetworkType } from "@/types"
import useEthereumProvider from "@/shared/hooks/use-ethereum-provider"

export default async function requestNetworkChange(chainId: ChainId) {
  const _id = String(chainId)
  const ethereum = useEthereumProvider()

  const networkData = getNetworkData(_id)
  if (networkData.type === NetworkType.Unknown) return false

  const requestChange = async () => ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: `0x${parseInt(_id).toString(16)}` }]
  }) as Promise<unknown>

  const requestInsert = async () => ethereum.request({
    method: "wallet_addEthereumChain",
    params: [{
      chainId: `0x${parseInt(_id).toString(16)}`,
      chainName: networkData.name,
      nativeCurrency: {
        name: networkData.symbol,
        symbol: networkData.symbol,
        decimals: 18
      },
      rpcUrls: [networkData.rpc],
      blockExplorerUrls: [networkData.scannerURL]
    }]
  }) as Promise<unknown>

  return !!(await requestChange().catch(async error => {
    if (error?.code !== 4902 && error?.code !== -32603) return false

    if (!(await requestInsert().catch(() => false))) return false

    return !!(await requestChange().catch(() => false))
  }))
}