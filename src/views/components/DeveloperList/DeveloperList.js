import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import { Button } from '../Button/Button'
import { getDevelopers } from '../../../redux/developers/selectors'
import { navigateToUpdatePage, navigateToHirePage } from '../../../redux/location/actions'
import {fireDeveloper as fireDeveloperActionCreator} from '../../../redux/developers/actions'

function DeveloperList ({developers, fireDeveloper}) {
  if (developers.length > 0) {
    return (
      <div className='container developer-list-container'>
        <table className='developer-list'>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Frameworks</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {renderDeveloperData(developers, fireDeveloper)}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <p className='container'>
      You don't have any developers in your organisation?! You should&nbsp;
      <Link className='link' to={navigateToHirePage()}>hire</Link> some!
    </p>
  )
}

function renderDeveloperData (developers, fireDeveloper) {
  return developers.map((developer) => (
    <tr className='developer-list__data' key={developer.id}>
      <td className='developer-list__data__icon'>
        <span role='img'>{developer.icon}</span>
      </td>
      <td>{developer.firstName}</td>
      <td>{developer.lastName}</td>
      <td>{developer.role}</td>
      <td>{developer.frameworks.map((framework) => <span key={framework} className='badge'>{framework}</span>)}</td>
      <td className='developer-list__data__actions'>
        <Link className='link' to={navigateToUpdatePage(developer.id)}>Edit</Link>
        <Button
          type='danger'
          clickHandler={() => fireDeveloper(developer.id)}
        >
          Fire
        </Button>
      </td>
    </tr>
  ))
}

function mapStateToProps (state) {
  return {
    developers: getDevelopers(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fireDeveloper: (developerId) => dispatch(fireDeveloperActionCreator(developerId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeveloperList)
