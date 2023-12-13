import StateController from "@knownout/base-controller/dist/_StateController"
import getContract, { ContractType } from "@/shared/utils/get-contract"
import tokensList from "@/shared/utils/tokens-list"
import BigNumber from "bignumber.js"

interface State {
  pools: Pool[]
}

export default class KwContractsStore extends StateController<State> {
  #poolUpdateInterval: any

  constructor() {
    super({
      pools: []
    })

    this.fetchPools?.()
    this.#poolUpdateInterval = setInterval(() => {
      this.fetchPools?.()
    }, 5000)

    console.log(this.state.pools)
  }

  public async fetchPools() {
    const contract = getContract(ContractType.PoolFactory)
    const deployedPools = await contract.getDeployedPools()

    const pools = deployedPools.map(deployedPoolData => {
      const token0 = tokensList().findByAddress(deployedPoolData.token0)
      const token1 = tokensList().findByAddress(deployedPoolData.token1)

      if (!token0 || !token1) return null

      return {
        token0,
        token1,
        address: deployedPoolData.poolAddress,
        feePercent: new BigNumber(deployedPoolData.fee.toString()).shiftedBy(-5).dp(4).toNumber()
      }
    }).filter(Boolean) as Pool[]

    this.setState({ pools })
  }
}
