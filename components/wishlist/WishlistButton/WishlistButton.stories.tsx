import React from 'react'
import WhishlistButton from './WishlistButton'
import { product } from '../../product/ProductView/data'

export default {
  title: 'WhishlistButton',
  component: WhishlistButton,
}
// export const Default: React.VFC = () => (
//   <WhishlistButton
//     productId={product.entityId}
//     variant={product.variants.edges?.[0]}
//   />
// )

const Template = (args: any) => <WhishlistButton {...args} />
export const Default = Template.bind({})

Default.args = {
  entityId: product.entityId,
  variant: product.variants.edges[0],
}
