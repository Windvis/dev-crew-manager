import React from 'react'
import { Page, Section } from 'react-page-layout'
import { LAYOUTS } from '../../config/layouts/index'

export function HireDeveloperPage () {
  return (
    <Page layout={LAYOUTS.main.name}>
      <Section slot={LAYOUTS.main.slots.header}>
        <h1> HIRE A NEW GUY </h1>
      </Section>
      <Section slot={LAYOUTS.main.slots.content}>
        <h2> Form </h2>
      </Section>
    </Page>
  )
}
