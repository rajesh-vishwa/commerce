import React from 'react'
import Swatch from './Swatch'
import { product } from '../ProductView/data'
import { getProductOptions } from '../helpers'

const options = getProductOptions(product)

//console.log('options', options)

const opt = { displayName: 'size', values: [{ label: 'S' }] }
const v = opt.values[0]

export default {
  title: 'Swatch',
  component: Swatch,
}

const Template = (args: any) => <Swatch {...args} />

export const Primary = Template.bind({})

Primary.args = {
  variant: opt.displayName,
  color: '',
  label: v.label,
}
