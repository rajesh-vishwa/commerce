import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ProductView from './ProductView'
import { product } from './data'

// const product = {
//   entityId: 116,
//   name: 'Test Jacket',
//   path: '/matte-black-magic-mug/',
//   brand: { entityId: 37 },
//   description: '<p>Add a little zing to your winter</p>',
//   images: {
//     edges: [
//       {
//         node: {
//           altText: '',
//           isDefault: true,
//           urlOriginal:
//             'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/399/Men-Jacket-Front-Black__15466__13951.1606557175.png',
//         },
//       },
//     ],
//     name: 'Lightweight Jacket',
//     path: '/matte-black-magic-mug/',
//   },
//   prices: {price: {currencyCode: "USD", value: 249.99}, retailPrice: null, salePrice: null},
//   productOptions: {
//     edges: [{node: {__typename: "MultipleChoiceOption", displayName: "Color",
//     entityId: 135, values: {edges: [{node: {label: "Black", isDefault: false, hexColors: ["#FFFFFF"]}, {node: {label: "White", isDefault: false, hexColors: ["#FFFFFF"]}}}]}}}
// ]
// }
// }

// const product = {
//   __typename: 'Product',
//   entityId: 116,
//   name: 'Lightweight Jacket',
//   path: '/matte-black-magic-mug/',
//   brand: { entityId: 37 },
//   description:
//     '<p>Add a little zing to your winter wardrobe with this vibrant Winter-breaker Jacket. With a brushed fleece inside, and a relaxed unisex fit, this jacket is just the stuff of the dreams, so be quick to grab yourself one!<br /><br /><span>Long sleeve ripstop jacket colorblocked in black. Rough pattern in obsidian black and brown printed throughout. Printed graphic in white throughout. Logo-woven webbing trim in white and black throughout. Bungee-style drawstring at hood featuring rubberized logo hardware. Zip closure at front. Rubberized logo appliqu&eacute; at chest. Welt pockets and textile logo patch in orange at waist. Elasticized cuffs. Partially lined. Black hardware.</span></p>',
//   prices: {
//     price: { value: 249.99, currencyCode: 'USD' },
//     salePrice: null,
//     retailPrice: null,
//   },
//   images: {
//     edges: [
//       {
//         node: {
//           urlOriginal:
//             'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/399/Men-Jacket-Front-Black__15466__13951.1606557175.png',
//           altText: '',
//           isDefault: true,
//         },
//       },
//       {
//         node: {
//           urlOriginal:
//             'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/382/Men-Jacket-Side-Black__68202__84591.1606557175.png',
//           altText: '',
//           isDefault: false,
//         },
//       },
//       {
//         node: {
//           urlOriginal:
//             'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/411/Men-Jacket-Back-Black__33864__45541.1606557176.png',
//           altText: '',
//           isDefault: false,
//         },
//       },
//       {
//         node: {
//           urlOriginal:
//             'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/427/Men-Jacket-Front-White__95300__83057.1606557177.png',
//           altText: '',
//           isDefault: false,
//         },
//       },
//       {
//         node: {
//           urlOriginal:
//             'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/389/Men-Jacket-Side-White__91924__23587.1606557175.png',
//           altText: '',
//           isDefault: false,
//         },
//       },
//       {
//         node: {
//           urlOriginal:
//             'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/416/Men-Jacket-Back-White__02866__11075.1606557176.png',
//           altText: '',
//           isDefault: false,
//         },
//       },
//     ],
//   },
//   variants: {
//     edges: [
//       {
//         node: {
//           entityId: 159,
//           defaultImage: null,
//           prices: {
//             price: { value: 249.99, currencyCode: 'USD' },
//             salePrice: null,
//             retailPrice: null,
//           },
//           inventory: null,
//           productOptions: {
//             edges: [
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 135,
//                   displayName: 'Color',
//                   values: {
//                     edges: [
//                       {
//                         node: {
//                           label: 'Black',
//                           isDefault: false,
//                           hexColors: ['#000000'],
//                         },
//                       },
//                     ],
//                   },
//                 },
//               },
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 136,
//                   displayName: 'Size',
//                   values: { edges: [{ node: { label: 'S' } }] },
//                 },
//               },
//             ],
//           },
//         },
//       },
//       {
//         node: {
//           entityId: 164,
//           defaultImage: null,
//           prices: {
//             price: { value: 249.99, currencyCode: 'USD' },
//             salePrice: null,
//             retailPrice: null,
//           },
//           inventory: null,
//           productOptions: {
//             edges: [
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 135,
//                   displayName: 'Color',
//                   values: {
//                     edges: [
//                       {
//                         node: {
//                           label: 'Black',
//                           isDefault: false,
//                           hexColors: ['#000000'],
//                         },
//                       },
//                     ],
//                   },
//                 },
//               },
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 136,
//                   displayName: 'Size',
//                   values: { edges: [{ node: { label: 'M' } }] },
//                 },
//               },
//             ],
//           },
//         },
//       },
//       {
//         node: {
//           entityId: 166,
//           defaultImage: null,
//           prices: {
//             price: { value: 249.99, currencyCode: 'USD' },
//             salePrice: null,
//             retailPrice: null,
//           },
//           inventory: null,
//           productOptions: {
//             edges: [
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 135,
//                   displayName: 'Color',
//                   values: {
//                     edges: [
//                       {
//                         node: {
//                           label: 'Black',
//                           isDefault: false,
//                           hexColors: ['#000000'],
//                         },
//                       },
//                     ],
//                   },
//                 },
//               },
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 136,
//                   displayName: 'Size',
//                   values: { edges: [{ node: { label: 'L' } }] },
//                 },
//               },
//             ],
//           },
//         },
//       },
//       {
//         node: {
//           entityId: 169,
//           defaultImage: null,
//           prices: {
//             price: { value: 249.99, currencyCode: 'USD' },
//             salePrice: null,
//             retailPrice: null,
//           },
//           inventory: null,
//           productOptions: {
//             edges: [
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 135,
//                   displayName: 'Color',
//                   values: {
//                     edges: [
//                       {
//                         node: {
//                           label: 'White',
//                           isDefault: false,
//                           hexColors: ['#FFFFFF'],
//                         },
//                       },
//                     ],
//                   },
//                 },
//               },
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 136,
//                   displayName: 'Size',
//                   values: { edges: [{ node: { label: 'S' } }] },
//                 },
//               },
//             ],
//           },
//         },
//       },
//       {
//         node: {
//           entityId: 171,
//           defaultImage: null,
//           prices: {
//             price: { value: 249.99, currencyCode: 'USD' },
//             salePrice: null,
//             retailPrice: null,
//           },
//           inventory: null,
//           productOptions: {
//             edges: [
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 135,
//                   displayName: 'Color',
//                   values: {
//                     edges: [
//                       {
//                         node: {
//                           label: 'White',
//                           isDefault: false,
//                           hexColors: ['#FFFFFF'],
//                         },
//                       },
//                     ],
//                   },
//                 },
//               },
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 136,
//                   displayName: 'Size',
//                   values: { edges: [{ node: { label: 'M' } }] },
//                 },
//               },
//             ],
//           },
//         },
//       },
//       {
//         node: {
//           entityId: 172,
//           defaultImage: null,
//           prices: {
//             price: { value: 249.99, currencyCode: 'USD' },
//             salePrice: null,
//             retailPrice: null,
//           },
//           inventory: null,
//           productOptions: {
//             edges: [
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 135,
//                   displayName: 'Color',
//                   values: {
//                     edges: [
//                       {
//                         node: {
//                           label: 'White',
//                           isDefault: false,
//                           hexColors: ['#FFFFFF'],
//                         },
//                       },
//                     ],
//                   },
//                 },
//               },
//               {
//                 node: {
//                   __typename: 'MultipleChoiceOption',
//                   entityId: 136,
//                   displayName: 'Size',
//                   values: { edges: [{ node: { label: 'L' } }] },
//                 },
//               },
//             ],
//           },
//         },
//       },
//     ],
//   },
//   productOptions: {
//     edges: [
//       {
//         node: {
//           __typename: 'MultipleChoiceOption',
//           entityId: 135,
//           displayName: 'Color',
//           values: {
//             edges: [
//               {
//                 node: {
//                   label: 'Black',
//                   isDefault: false,
//                   hexColors: ['#000000'],
//                 },
//               },
//               {
//                 node: {
//                   label: 'White',
//                   isDefault: false,
//                   hexColors: ['#FFFFFF'],
//                 },
//               },
//             ],
//           },
//         },
//       },
//       {
//         node: {
//           __typename: 'MultipleChoiceOption',
//           entityId: 136,
//           displayName: 'Size',
//           values: {
//             edges: [
//               { node: { label: 'S' } },
//               { node: { label: 'M' } },
//               { node: { label: 'L' } },
//             ],
//           },
//         },
//       },
//     ],
//   },
// }

storiesOf('ProductView', module).add('default', () => {
  return <ProductView product={product} />
})
