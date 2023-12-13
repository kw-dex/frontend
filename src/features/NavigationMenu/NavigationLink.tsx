import Wrapper, { WrapperVariant } from "@/shared/components/Wrapper"
import { Link, useLocation } from "react-router-dom"
import { Text } from "@/shared/components/Typography"
import { LargeTextType, TextScale } from "@/shared/components/Typography/typography-types"
import { classNames } from "@knownout/lib"

interface Props {
  children: string
  page: string
}

export default function NavigationLink(props: Props) {
  const location = useLocation()

  const inPath = location.pathname.includes("/" + props.page)

  return (
    <Wrapper
      variant={ WrapperVariant.FlexInlineCenter }
      className={ classNames(inPath ? "color:yellow" : "color:white", "nav-link") }
    >
      <Link to={ "/" + props.page }>
        <Text<TextScale.Default> textType={ LargeTextType.Medium } textScale={ TextScale.Default }>
          { props.children }
        </Text>
      </Link>
    </Wrapper>
  )
}
