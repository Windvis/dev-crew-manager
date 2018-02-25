import React from 'react'
import { Page, Section } from 'react-page-layout'
import { LAYOUTS } from '../../config/layouts/index'
import OverviewFilters from '../components/OverviewFilters/OverviewFilters'
import DeveloperList from '../components/DeveloperList/DeveloperList'
import { IconHeading } from '../components/IconHeading/IconHeading'
import { navigateToHirePage } from '../../redux/location/actions'
import { ButtonLink } from '../components/ButtonLink/ButtonLink'

export default function OverviewPage ({developers}) {
  return (
    <Page layout={LAYOUTS.main.name}>
      <Section slot={LAYOUTS.main.slots.header}>
        <div className='overview-page__header'>
          <IconHeading icon={'👨‍💻'} >Developers</IconHeading>
          <ButtonLink buttonStyle='success' to={navigateToHirePage()}>Hire</ButtonLink>
        </div>
      </Section>
      <Section slot={LAYOUTS.main.slots.content}>
        <OverviewFilters />
        <DeveloperList />
      </Section>
    </Page>
  )
}
