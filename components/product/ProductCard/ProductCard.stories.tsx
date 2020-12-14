import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ProductCard from './ProductCard'
import { productData } from '../productData'

storiesOf('ProductCard', module)
  .add('variant simple', () => {
    // return (
    //   <ProductCard
    //     product={productData}
    //     variant="simple"
    //     imgWidth={480}
    //     imgHeight={480}
    //     imgPriority
    //     imgLoading="eager"
    //     imgLayout="fixed"
    //   />
    // )
    return <div>A</div>
  })
  .add('variant slim', () => {
    // return (
    //   <ProductCard
    //     product={productData}
    //     variant="slim"
    //     imgWidth={320}
    //     imgHeight={320}
    //     imgLayout="fixed"
    //   />
    // )
    return <div>A</div>
  })
  .add('animated', () => {
    // return (
    //   <ProductCard
    //     product={productData}
    //     className="animated fadeIn"
    //     variant="simple"
    //     imgWidth={480}
    //     imgHeight={480}
    //   />
    // )
    return <div>A</div>
  })
