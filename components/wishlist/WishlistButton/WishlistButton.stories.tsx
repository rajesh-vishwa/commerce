import React from 'react'
import WhishlistButton from './WishlistButton'
import { p } from '../../product/ProductView/data'

const varEdges = {
  node: {
    entityId: 159,
    defaultImage: null,
    prices: {
      price: { value: 249.99, currencyCode: 'USD' },
      salePrice: null,
      retailPrice: null,
    },
    inventory: null,
    productOptions: {
      edges: [
        {
          node: {
            __typename: 'MultipleChoiceOption',
            entityId: 135,
            displayName: 'Color',
            values: {
              edges: [
                {
                  node: {
                    label: 'Black',
                    isDefault: false,
                    hexColors: ['#000000'],
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            __typename: 'MultipleChoiceOption',
            entityId: 136,
            displayName: 'Size',
            values: { edges: [{ node: { label: 'S' } }] },
          },
        },
      ],
    },
  },
}

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
export const Default = Template.bind({
  entityId: p.entityId,
  variant: varEdges,
})

// Default.args = {
//   entityId: product.entityId,
//   variant: product.variants.edges[0],
// }
