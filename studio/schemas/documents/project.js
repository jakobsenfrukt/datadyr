export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Published at',
      name: 'publishedAt',
      type: 'datetime',
    },
    {
      title: 'Main image',
      name: 'mainImage',
      type: "image",
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          options: {
            isHighlighted: true,
          }
        }
      ]
    },
    {
      title: 'Intro',
      name: 'intro',
      type: 'intro',
    },
    {
      title: 'Collaborators',
      name: 'collaborators',
      type: 'array',
      of: [
        {
          title: 'Collaborator',
          type: 'reference',
          to: [{ type: 'collaborator' }]
        },
        {
          title: 'Free text',
          name: 'freeText',
          type: 'string'
        }
      ]
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
