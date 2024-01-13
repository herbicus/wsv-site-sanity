import {BiSitemap} from 'react-icons/bi'

export default {
  name: 'site',
  type: 'document',
  title: 'Site',
  icon: BiSitemap,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Config',
      initialValue: 'Site Configuration',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Site meta title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Hero Image',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'subheading',
      type: 'string',
      title: 'Subheading',
    },
    {
      name: 'description',
      type: 'wysiwyg',
      title: 'Description',
    },
  ],
}
