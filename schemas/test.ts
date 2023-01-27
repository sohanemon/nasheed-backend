import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'test',
  title: 'Test',
  type: 'document',
  fields: [
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
    }),
  ],
  preview: {
    select: {
      title: '',
      media: '',
    },
  },
})
