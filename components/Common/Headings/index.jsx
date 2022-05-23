export function H3({ children }) {
    const slug = sluggifyTitle(getNodeText(children))
    return (
        <>
            <style jsx>
                {`
                    .anchorSpan{
                        visibility:hidden;
                        color: rgb(148 163 184);
                        padding-right: 0.5rem;
                    }
                    .h3{
                        cursor:pointer;
                    }
                    .h3:hover > .anchorSpan {
                        visibility:visible;
                    }
                `}
            </style>
            <h3 id={slug} onClick={() => (window.location.hash = `#${slug}`)} className="h3">

                <span className="anchorSpan">
                    {`#`}
                </span>
                {children}
            </h3>
        </>
    )
}
const sluggifyTitle = (title) => {
    const re = /[^\w\s]/g

    return title.trim().toLowerCase().replace(re, '').replace(/\s+/g, '-')
}

const getNodeText = (node) => {
    if (typeof node === 'string') return node
    if (typeof node === 'number') return node.toString()
    if (node instanceof Array) return node.map(getNodeText).join('')

    if (typeof node === 'object' && (node)?.props?.children) return getNodeText((node).props.children)
    return ''
}

export function H1({ children }) {
    const slug = sluggifyTitle(getNodeText(children))
    return (
        <>
            <style jsx>
                {`
                    .anchorSpan{
                        visibility:hidden;
                        color: rgb(148 163 184);
                        padding-right: 0.5rem;
                    }
                    .h1{
                        cursor:pointer;
                    }
                    .h1:hover > .anchorSpan {
                        visibility:visible;
                    }
                `}
            </style>
            <h1 id={slug} onClick={() => (window.location.hash = `#${slug}`)} className="h1">

                <span className="anchorSpan">
                    {`#`}
                </span>
                {children}
            </h1>
        </>
    )
}
export function H2({ children }) {
    const slug = sluggifyTitle(getNodeText(children))
    return (
        <>
            <style jsx>
                {`
                    .anchorSpan{
                        visibility:hidden;
                        color: rgb(148 163 184);
                        padding-right: 0.5rem;
                    }
                    .h2{
                        cursor:pointer;
                    }
                    .h2:hover > .anchorSpan {
                        visibility:visible;
                    }
                `}
            </style>
            <h2 id={slug} onClick={() => (window.location.hash = `#${slug}`)} className="h2">

                <span className="anchorSpan">
                    {`#`}
                </span>
                {children}
            </h2>
        </>
    )
}
export function H4({ children }) {
    const slug = sluggifyTitle(getNodeText(children))
    return (
        <>
            <style jsx>
                {`
                    .anchorSpan{
                        visibility:hidden;
                        color: rgb(148 163 184);
                        padding-right: 0.5rem;
                    }
                    .h4{
                        cursor:pointer;
                    }
                    .h4:hover > .anchorSpan {
                        visibility:visible;
                    }
                `}
            </style>
            <h4 id={slug} onClick={() => (window.location.hash = `#${slug}`)} className="h4">

                <span className="anchorSpan">
                    {`#`}
                </span>
                {children}
            </h4>
        </>
    )
}
export function H5({ children }) {
    const slug = sluggifyTitle(getNodeText(children))
    return (
        <>
            <style jsx>
                {`
                    .anchorSpan{
                        visibility:hidden;
                        color: rgb(148 163 184);
                        padding-right: 0.5rem;
                    }
                    .h5{
                        cursor:pointer;
                    }
                    .h5:hover > .anchorSpan {
                        visibility:visible;
                    }
                `}
            </style>
            <h5 id={slug} onClick={() => (window.location.hash = `#${slug}`)} className="h5">

                <span className="anchorSpan">
                    {`#`}
                </span>
                {children}
            </h5>
        </>
    )
}
export function H6({ children }) {
    const slug = sluggifyTitle(getNodeText(children))
    return (
        <>
            <style jsx>
                {`
                    .anchorSpan{
                        visibility:hidden;
                        color: rgb(148 163 184);
                        padding-right: 0.5rem;
                    }
                    .h6{
                        cursor:pointer;
                    }
                    .h6:hover > .anchorSpan {
                        visibility:visible;
                    }
                `}
            </style>
            <h6 id={slug} onClick={() => (window.location.hash = `#${slug}`)} className="h6">

                <span className="anchorSpan">
                    {`#`}
                </span>
                {children}
            </h6>
        </>
    )
}