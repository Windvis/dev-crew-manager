export default function convertObjectToSelectOptions (object) {
  return Object.keys(object).map((key) => {
    return {
      value: key,
      label: object[key]
    }
  })
}
