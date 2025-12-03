import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1>{children}</h1>,
    ...components,
  };
}
