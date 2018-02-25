export function arrayContainsValueFromOtherArray (arrayToSearch, otherArray) {
  return otherArray.some((value) => {
    return arrayToSearch.includes(value)
  })
}