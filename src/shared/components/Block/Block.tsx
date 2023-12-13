import { observer } from "mobx-react-lite"
import Wrapper, { WrapperVariant } from "@/shared/components/Wrapper"
import { Caption } from "@/shared/components/Typography"
import { CaptionType } from "@/shared/components/Typography/typography-types"
import "./Block.scss"

interface Props {
  title?: string
  children: any
  background?: AnyColor
  variant?: WrapperVariant

  height?: number
  gap?: number
}

function Block(props: Props) {
  return (
    <Wrapper
      variant={ WrapperVariant.FlexColumnLeft }
      gap={ 2 }
      className="block"
      style={ props.height ? { height: props.height } : undefined }
    >
      { props.title && (
        <Caption captionType={ CaptionType.Medium }>
          { props.title }
        </Caption>
      ) }

      <Wrapper
        variant={ props.variant ?? WrapperVariant.FlexColumnLeft }
        gap={ props.gap }
        className={ props.background ? "color:" + props.background : undefined }
      >
        { props.children }
      </Wrapper>
    </Wrapper>
  )
}

export default observer(Block)
