import {BsImages} from 'react-icons/bs'

export default {
  name: 'imagePost',
  type: 'document',
  title: 'Images',
  icon: BsImages,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Image title',
    },
    {
      name: 'sortOrder',
      type: 'number',
      title: 'Sort Order',
    },
    {
      name: 'description',
      title: 'Image description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
