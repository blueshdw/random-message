import { Button } from "@mui/material";
import React, { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const CreateMessage = () => {
  const { addNewMessage, newMessage, setNewMessage } =
    useContext(MessageContext);
  return (
    <form
      onSubmit={() => addNewMessage()}
      className="flex flex-col justify-center items-center gap-4 mt-4"
    >
      <textarea
        onChange={(e) => setNewMessage(e.target.value)}
        value={newMessage}
        className="border border-gray-500 outline-none max-h-[200px] min-h-[200px] h-[200px] w-[300px] p-2"
        name="create"
        id=""
      ></textarea>
      <Button variant="outlined" onClick={() => addNewMessage()}>
        Create
      </Button>
    </form>
  );
};

export default CreateMessage;
