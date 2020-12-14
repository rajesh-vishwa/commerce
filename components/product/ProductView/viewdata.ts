import type { ProductNode } from '@bigcommerce/storefront-data-hooks/api/operations/get-product'

export const view: ProductNode = {
  __typename: 'Product',
  entityId: 112,
  name: 'Black Hat',
  path: '/next-js-enamel-mug/',
  brand: null,
  description:
    "<p>The Next.js beanie has arrived! This embroidered beauty has a snug fit that ensures you're going to feel cozy and warm whatever you're doing.</p>\n<p>&bull; 60% cotton, 40% acrylic<br />&bull; Breathable cotton blend<br />&bull; Form-fitting shape<br />&bull; One size fits most</p>",
  prices: {
    price: { value: 20, currencyCode: 'USD' },
    salePrice: null,
    retailPrice: null,
  },
  images: {
    edges: [
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/112/376/Hat-front-black__72990__89284.1606557174.png',
          altText: '',
          isDefault: true,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/112/381/Hat-back-black__57260__33851.1606557175.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/112/395/Hat-left-black__51142__53726.1606557175.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/112/385/Hat-front-white__31525__61322.1606557175.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/112/390/Hat-left-white__29807__33817.1606557175.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/112/391/Hat-back-white__92043__16360.1606557175.png',
          altText: '',
          isDefault: false,
        },
      },
    ],
  },
  variants: {
    edges: [
      {
        node: {
          entityId: 81,
          defaultImage: null,
          prices: {
            price: { value: 20, currencyCode: 'USD' },
            salePrice: null,
            retailPrice: null,
          },
          inventory: null,
          productOptions: { edges: [] },
        },
      },
    ],
  },
  productOptions: { edges: [] },
  localeMeta: {
    edges: [
      {
        node: {
          key: 'abc',
          value: 'etst',
        },
      },
    ],
  },
}
