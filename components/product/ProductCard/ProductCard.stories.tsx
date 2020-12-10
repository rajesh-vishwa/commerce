import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ProductCard from './ProductCard'
import { product } from '../ProductView/data'

storiesOf('ProductCard', module)
  .add('variant simple', () => {
    return (
      <ProductCard
        product={product}
        variant="simple"
        imgWidth={480}
        imgHeight={480}
        imgPriority
        imgLoading="eager"
        imgLayout="fixed"
      />
    )
  })
  .add('variant slim', () => {
    return (
      <ProductCard
        product={product}
        variant="slim"
        imgWidth={320}
        imgHeight={320}
        imgLayout="fixed"
      />
    )
  })
  .add('animated', () => {
    return (
      <ProductCard
        product={product}
        className="animated fadeIn"
        variant="simple"
        imgWidth={480}
        imgHeight={480}
      />
    )
  })
