import is from '../../general/is'

export function convertSelectDataToValue (selectData) {
  if (is.array(selectData)) {
    // Multi select, return an array of values
    return selectData.map((data) => data.value)
  }

  return selectData.value
}
