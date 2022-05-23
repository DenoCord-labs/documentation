import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeHighlight from 'rehype-highlight'
export const Docs = defineDocumentType(() => ({
    name: "Docs",
    filePathPattern: "**/**.{md,mdx}",
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the document",
            required: true
        },
        description: {
            type: "string",
            description: "The description of the document",
            required: true
        },
        image: {
            type: "string",
            description: "The meta image of the document",
            required: false,
            default: "/images/logo.png"
        }
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (post) => `/docs/${post._raw.flattenedPath}`
        },

    }
}))

export default makeSource({
    contentDirPath: "docs",
    documentTypes: [Docs],
    mdx: {
        rehypePlugins: [rehypeSlug, rehypeCodeTitles, rehypePrism, rehypeHighlight, [
            rehypeAutolinkHeadings, {
                properties: {
                    className: "anchor",
                    options: {
                        behavior: "wrap",
                    }
                }
            }
        ]],
        remarkPlugins: [remarkGfm],
    },
}) 