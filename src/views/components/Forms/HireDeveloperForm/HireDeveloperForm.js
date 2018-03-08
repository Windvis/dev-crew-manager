import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-form'
import uuid from 'uuid/v4'
import { Button } from '../../Button/Button'
import { DeveloperFields, defaultFieldValues, preSubmit } from '../FormFields/DeveloperFields'
import { developerValidator } from '../../../../utils/forms/validators/developerValidator'
import is from '../../../../utils/general/is'
import { cleanFormValues } from '../../../../utils/forms/cleanFormValues'
import { hireDeveloper as hireDeveloperAction } from '../../../../redux/developers/actions'
import { navigateToOverviewPage } from '../../../../redux/location/actions'

class HireDeveloperForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      canSubmit: false
    }
  }

  render () {
    const {hireDeveloper} = this.props

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
        onSubmit={(developerData) => {
          developerData.id = uuid()
          developerData.icon = '👾'

          hireDeveloper(developerData)
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

export default connect(null, mapDispatchToProps)(HireDeveloperForm)

function mapDispatchToProps (dispatch) {
  return {
    hireDeveloper: (developerInfo) => {
      dispatch(hireDeveloperAction(developerInfo))
      dispatch(navigateToOverviewPage())
    }
  }
}
