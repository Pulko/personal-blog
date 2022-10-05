import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'

import markdownStyles from './markdown-styles.module.css'

const customMarkdownOptions = (_content) => ({
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="bold">{text}</b>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => <p className="text-lg align-center mb-4">{children}</p>,
    [BLOCKS.HEADING_1]: (_node, children) => <h1 className="text-4xl h1 mb-4">{children}</h1>,
    [BLOCKS.HEADING_2]: (_node, children) => <h2 className="text-3xl h2 mb-4">{children}</h2>,
    [BLOCKS.HEADING_3]: (_node, children) => <h3 className="text-2xl h3 mb-4">{children}</h3>,
    [BLOCKS.HEADING_4]: (_node, children) => <h4 className="text-xl h4 mb-4">{children}</h4>,
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a
        href={data.uri}
        target="_blank"
        rel="noreferrer"
        className="underline font-medium hover:text-emerald-600"
      >{children}</a>
    )
  },
})

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(
          content.json,
          customMarkdownOptions(content)
        )}
      </div>
    </div>
  )
}
