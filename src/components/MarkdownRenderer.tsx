import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
content?: string 
}

const MarkdownRenderer = ({ content }: Props) => {
  return (
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]}
      components={{
        // Add custom styles/tags here if needed
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
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;