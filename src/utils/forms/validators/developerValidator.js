import is from '../../general/is'

const FIELD_ERROR_MESSAGES = {
  firstName: 'Please provide a first name.',
  lastName: 'Please provide a last name.',
  role: 'Please select a role',
  frameworks: 'Please select one or more frameworks.',
  default: 'This field is required'
}

export function developerValidator (values) {
  // ⚠️ Object.entries should be polyfilled for older browsers!
  const errors = Object.entries(values).reduce(toValidatedFieldMessages, {})

  return errors
}

function toValidatedFieldMessages (errorMessages, fieldData) {
  const [fieldName, fieldValue] = fieldData

  if (is.empty(fieldValue)) {
    errorMessages[fieldName] = FIELD_ERROR_MESSAGES[fieldName]
  } else {
    errorMessages[fieldName] = null
  }

  return errorMessages
}
