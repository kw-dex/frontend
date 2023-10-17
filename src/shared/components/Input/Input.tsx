import useOverridableState, { StateOverride } from "@/shared/hooks/use-overridable-state"
import Wrapper, { WrapperVariant } from "@/shared/components/Wrapper"
import React, { CSSProperties, useCallback } from "react"
import { classNames } from "@knownout/lib"
import "./Input.scss"
import { Text } from "@/shared/components/Typography"
import { LargeTextType, TextScale } from "@/shared/components/Typography/typography-types"

export enum InputVariant {
  Default = "default",
  Inline = "inline"
}

interface Props {
  width: "fit-content" | `${string}%` | `${string}em` | number
  height?: "fit-content" | `${string}%` | `${string}em` | number

  style?: CSSProperties

  valueStateOverride?: StateOverride<string>
  invalid?: boolean
  disabled?: boolean

  replacePattern?: RegExp
  maxLength?: number
  attachedElement?: JSX.Element
  hideClearButton?: boolean

  placeholder?: string
  readOnly?: boolean

  variant?: InputVariant

  preProcess?(value: string): string

  onChange?(value: string): any

  onFocus?(): any

  onBlur?(): any
}

export default function Input(props: Props) {
  const [value, setValue] = useOverridableState(String(), props.valueStateOverride)

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    let _val = event.target.value.trimStart()

    if (props.preProcess) _val = props.preProcess(_val)
    if (props.replacePattern) _val = _val.replace(props.replacePattern, "")

    setValue(_val)
  }, [props.onChange, props.preProcess, props.replacePattern, setValue])

  return (
    <Wrapper
      variant={WrapperVariant.FlexInlineLeft}
      className={classNames("input", {
        invalid: props.invalid,
        disabled: props.disabled
      }, props.variant)}
      gap={10}
      style={{
        width: props.width,
        height: props.height,
        ...props.style
      }}
    >
      <Wrapper variant={WrapperVariant.FlexInlineLeft} fullWidth className="input__internal">
        <input
          type="text"
          onChange={handleChange}
          value={value}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
        {props.hideClearButton !== true && !props.attachedElement && value.length > 0 && (
          <Text<TextScale.Default>
            textScale={TextScale.Default}
            textType={LargeTextType.Default}
            className="input__clear"
            onClick={() => setValue("")}
            style={{ width: "fit-content" }}
          >
            Clear
          </Text>
        )}
      </Wrapper>

      {props.attachedElement && (
        <Wrapper variant={WrapperVariant.FlexColumnLeft} className="input__attached">
          {props.attachedElement}
        </Wrapper>
      )}
    </Wrapper>
  )
}