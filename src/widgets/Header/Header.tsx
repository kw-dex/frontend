import { observer } from "mobx-react-lite"
import Wrapper, { WrapperVariant } from "@/shared/components/Wrapper"
import WalletConnectButton from "@/features/WalletConnectButton"
import "./Header.scss"
import { Heading } from "@/shared/components/Typography"
import { HeadingType } from "@/shared/components/Typography/typography-types"
import NavigationMenu from "@/features/NavigationMenu/NavigationMenu"

function Header() {
  return (
    <Wrapper
      variant={ WrapperVariant.FlexInlineSpaceBetween }
      gap={ 10 }
      fullWidth
      className="header color:white"
      overflow
    >
      <Wrapper variant={ WrapperVariant.FlexInlineLeft } gap={ 160 }>
        <Heading headingType={ HeadingType.Medium }>
          KW DEX
        </Heading>

        <NavigationMenu />
      </Wrapper>

      <Wrapper variant={ WrapperVariant.FlexInlineRight }>
        <WalletConnectButton />
      </Wrapper>
    </Wrapper>
  )
}

export default observer(Header)
