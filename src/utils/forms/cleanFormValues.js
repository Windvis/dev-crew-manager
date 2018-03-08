import is from '../general/is'

export function cleanFormValues (formValues, preSubmit) {
  return Object.keys(formValues).reduce((cleanedFormValues, fieldName) => {
    if (is.function(preSubmit[fieldName])) {
      cleanedFormValues[fieldName] = preSubmit[fieldName](formValues[fieldName])
    } else {
      cleanedFormValues[fieldName] = formValues[fieldName];
    }
    return cleanedFormValues
  }, {})
}
