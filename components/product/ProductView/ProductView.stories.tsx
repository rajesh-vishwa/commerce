import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ProductView from './ProductView'
import { view } from './viewdata'

storiesOf('ProductView', module).add('default', () => {
  return <ProductView product={view} />
  //return <div>A</div>
})
