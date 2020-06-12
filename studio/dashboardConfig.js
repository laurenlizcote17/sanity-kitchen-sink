export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee3cdc9f938dedac22810c0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vrmdym1q',
                  apiId: '2e1cb678-1726-4db6-9674-50aa34d52ed8'
                },
                {
                  buildHookId: '5ee3cdc97e0d3b8ec59f1df5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ufgq3pyp',
                  apiId: '1c969aa3-1a71-44d9-bf3f-6a2414ff01be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/laurenlizcote17/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ufgq3pyp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
