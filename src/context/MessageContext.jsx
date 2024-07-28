import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [select, setSelect] = useState("get");
  const [allMessages, setAllMessages] = useState(() => {
    const savedMessages = localStorage.getItem("allMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [newMessage, setNewMessage] = useState("");
  const [randomMessage, setRandomMessage] = useState("");

  const openSelectHandle = (value) => {
    setSelect(value);
  };

  const addNewMessage = () => {
    localStorage.setItem(
      "allMessages",
      JSON.stringify([...allMessages, newMessage])
    );
    setAllMessages([...allMessages, newMessage]);
    setNewMessage("");
  };

  const getRandomMessage = () => {
    const messages = JSON.parse(localStorage.getItem("allMessages")) || [];
    if (messages.length > 0) {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setRandomMessage(messages[randomIndex]);
    }
  };

  useEffect(() => {
    setAllMessages(JSON.parse(localStorage.getItem("allMessages")) || []);
  }, []);

  return (
    <MessageContext.Provider
      value={{
        select,
        openSelectHandle,
        newMessage,
        setNewMessage,
        addNewMessage,
        getRandomMessage,
        randomMessage,
        allMessages,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
