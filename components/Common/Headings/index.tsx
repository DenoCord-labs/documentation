import { PropsWithChildren, ReactElement, ReactNode } from "react";

export const H3: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const slug = sluggifyTitle(getNodeText(children));
  return (
    <>
      <style jsx>
        {`
          .anchorSpan {
            visibility: hidden;
            color: rgb(148 163 184);
            padding-right: 0.5rem;
          }
          .h3 {
            cursor: pointer;
          }
          .h3:hover > .anchorSpan {
            visibility: visible;
          }
        `}
      </style>
      <h3
        id={slug}
        onClick={() => (window.location.hash = `#${slug}`)}
        className="h3"
      >
        <span className="anchorSpan">{`#`}</span>
        {children}
      </h3>
    </>
  );
};
const sluggifyTitle = (title: string) => {
  const re = /[^\w\s]/g;

  return title.trim().toLowerCase().replace(re, "").replace(/\s+/g, "-");
};

const getNodeText = (node: ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return node.toString();
  if (node instanceof Array) return node.map(getNodeText).join("");

  if (typeof node === "object" && (node as ReactElement)?.props?.children)
    return getNodeText((node as ReactElement)?.props.children);
  return "";
};

export const H1: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const slug = sluggifyTitle(getNodeText(children));
  return (
    <>
      <style jsx>
        {`
          .anchorSpan {
            visibility: hidden;
            color: rgb(148 163 184);
            padding-right: 0.5rem;
          }
          .h1 {
            cursor: pointer;
          }
          .h1:hover > .anchorSpan {
            visibility: visible;
          }
        `}
      </style>
      <h1
        id={slug}
        onClick={() => (window.location.hash = `#${slug}`)}
        className="h1"
      >
        <span className="anchorSpan">{`#`}</span>
        {children}
      </h1>
    </>
  );
};
export const H2: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const slug = sluggifyTitle(getNodeText(children));
  return (
    <>
      <style jsx>
        {`
          .anchorSpan {
            visibility: hidden;
            color: rgb(148 163 184);
            padding-right: 0.5rem;
          }
          .h2 {
            cursor: pointer;
          }
          .h2:hover > .anchorSpan {
            visibility: visible;
          }
        `}
      </style>
      <h2
        id={slug}
        onClick={() => (window.location.hash = `#${slug}`)}
        className="h2"
      >
        <span className="anchorSpan">{`#`}</span>
        {children}
      </h2>
    </>
  );
};
export const H4: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const slug = sluggifyTitle(getNodeText(children));
  return (
    <>
      <style jsx>
        {`
          .anchorSpan {
            visibility: hidden;
            color: rgb(148 163 184);
            padding-right: 0.5rem;
          }
          .h4 {
            cursor: pointer;
          }
          .h4:hover > .anchorSpan {
            visibility: visible;
          }
        `}
      </style>
      <h4
        id={slug}
        onClick={() => (window.location.hash = `#${slug}`)}
        className="h4"
      >
        <span className="anchorSpan">{`#`}</span>
        {children}
      </h4>
    </>
  );
};
export const H5: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const slug = sluggifyTitle(getNodeText(children));
  return (
    <>
      <style jsx>
        {`
          .anchorSpan {
            visibility: hidden;
            color: rgb(148 163 184);
            padding-right: 0.5rem;
          }
          .h5 {
            cursor: pointer;
          }
          .h5:hover > .anchorSpan {
            visibility: visible;
          }
        `}
      </style>
      <h5
        id={slug}
        onClick={() => (window.location.hash = `#${slug}`)}
        className="h5"
      >
        <span className="anchorSpan">{`#`}</span>
        {children}
      </h5>
    </>
  );
};
export const H6: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const slug = sluggifyTitle(getNodeText(children));
  return (
    <>
      <style jsx>
        {`
          .anchorSpan {
            visibility: hidden;
            color: rgb(148 163 184);
            padding-right: 0.5rem;
          }
          .h6 {
            cursor: pointer;
          }
          .h6:hover > .anchorSpan {
            visibility: visible;
          }
        `}
      </style>
      <h6
        id={slug}
        onClick={() => (window.location.hash = `#${slug}`)}
        className="h6"
      >
        <span className="anchorSpan">{`#`}</span>
        {children}
      </h6>
    </>
  );
};
