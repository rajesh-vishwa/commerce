export const cardData = {
  entityId: 116,
  name: 'Chaqueta de invierno',
  path: '/matte-black-magic-mug/',
  brand: { entityId: 37 },
  description:
    'Agregue un poco de chispa a su guardarropa de invierno con esta chaqueta rompevientos vibrante. Con un forro polar cepillado en el interior y un ajuste unisex relajado, esta chaqueta es solo el material de los sueños, ¡así que date prisa en conseguir una!',
  prices: {
    price: { value: 249.99, currencyCode: 'USD' },
    salePrice: null,
    retailPrice: null,
  },
  images: {
    edges: [
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/399/Men-Jacket-Front-Black__15466__13951.1606557175.png',
          altText: '',
          isDefault: true,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/382/Men-Jacket-Side-Black__68202__84591.1606557175.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/411/Men-Jacket-Back-Black__33864__45541.1606557176.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/427/Men-Jacket-Front-White__95300__83057.1606557177.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/389/Men-Jacket-Side-White__91924__23587.1606557175.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/116/416/Men-Jacket-Back-White__02866__11075.1606557176.png',
          altText: '',
          isDefault: false,
        },
      },
    ],
  },
  variants: {
    edges: [
      { node: { entityId: 159, defaultImage: null } },
      { node: { entityId: 164, defaultImage: null } },
      { node: { entityId: 166, defaultImage: null } },
      { node: { entityId: 169, defaultImage: null } },
      { node: { entityId: 171, defaultImage: null } },
      { node: { entityId: 172, defaultImage: null } },
    ],
  },
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
              {
                node: {
                  label: 'White',
                  isDefault: false,
                  hexColors: ['#FFFFFF'],
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
          values: {
            edges: [
              { node: { label: 'S' } },
              { node: { label: 'M' } },
              { node: { label: 'L' } },
            ],
          },
        },
      },
    ],
  },
}
