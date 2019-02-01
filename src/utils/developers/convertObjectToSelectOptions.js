export default function convertObjectToSelectOptions (object) {
  return Object.keys(object).map(key => {
    return {
      value: object[key],
      label: object[key]
    }
  })
}
