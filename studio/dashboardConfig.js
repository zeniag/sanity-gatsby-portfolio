export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '61a93b279add4418e6f5f0ae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-raaqd7pe',
                  apiId: '7813e652-3d8f-4c9c-ae70-32c552fd542b'
                },
                {
                  buildHookId: '61a93b279a538f0ea045cad8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rpvj8ct1',
                  apiId: '50791e46-85a9-45a5-9fc0-1c92b4630946'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zeniag/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rpvj8ct1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
