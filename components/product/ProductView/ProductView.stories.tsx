import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ProductView from './ProductView'
import { p } from './data'

storiesOf('ProductView', module).add('default', () => {
  return <ProductView product={p} />
  //return <div>A</div>
})
