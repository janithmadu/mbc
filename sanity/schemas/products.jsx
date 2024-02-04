
export default {
    name: 'products',
    type: 'document',
    title: 'products',
    fields: [
      {
        name: 'productname',
        type: 'string',
        title: 'Product Name'
      },
      {
        name: 'ProductPrice',
        type: 'number',
        title: 'Product Price'
      },
      {
        name: 'ProductDescription',
        type: 'string',
        title: 'Product Description'
      },
      {
        name: 'Instok',
        type: 'boolean',
        title: 'Instok'
      },
      {
        name: 'Status',
        type: 'string',
        title: 'Status'
      },
      {
        name: 'Image',
        type: 'image',
        title: 'Image'
      }
      
    ]
  }