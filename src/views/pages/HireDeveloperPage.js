import React from 'react'
import Link from 'redux-first-router-link'
import { Page, Section } from 'react-page-layout'
import { LAYOUTS } from '../../config/layouts/index'
import { IconHeading } from '../components/IconHeading/IconHeading'
import { navigateToOverviewPage } from '../../redux/location/actions'

export function HireDeveloperPage () {
  return (
    <Page layout={LAYOUTS.main.name} className='hire-developer-page'>
      <Section slot={LAYOUTS.main.slots.header}>
        <IconHeading icon={'🤝'}>Hire</IconHeading>
      </Section>
      <Section slot={LAYOUTS.main.slots.content}>
        <div className='hire-developer-page__content container'>
          <Link className='link' to={navigateToOverviewPage()}>Back to developers</Link>
        </div>
      </Section>
    </Page>
  )
}
