import { observer } from "mobx-react-lite"
import Wrapper, { WrapperVariant } from "@/shared/components/Wrapper"
import useStore from "@/shared/hooks/use-store"
import KwContractsStore from "@/shared/stores/kw-contracts-store"
import TokenDisplay from "@/shared/components/TokenDisplay"
import Block from "@/shared/components/Block/Block"
import { Heading, Text } from "@/shared/components/Typography"
import { HeadingType, LargeTextType } from "@/shared/components/Typography/typography-types"
import Button from "@/shared/components/Button"
import { ArrowUpRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { ButtonVariant } from "@/shared/components/Button/Button"
import Input from "@/shared/components/Input"
import { useState } from "react"
import Loader from "@/shared/components/Loader"
import { useNavigate } from "react-router-dom"

function filterPool(query: string, pool: Pool) {
  if (!query || query.trim().length === 0) return true

  const q = query.toLowerCase().trim()

  return pool.token0.symbol.toLowerCase().includes(q)
    || pool.token1.symbol.toLowerCase().includes(q)
    || pool.token0.name.toLowerCase().includes(q)
    || pool.token1.name.toLowerCase().includes(q)
    || (pool.feePercent.toString() + "%").includes(q)
}

function PoolsList() {
  const contractStore = useStore(KwContractsStore)

  const navigate = useNavigate()

  const [query, setQuery] = useState("")

  const poolsList = contractStore.state.pools.filter(pool => filterPool(query, pool))

  return (
    <Wrapper variant={ WrapperVariant.FlexColumnLeft } gap={ 20 } fullWidth>
      <Input
        width={ 400 }
        icon={ <MagnifyingGlassIcon /> }
        placeholder="Search for pools..."
        valueStateOverride={ {
          value: query,
          setValue: setQuery
        } }
      />

      <Wrapper variant={ WrapperVariant.FlexColumnLeft } gap={ 10 } fullWidth>
        { poolsList.length > 0 ? (
          poolsList.map(pool => (
            <Wrapper variant={ WrapperVariant.FlexInlineLeft } fullWidth gap={ 10 } key={ pool.address }>
              <TokenDisplay token={ pool.token0 } title="Token 0" />
              <TokenDisplay token={ pool.token1 } title="Token 1" />
              <Block title="Fee percent">
                <Heading headingType={ HeadingType.Medium }>
                  <Wrapper variant={ WrapperVariant.FlexInlineLeft } style={ { paddingTop: 6 } }>
                    { pool.feePercent.toString() }%
                  </Wrapper>
                </Heading>
              </Block>

              <Button
                icon={ <ArrowUpRightIcon /> }
                variant={ ButtonVariant.TransparentYellow }
                style={ { height: 96 } }
                fullWidth
                onClick={ () => {
                  navigate("/pool/" + pool.address)
                } }
              >
                Open pool
              </Button>
            </Wrapper>
          ))
        ) : (
          query ? (
            <Wrapper variant={ WrapperVariant.FlexInlineLeft }>
              <Text textType={ LargeTextType.Medium } style={ { opacity: 0.5 } }>
                No pools found
              </Text>
            </Wrapper>
          ) : (
            <Loader />
          )
        ) }
      </Wrapper>
    </Wrapper>
  )
}

export default observer(PoolsList)
