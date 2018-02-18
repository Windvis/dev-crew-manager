import React from 'react'
import { Page, Section } from 'react-page-layout'
import { LAYOUTS } from '../../config/layouts/index'

export function OverviewPage () {
  return (
    <Page layout={LAYOUTS.main.name}>
      <Section slot={LAYOUTS.main.slots.header}>
        <h1> THIS IS THE PAGE HEADER </h1>
      </Section>
      <Section slot={LAYOUTS.main.slots.content}>
        <h2> THIS IS THE PAGE CONTENT </h2>
      </Section>
    </Page>
  )
}
