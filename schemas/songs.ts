import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'songs',
  title: 'Songs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'string',
    }),
     defineField({
      name: 'artistImage',
      title: 'Artist Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'album',
      title: 'Album',
      type: 'string',
    }),
    defineField({
      name: 'lyrics',
      title: 'Lyrics',
      type: 'text',
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'audio',
      title: 'Audio',
      type: 'file',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cover',
    },
  },
})
