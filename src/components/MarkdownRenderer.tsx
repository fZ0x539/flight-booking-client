import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content?: string;
}

const MarkdownRenderer = ({ content }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto">
            <table className="table-auto w-full" {...props} />
          </div>
        ),
        th: ({ node, ...props }) => (
          <th className="border px-4 py-2 bg-gray-100" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="border px-4 py-2" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className="font-semibold hover:underline" {...props} />
        ),

        ul: ({ node, ...props }) => (
          <ul
            className="max-w-md space-y-1  list-disc list-inside"
            {...props}
          />
        ),
        code: ({ node, className, children, ...props }) => {
          // Check if it's inline code by looking at the className or node
          const isInline = !className?.includes("language-");

          if (isInline) {
            return (
              <code
                className="bg-gray-200 rounded px-1 py-0.5 text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            );
          }

          // Block code
          return (
            <code className={`font-mono text-sm block ${className}`} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
