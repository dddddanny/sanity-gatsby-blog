export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eb085171ab4170f6b95075d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ow2rxxkn',
                  apiId: 'dba290f7-c2fa-40e3-8079-9ab53d946bf5'
                },
                {
                  buildHookId: '5eb0851713d7502a26c57950',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bi5s8v16',
                  apiId: 'e026ba1a-9844-4cec-9ce5-994aa2ca9a4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dddddanny/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bi5s8v16.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
