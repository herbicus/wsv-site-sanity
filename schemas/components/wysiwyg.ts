import {BsFileRichtext} from 'react-icons/bs'

export default {
  name: 'wysiwyg',
  icon: BsFileRichtext,
  type: 'object',
  title: 'WYSIWYG',
  fields: [
    {
      name: 'theme',
      type: 'string',
      title: 'Theme',
      options: {
        list: [
          {title: 'Text is dark', value: 'light'},
          {title: 'Text is light', value: 'dark'},
        ],
        layout: 'radio',
      },
      initialValue: 'light',
    },
    {
      name: 'textAlign',
      type: 'string',
      title: 'Text Alignment',
      options: {
        list: ['left', 'center', 'right'],
      },
      initialValue: 'left',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'WYSIWYG',
      }
    },
  },
}
