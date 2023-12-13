import Block from "@/shared/components/Block"
import Wrapper, { WrapperVariant } from "@/shared/components/Wrapper"
import Icon, { IconSize } from "@/shared/components/Icon"
import { Text } from "@/shared/components/Typography"
import { LargeTextType, SmallTextType, TextScale } from "@/shared/components/Typography/typography-types"

export default function TokenDisplay(props: { token: Erc20Token, title?: string }) {
  return (
    <Block title={ props.title } variant={ WrapperVariant.FlexInlineLeft } gap={ 10 }>
      <Icon size={ IconSize.x32 } icon={ props.token.icon } />
      <Wrapper variant={ WrapperVariant.FlexColumnLeft }>
        <Text<TextScale.Default> textScale={ TextScale.Default } textType={ LargeTextType.Medium }>
          { props.token.symbol }
        </Text>
        <Text<TextScale.Small> textScale={ TextScale.Small } textType={ SmallTextType.Medium }>
          { props.token.name }
        </Text>
      </Wrapper>
    </Block>
  )
}
