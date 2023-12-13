import Wrapper, { WrapperVariant } from "@/shared/components/Wrapper"
import Constants from "@/app/configs/constants"
import NavigationLink from "@/features/NavigationMenu/NavigationLink"
import "./NavigationMenu.scss"

export default function NavigationMenu() {
  return (
    <Wrapper variant={ WrapperVariant.FlexInlineLeft } gap={ 60 }>
      {
        Object.entries(Constants.navigationMap).map(([link, name]) => (
          <NavigationLink page={ link } key={ link }>{ name }</NavigationLink>
        ))
      }
    </Wrapper>
  )
}
