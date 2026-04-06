import { component } from '@astrojs/markdoc/config';
import { config, fields, collection } from '@keystatic/core';
import { wrapper } from '@keystatic/core/content-components';



export default config({
  storage: {
    kind: 'local',
    // kind: 'github',
    // repo: {
    //   owner: 'vlad-fedorenko-93',
    //   name: 'vlad-fedorenko-93.github.io',
    // }
  },

  collections: {

    // Blog post collection config
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        thumbnail: fields.image({
          label: 'Thumbnail',
          description: 'Thumbnail of the post',
          directory: 'src/assets/thumbnails/posts',
          publicPath: '../../thumbnails/posts',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value,
          },
        ),
        date: fields.date({
          label: 'Date',
          description: 'Date of the post'
        }),
        description: fields.text({
          label: 'Description',
          description: 'Description of the post'
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        })
      }
    }),

    // Portfolio case studies config 
    portfolio: collection({
      label: 'Case Studies',
      slugField: 'title',
      path: 'src/content/portfolio/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        thumbnail: fields.image({
          label: 'Thumbnail',
          description: 'Thumbnail of the project',
          directory: 'src/assets/thumbnails/portfolio',
          publicPath: '../../thumbnails/portfolio',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tags',
            itemLabel: props => props.value,
          }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Mobile', value: 'Mobile' },
            { label: 'E-Commerce', value: 'E-commerce' },
            { label: 'Library', value: 'Library' },
          ],
          defaultValue: 'Mobile',
        }),
        year: fields.date({
          label: 'Year',
          description: 'Year of the project'
        }),
        description: fields.text({
          label: 'Description',
          description: 'Description of the project'
        }),
        demo: fields.url({
          label: 'Live Demo',
          description: 'Live demo of the project'
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/portfolio',
              publicPath: '../../assets/images/portfolio/',
            },
          },
          components: {
            video: wrapper({
              label: 'Video',
              schema: {
                src: fields.file({
                  label: 'Video File',
                  directory: 'public/videos/portfolio',
                  publicPath: '../../../public/videos/portfolio',
                }),
              },
            }),
          },
        }),
      },
    })
  },
})
