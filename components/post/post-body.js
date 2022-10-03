import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import markdownStyles from './markdown-styles.module.css'
import RichTextAsset from './rich-text-asset'

const customMarkdownOptions = (content) => ({
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="bold">{text}</b>,
  },
  renderNode: {
    // [BLOCKS.PARAGRAPH]: (_node, children) => <p className="text-lg align-center mb-4">{children}</p>,
    // [BLOCKS.HEADING_1]: (_node, children) => <h1 className="text-4xl h1 mb-4">{children}</h1>,
    // [BLOCKS.HEADING_2]: (_node, children) => <h2 className="text-3xl h2 mb-4">{children}</h2>,
    // [BLOCKS.HEADING_3]: (_node, children) => <h3 className="text-2xl h3 mb-4">{children}</h3>,
    // [BLOCKS.HEADING_4]: (_node, children) => <h4 className="text-xl h4 mb-4">{children}</h4>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
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
