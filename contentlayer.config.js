import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypePrismPlus from 'rehype-prism-plus'

const computedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
}

export const ArticleType = defineDocumentType(() => ({
  name: 'ArticleType',
  filePathPattern: `articles/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the article',
      required: true
    },
    desc: {
      type: 'string',
      description: 'One sentence that summarises the article objective.',
      required: true
    },
    author: {
      type: 'string',
      description: 'The author of the article',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date of the article',
      required: true
    },
    coverPhoto: {
      type: 'string',
      description:
        'A cover photo that appears at the top of the article and in meta images',
      required: false
    },
    tags: {
      type: 'list',
      of: {
        type: 'string'
      },
      description: 'List of tags applied to the article',
      required: false
    }
  },
  computedFields
}))

export const Puzzle = defineDocumentType(() => ({
  name: 'Puzzle',
  filePathPattern: `2521-revision-practical/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the puzzle',
      required: true
    },
    desc: {
      type: 'string',
      description: 'One sentence that summarises the puzzle objective.',
      required: true
    },
    class: {
      type: 'string',
      description: 'The class the puzzle relates to',
      required: true
    },
    difficulty: {
      type: 'number',
      description: 'The difficulty of the puzzle',
      required: true
    }
  },
  computedFields
}))

export const BlockContent = defineDocumentType(() => ({
  name: 'BlockContent',
  filePathPattern: `block-content/*.mdx`,
  contentType: 'mdx',
  fields: {},
  computedFields: {
    slug: computedFields.slug
  }
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [ArticleType, Puzzle, BlockContent],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeHighlight,
      rehypePrismPlus,
      rehypeAutolinkHeadings,
      rehypeSlug
    ]
  }
})
