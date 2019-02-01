import React from 'react'
import Link from 'redux-first-router-link'
import { Page, Section } from 'react-page-layout'
import { LAYOUTS } from '../../config/layouts/index'
import { IconHeading } from '../components/IconHeading/IconHeading'
import { navigateToOverviewPage } from '../../redux/location/actions'
import HireDeveloperForm from '../components/Forms/HireDeveloperForm/HireDeveloperForm'

export default function HireDeveloperPage () {
  return (
    <Page layout={LAYOUTS.main.name} className='hire-developer-page form-page'>
      <Section slot={LAYOUTS.main.slots.header}>
        <IconHeading icon={'🤝'}>Hire</IconHeading>
      </Section>
      <Section slot={LAYOUTS.main.slots.content}>
        <div className='hire-developer-page__content form-page__content container'>
          <Link
            className='link return-to-overview-link'
            to={navigateToOverviewPage()}
          >
            Back to developers
          </Link>

          <HireDeveloperForm />
        </div>
      </Section>
    </Page>
  )
}
