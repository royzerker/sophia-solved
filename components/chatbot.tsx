"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! How can I help you with your Sophia courses today?" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim() === "") return

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }])

    // Clear input
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks for your question! A real person will respond to you shortly via your preferred contact method.",
        },
      ])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {isOpen && (
          <div className="w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 mb-4">
            <div className="bg-[#250e62] text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">Sophia Solved Help</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#d0df00] hover:bg-transparent"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.sender === "user" ? "text-right" : ""}`}>
                  <div
                    className={`inline-block px-4 py-2 rounded-lg max-w-xs ${
                      message.sender === "user" ? "bg-gray-200 text-gray-800" : "bg-[#250e62] text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Type your question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 rounded-r-none focus:ring-[#250e62]"
                />
                <Button
                  onClick={handleSend}
                  className="bg-[#d0df00] hover:bg-opacity-90 text-[#250e62] font-bold rounded-l-none"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#d0df00] text-[#250e62] shadow-lg hover:bg-opacity-90"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
