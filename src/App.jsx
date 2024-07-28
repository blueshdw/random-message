import Select from "./components/Select";
import "./App.css";
import GetMessage from "./components/GetMessage";
import CreateMessage from "./components/CreateMessage";
import { useContext } from "react";
import { MessageContext } from "./context/MessageContext";

function App() {
  const { select } = useContext(MessageContext);

  return (
    <div className="flex justify-center">
      <div>
        <h1 className="font-bold text-2xl">GET && CREATE MESSAGES</h1>
        <Select />
        {select === "get" && <GetMessage />}
        {select === "create" && <CreateMessage />}
      </div>
    </div>
  );
}

export default App;
