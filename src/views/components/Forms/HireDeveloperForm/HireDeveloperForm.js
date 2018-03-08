import React, {Component} from 'react'
import { Form } from 'react-form'
import { Button } from '../../Button/Button'
import { DeveloperFields, defaultFieldValues, preSubmit } from '../FormFields/DeveloperFields'
import { developerValidator } from '../../../../utils/forms/validators/developerValidator'
import is from '../../../../utils/general/is'
import { cleanFormValues } from '../../../../utils/forms/cleanFormValues'

class HireDeveloperForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      canSubmit: false
    }
  }

  render () {
    return (
      <Form
        defaultValues={defaultFieldValues}
        validate={(values) => {
          const validatedFields = developerValidator(values)

          const isFormInValid = Object.entries(validatedFields).some((field) => {
            const [, fieldValue] = field
            return !is.null(fieldValue)
          })

          this.setState({
            canSubmit: !isFormInValid
          })

          return validatedFields
        }}
        preSubmit={(formValues) => {
          return cleanFormValues(formValues, preSubmit)
        }}
        onSubmit={(submittedValues) => {
          console.log(submittedValues)
        }}
      >
        {(formApi) => {
          return (
            <form onSubmit={(e) => {
              e.preventDefault()
              formApi.submitForm()
            }}>
              <DeveloperFields formApi={formApi} />
              <div className='form-group form-buttons'>
                <Button
                  type='submit'
                  buttonStyle='success'
                  disabled={!this.state.canSubmit}
                >
                 Hire
                </Button>
              </div>
            </form>
          )
        }}
      </Form>
    )
  }
}

export default HireDeveloperForm
