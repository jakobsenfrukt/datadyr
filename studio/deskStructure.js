import S from '@sanity/desk-tool/structure-builder'

import {  MdHomeFilled, MdDesignServices, MdWebStories, MdAlternateEmail, MdPeople } from 'react-icons/md'

const hiddenDocTypes = listItem =>
  !['home', 'services', 'contact', 'project', 'collaborator'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .icon(MdHomeFilled)
        .child(
          S.editor()
            .title('Home')
            .id('home')
            .schemaType('home')
            .documentId('home')
        ),
      S.listItem()
        .title('Services')
        .icon(MdDesignServices)
        .child(
          S.editor()
            .title('Services')
            .id('services')
            .schemaType('services')
            .documentId('services')
        ),
      S.listItem()
        .title('Contact')
        .icon(MdAlternateEmail)
        .child(
          S.editor()
            .title('Contact')
            .id('contact')
            .schemaType('contact')
            .documentId('contact')
        ),
      S.listItem()
        .title('Projects')
        .icon(MdWebStories)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Collaborators')
        .icon(MdPeople)
        .schemaType('collaborator')
        .child(S.documentTypeList('collaborator').title('Collaborators')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
