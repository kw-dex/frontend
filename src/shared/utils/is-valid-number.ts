import BigNumber from "bignumber.js"

export default function isValidNumber(
  values: (string | BigNumber)[],
  positiveOnly = true,
  callback?: (value: BigNumber) => boolean
) {
  const _values = values.map(value => typeof value === "string" ? new BigNumber(value) : value)

  if (_values.some(value => value.isNaN())) return false

  if (callback && _values.some(value => !callback(value))) return false

  return !(positiveOnly && _values.some(value => value.lt(0)))
}