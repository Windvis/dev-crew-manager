import React from 'react'
import Select from 'react-select'
import Link from 'redux-first-router-link'
import { Page, Section } from 'react-page-layout'
import { LAYOUTS } from '../../config/layouts/index'
import { IconHeading } from '../components/IconHeading/IconHeading'
import { navigateToOverviewPage } from '../../redux/location/actions'
import {Button} from '../components/Button/Button'
import convertObjectToSelectOptions from '../../utils/developers/convertObjectToSelectOptions'
import { ROLES } from '../../config/developers/roles'
import { FRAMEWORKS } from '../../config/developers/frameworks'

export default function HireDeveloperPage () {
  return (
    <Page layout={LAYOUTS.main.name} className='hire-developer-page form-page'>
      <Section slot={LAYOUTS.main.slots.header}>
        <IconHeading icon={'🤝'}>Hire</IconHeading>
      </Section>
      <Section slot={LAYOUTS.main.slots.content}>
        <div className='hire-developer-page__content form-page__content container'>
          <Link className='link return-to-overview-link' to={navigateToOverviewPage()}>Back to developers</Link>

          <form>
            <div className='form-group'>
              <label className='label'>First Name</label>
              <input className='field' />
            </div>
            <div className='form-group'>
              <label className='label'>Last Name</label>
              <input className='field' />
            </div>

            <div className='form-group'>
              <label className='label'>Role</label>
              <Select
                name='form-field-name'
                value={''}
                multi
                onChange={(value) => {
                  console.log(value)
                }}
                options={convertObjectToSelectOptions(ROLES)}
              />
            </div>

            <div className='form-group'>
              <label className='label'>Frameworks</label>
              <Select
                name='form-field-name'
                value={['REACT', 'ANGULAR']}
                multi
                onChange={(value) => {
                  console.log(value)
                }}
                options={convertObjectToSelectOptions(FRAMEWORKS)}
              />
            </div>

            <div className='form-group form-buttons'>
              <Button type='success'>Hire</Button>
              <Button type='danger'>Fire</Button>
            </div>
          </form>
        </div>
      </Section>
    </Page>
  )
}
