import React from 'react'
import { Page, Section } from 'react-page-layout'
import { LAYOUTS } from '../../config/layouts/index'
import DeveloperList from '../components/DeveloperList/DeveloperList'

export default function OverviewPage ({developers}) {
  return (
    <Page layout={LAYOUTS.main.name}>
      <Section slot={LAYOUTS.main.slots.header}>
        <h1>👓Developers</h1>
      </Section>
      <Section slot={LAYOUTS.main.slots.content}>
        <DeveloperList />
      </Section>
    </Page>
  )
}
