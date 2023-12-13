import StateController from "@knownout/base-controller/dist/_StateController"
import useWeb3 from "@/shared/hooks/use-web3"
import useEthereumProvider from "@/shared/hooks/use-ethereum-provider"

interface State {
  address?: string
  chainId?: ChainId
}

export default class Web3Store extends StateController<State> {
  readonly #accountDataUpdateInterval?: any

  constructor() {
    super({})

    const ethereum = useEthereumProvider()

    this.updateAccountData = this.updateAccountData.bind(this)

    ethereum?.on("accountsChanged", this.updateAccountData)
    ethereum?.on("chainChanged", () => this.updateAccountData)

    if (this.#accountDataUpdateInterval) clearInterval(this.#accountDataUpdateInterval)
    this.#accountDataUpdateInterval = setInterval(() => {
      this.updateAccountData?.()
    }, 1000)
  }

  public async updateAccountData() {
    const web3 = useWeb3()
    if (!web3) return

    const account = await web3.getSigner().getAddress()
    const chainId = await web3.getSigner().getChainId()

    this.setState({
      address: account,
      chainId: chainId
    })
  }
}
