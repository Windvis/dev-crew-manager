import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-form'
import { Button } from '../../Button/Button'
import { DeveloperFields } from '../FormFields/DeveloperFields'
import { developerValidator } from '../../../../utils/forms/validators/developerValidator'
import is from '../../../../utils/general/is'
import {
  updateDeveloperInfo as updateDeveloperInfoAction,
  fireDeveloper as fireDeveloperActionCreator
} from '../../../../redux/developers/actions'
import { navigateToOverviewPage } from '../../../../redux/location/actions'
import { getRouteParams } from '../../../../redux/location/selectors'
import { getDeveloperById } from '../../../../redux/developers/selectors'

class HireDeveloperForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      canSubmit: false
    }
  }

  render () {
    const { developer, updateDeveloperInfo, fireDeveloper } = this.props

    return (
      <Form
        defaultValues={developer}
        validate={values => {
          const validatedFields = developerValidator(values)

          const isFormInValid = Object.entries(validatedFields).some(field => {
            const [, fieldValue] = field
            return !is.null(fieldValue)
          })

          this.setState({
            canSubmit: !isFormInValid
          })

          return validatedFields
        }}
        validateOnMount
        onSubmit={developerData => {
          developerData.id = developer.id
          updateDeveloperInfo(developerData)
        }}
      >
        {formApi => {
          return (
            <form
              onSubmit={e => {
                e.preventDefault()
                formApi.submitForm()
              }}
            >
              <DeveloperFields formApi={formApi} />
              <div className='form-group form-buttons'>
                <Button
                  type='submit'
                  buttonStyle='success'
                  disabled={!this.state.canSubmit}
                >
                  Save
                </Button>
                <Button
                  buttonStyle='danger'
                  clickHandler={() => fireDeveloper(developer.id)}
                >
                  Fire
                </Button>
              </div>
            </form>
          )
        }}
      </Form>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HireDeveloperForm)

function mapStateToProps (state) {
  const developerId = getRouteParams(state).id
  return {
    developer: getDeveloperById(state, developerId)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateDeveloperInfo: developerInfo => {
      dispatch(updateDeveloperInfoAction(developerInfo))
      dispatch(navigateToOverviewPage())
    },
    fireDeveloper: developerId => {
      dispatch(fireDeveloperActionCreator(developerId))
      dispatch(navigateToOverviewPage())
    }
  }
}
