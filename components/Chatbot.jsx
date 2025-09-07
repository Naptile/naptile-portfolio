"use client";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botReply = {
        sender: "bot",
        text: data.reply || "⚠️ Error connecting to AI. Try again later.",
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error: Unable to connect." },
      ]);
    }

    setInput("");
  };

  return (
    <>
      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl flex flex-col z-50">
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b border-white/20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-t-2xl">
            <span className="font-semibold text-white">AI Chatbot</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close chatbot">
              <X className="text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-cyan-500/80 text-white self-end ml-auto"
                    : "bg-gray-700/70 text-gray-100 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/20 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-lg bg-gray-800/50 text-white focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-lg transition-transform duration-300 z-50 ${
          !isOpen ? "animate-pulse hover:scale-110" : "hover:scale-110"
        }`}
        aria-label="Toggle chatbot"
      >
        <MessageCircle size={28} />
      </button>
    </>
  );
}
