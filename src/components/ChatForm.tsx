"use client";

import { Field, Textarea } from "@fluentui/react-components";
import type { TextareaProps } from "@fluentui/react-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChatMessage from "./ChatMessage";

export default function ChatForm() {

const chatMessage = `
          
**Flight Options:**
| Airline | Departure | Arrival |
|---------|-----------|---------|
| DAL 102 | 08:00 AM  | 10:30 AM|
          
          `;

          const markdown = `
**This should be bold**

- List item 1
- List item 2

| Table | Example |
|-------|---------|
| Data  | Here    |
  `;

  return (
    <>
      <section>
        <ChatMessage content={chatMessage}>
          
        </ChatMessage>
        <h1>Hello</h1>
        <Field>
          <Textarea size="large" resize="vertical" />
        </Field>
      </section>
    </>
  );
}
