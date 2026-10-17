import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="font-display mt-10 text-2xl tracking-tight text-ink">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-8 text-xl font-semibold text-ink">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="mt-4 leading-7 text-ink-soft">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-soft">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink-soft">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="leading-7">{children}</li>,
        a: ({ href, children }) => (
          <a
            href={href}
            className="font-medium text-teal underline decoration-teal-bright/40 underline-offset-4 hover:decoration-teal"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-ink">{children}</strong>
        ),
        code: ({ children }) => (
          <code className="rounded bg-[rgba(12,31,46,0.06)] px-1.5 py-0.5 text-[0.9em] text-ink">
            {children}
          </code>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
