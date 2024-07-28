import { Button } from "@mui/material";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const GetMessage = () => {
  const { getRandomMessage, randomMessage } = useContext(MessageContext);
  return (
    <div className="w-[600px] mt-5">
      <Button variant="outlined" onClick={getRandomMessage}>
        AGAIN
      </Button>
      {randomMessage ? <p>{randomMessage}</p> : <p>Henüz mesaj eklemediniz</p>}
    </div>
  );
};

export default GetMessage;
