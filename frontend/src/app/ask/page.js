"use client";

import { useState, useRef, useEffect } from "react";
import API from "@/utils/api";
import styles from "./ask.module.css";

export default function AskPage() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const askQuestion = async () => {
    if (!question.trim()) return;

    const userMessage = { role: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setQuestion("");

    try {
      const response = await API.post("ask/", { question: userMessage.text });
      const botMessage = { role: "bot", text: response.data.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Ask Questions</h1>
        <p className={styles.subtitle}>Chat directly with your connected knowledge base.</p>
      </header>

      <div className={styles.chatContainer}>
        <div className={styles.chatBox}>
          {messages.length === 0 && (
            <div className={styles.emptyChat}>
              <div className={styles.emptyIcon}>🤖</div>
              <p>How can I help you today?</p>
            </div>
          )}
          
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.messageWrapper} ${
                msg.role === "user" ? styles.userMessage : styles.botMessage
              }`}
            >
              <div className={styles.bubble}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
             <div className={`${styles.messageWrapper} ${styles.botMessage}`}>
               <div className={`${styles.bubble} ${styles.loadingBubble}`}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.inputArea}>
          <input
            type="text"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={styles.input}
            onKeyDown={(e) => e.key === 'Enter' && askQuestion()}
          />
          <button onClick={askQuestion} className={styles.sendButton} disabled={loading || !question.trim()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}