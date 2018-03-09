import is from '../../general/is'

export function convertSelectDataToValue (selectData) {
  if (is.array(selectData)) {
    // Multi select, return an array of values
    return selectData.map((data) => data.value)
  } else if (!is.null(selectData) && is.object(selectData)) {
    return selectData.value
  }
  // React-Select returns null when the field is cleared
  return selectData
}
