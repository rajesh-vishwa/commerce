import type { ProductNode } from '@bigcommerce/storefront-data-hooks/api/operations/get-all-products'
export const productData: ProductNode = {
  __typename: 'Product',
  entityId: 115,
  name: 'T-Shirt',
  path: '/jacket/',
  brand: { entityId: 37 },
  description:
    "<p>This t-shirt is a must-have in your wardrobe, combining the timeless fit of a classic tee with an intricate embroidered detail that brings the shirt to a whole new level. It's soft and durable, so be prepared to have a new favorite t-shirt!<br /><br /></p>",
  prices: {
    price: { value: 60.12, currencyCode: 'USD' },
    salePrice: null,
    retailPrice: null,
  },
  images: {
    edges: [
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/115/412/Men-TShirt-Black-Front__70046__63610.1606557176.png',
          altText: '',
          isDefault: true,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/115/387/Men-TShirt-Black-Left-Side__72119__64452.1606557175.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/115/413/Men-TShirt-Black-Back__57266__51067.1606557176.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/115/392/Men-TShirt-White-Front__99616__00749.1606557175.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/115/378/Men-TShirt-White-Left-Side__69000__67621.1606557174.png',
          altText: '',
          isDefault: false,
        },
      },
      {
        node: {
          urlOriginal:
            'https://cdn11.bigcommerce.com/s-pmx317s51s/images/stencil/original/products/115/408/Men-TShirt-White-Back__33450__46847.1606557176.png',
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
          entityId: 113,
          defaultImage: null,
          prices: {
            price: { value: 60.12, currencyCode: 'USD' },
            salePrice: null,
            retailPrice: null,
          },
          inventory: null,
          productOptions: {
            edges: [
              {
                node: {
                  __typename: 'MultipleChoiceOption',
                  entityId: 125,
                  displayName: 'color',
                  values: {
                    edges: [
                      {
                        node: {
                          label: 'Black',
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
                  entityId: 126,
                  displayName: 'size',
                  values: { edges: [{ node: { label: 'XS' } }] },
                },
              },
            ],
          },
        },
      },
      {
        node: {
          entityId: 115,
          defaultImage: null,
          prices: {
            price: { value: 60.12, currencyCode: 'USD' },
            salePrice: null,
            retailPrice: null,
          },
          inventory: null,
          productOptions: {
            edges: [
              {
                node: {
                  __typename: 'MultipleChoiceOption',
                  entityId: 125,
                  displayName: 'color',
                  values: {
                    edges: [
                      {
                        node: {
                          label: 'Black',
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
                  entityId: 126,
                  displayName: 'size',
                  values: { edges: [{ node: { label: 'S' } }] },
                },
              },
            ],
          },
        },
      },
      {
        node: {
          entityId: 116,
          defaultImage: null,
          prices: {
            price: { value: 60.12, currencyCode: 'USD' },
            salePrice: null,
            retailPrice: null,
          },
          inventory: null,
          productOptions: {
            edges: [
              {
                node: {
                  __typename: 'MultipleChoiceOption',
                  entityId: 125,
                  displayName: 'color',
                  values: {
                    edges: [
                      {
                        node: {
                          label: 'Black',
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
                  entityId: 126,
                  displayName: 'size',
                  values: { edges: [{ node: { label: 'M' } }] },
                },
              },
            ],
          },
        },
      },
      {
        node: {
          entityId: 119,
          defaultImage: null,
          prices: {
            price: { value: 60.12, currencyCode: 'USD' },
            salePrice: null,
            retailPrice: null,
          },
          inventory: null,
          productOptions: {
            edges: [
              {
                node: {
                  __typename: 'MultipleChoiceOption',
                  entityId: 125,
                  displayName: 'color',
                  values: {
                    edges: [
                      {
                        node: {
                          label: 'Black',
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
                  entityId: 126,
                  displayName: 'size',
                  values: { edges: [{ node: { label: 'L' } }] },
                },
              },
            ],
          },
        },
      },
      {
        node: {
          entityId: 123,
          defaultImage: null,
          prices: {
            price: { value: 60.12, currencyCode: 'USD' },
            salePrice: null,
            retailPrice: null,
          },
          inventory: null,
          productOptions: {
            edges: [
              {
                node: {
                  __typename: 'MultipleChoiceOption',
                  entityId: 125,
                  displayName: 'color',
                  values: {
                    edges: [
                      {
                        node: {
                          label: 'Black',
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
                  entityId: 126,
                  displayName: 'size',
                  values: { edges: [{ node: { label: 'XL' } }] },
                },
              },
            ],
          },
        },
      },
      {
        node: {
          entityId: 128,
          defaultImage: null,
          prices: {
            price: { value: 60.12, currencyCode: 'USD' },
            salePrice: null,
            retailPrice: null,
          },
          inventory: null,
          productOptions: {
            edges: [
              {
                node: {
                  __typename: 'MultipleChoiceOption',
                  entityId: 125,
                  displayName: 'color',
                  values: {
                    edges: [
                      {
                        node: {
                          label: 'Black',
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
                  entityId: 126,
                  displayName: 'size',
                  values: { edges: [{ node: { label: 'XXL' } }] },
                },
              },
            ],
          },
        },
      },
      {
        node: {
          entityId: 130,
          defaultImage: null,
          prices: {
            price: { value: 60.12, currencyCode: 'USD' },
            salePrice: null,
            retailPrice: null,
          },
          inventory: null,
          productOptions: {
            edges: [
              {
                node: {
                  __typename: 'MultipleChoiceOption',
                  entityId: 125,
                  displayName: 'color',
                  values: {
                    edges: [
                      {
                        node: {
                          label: 'White',
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
                  entityId: 126,
                  displayName: 'size',
                  values: { edges: [{ node: { label: 'XS' } }] },
                },
              },
            ],
          },
        },
      },
      {
        node: {
          entityId: 134,
          defaultImage: null,
          prices: {
            price: { value: 60.12, currencyCode: 'USD' },
            salePrice: null,
            retailPrice: null,
          },
          inventory: null,
          productOptions: {
            edges: [
              {
                node: {
                  __typename: 'MultipleChoiceOption',
                  entityId: 125,
                  displayName: 'color',
                  values: {
                    edges: [
                      {
                        node: {
                          label: 'White',
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
                  entityId: 126,
                  displayName: 'size',
                  values: { edges: [{ node: { label: 'S' } }] },
                },
              },
            ],
          },
        },
      },
      {
        node: {
          entityId: 136,
          defaultImage: null,
          prices: {
            price: { value: 60.12, currencyCode: 'USD' },
            salePrice: null,
            retailPrice: null,
          },
          inventory: null,
          productOptions: {
            edges: [
              {
                node: {
                  __typename: 'MultipleChoiceOption',
                  entityId: 125,
                  displayName: 'color',
                  values: {
                    edges: [
                      {
                        node: {
                          label: 'White',
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
                  entityId: 126,
                  displayName: 'size',
                  values: { edges: [{ node: { label: 'M' } }] },
                },
              },
            ],
          },
        },
      },
      {
        node: {
          entityId: 141,
          defaultImage: null,
          prices: {
            price: { value: 60.12, currencyCode: 'USD' },
            salePrice: null,
            retailPrice: null,
          },
          inventory: null,
          productOptions: {
            edges: [
              {
                node: {
                  __typename: 'MultipleChoiceOption',
                  entityId: 125,
                  displayName: 'color',
                  values: {
                    edges: [
                      {
                        node: {
                          label: 'White',
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
                  entityId: 126,
                  displayName: 'size',
                  values: { edges: [{ node: { label: 'L' } }] },
                },
              },
            ],
          },
        },
      },
    ],
  },
  productOptions: {
    edges: [
      {
        node: {
          __typename: 'MultipleChoiceOption',
          entityId: 125,
          displayName: 'color',
          values: {
            edges: [
              {
                node: {
                  label: 'Black',
                  isDefault: false,
                  hexColors: ['#FFFFFF'],
                },
              },
              {
                node: {
                  label: 'White',
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
          entityId: 126,
          displayName: 'size',
          values: {
            edges: [
              { node: { label: 'XS' } },
              { node: { label: 'S' } },
              { node: { label: 'M' } },
              { node: { label: 'L' } },
              { node: { label: 'XL' } },
              { node: { label: 'XXL' } },
            ],
          },
        },
      },
    ],
  },
}
