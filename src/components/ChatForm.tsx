"use client";

import ChatMessage from "./ChatMessage";

export default function ChatForm() {

const chatMessage = `...
          
**Flight Options:**
| Airline | Departure | Arrival |
|---------|-----------|---------|
| DAL 102 | 08:00 AM  | 10:30 AM|


\`\`\`black quote with ~strikethrough~\`\`\`

e\`asd\`

**Ordered List**
- List item 1
- List item 2
          
          `;

  return (
    <>
      <section>
        <ChatMessage content={chatMessage}>
          
        </ChatMessage>
        <h1>Hello</h1>
      </section>
    </>
  );
}
