import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import { Page, Section } from 'react-page-layout'
import { LAYOUTS } from '../../config/layouts/index'
import { IconHeading } from '../components/IconHeading/IconHeading'
import { navigateToOverviewPage } from '../../redux/location/actions'
import { getRouteParams } from '../../redux/location/selectors'
import { getDeveloperById } from '../../redux/developers/selectors'

function updateDeveloperInfo ({developer}) {
  return (
    <Page layout={LAYOUTS.main.name} className='update-developer-info-page form-page'>
      <Section slot={LAYOUTS.main.slots.header}>
        <IconHeading icon={developer.icon}>{developer.firstName} {developer.lastName}</IconHeading>
      </Section>
      <Section slot={LAYOUTS.main.slots.content}>
        <div className='update-developer-info-page__content form-page__content container'>
          <Link className='link' to={navigateToOverviewPage()}>Back to developers</Link>
        </div>
      </Section>
    </Page>
  )
}

function mapStateToProps (state) {
  const developerId = getRouteParams(state).id

  return {
    developer: getDeveloperById(state, developerId)
  }
}

export default connect(mapStateToProps)(updateDeveloperInfo)
