import {FaYoutube} from 'react-icons/fa'

export default {
  name: 'videoPost',
  type: 'document',
  title: 'Videos',
  icon: FaYoutube,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Video title',
    },
    {
      name: 'sortOrder',
      type: 'number',
      title: 'Sort Order',
    },
    {
      name: 'youTube',
      title: 'YouTube Video',
      type: 'url',
    },
    {
      name: 'mp4',
      title: 'MP4 Video',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
    {
      name: 'description',
      title: 'Video description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      order: 'sortOrder',
    },
    prepare({title, order}: any) {
      return {
        title: title,
        subtitle: `Sort Order: ${order}`,
      }
    },
  },
}
