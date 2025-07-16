import MarkdownRenderer from "./MarkdownRenderer";

interface Props {
content?: string 
}

const ChatMessage = ({ content }: Props) => {
  return (
    <div className="message">
      <MarkdownRenderer content={content} />
    </div>
  );
};

export default ChatMessage;