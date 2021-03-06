import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ProductCard from './ProductCard'
import { p } from '../ProductView/data'
//import { node } from '../ProductCard/cardData'

storiesOf('ProductCard', module)
  .add('variant simple', () => {
    return (
      <ProductCard
        product={p}
        variant="simple"
        imgWidth={480}
        imgHeight={480}
        imgPriority
        imgLoading="eager"
        imgLayout="fixed"
      />
    )
    //return <div>A</div>
  })
  .add('variant slim', () => {
    return (
      <ProductCard
        product={p}
        variant="slim"
        imgWidth={320}
        imgHeight={320}
        imgLayout="fixed"
      />
    )
    //return <div>A</div>
  })
  .add('animated', () => {
    return (
      <ProductCard
        product={p}
        className="animated fadeIn"
        variant="simple"
        imgWidth={480}
        imgHeight={480}
      />
    )
    // return <div>A</div>
  })
