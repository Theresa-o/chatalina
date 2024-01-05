import "./App.css";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Signup from "./components/Auth/Signup/Signup";
import { useState } from "react";
// import Login from "./components/Auth/Login/Login";
// import Layout from './components/Messages/Layout'
// chatalina\src\components\Messages\layout.tsx
function App() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [name, setName] = useState("");
  // ==========
  const { readyState, sendJsonMessage } = useWebSocket(
    "ws://127.0.0.1:8000//",
    {
      onOpen: () => {
        console.log("Connected!");
      },
      onClose: () => {
        console.log("Disconnected!");
      },
      // New onMessage handler
      onMessage: (e) => {
        const data = JSON.parse(e.data);
        switch (data.type) {
          case "welcome_message":
            setWelcomeMessage(data.message);
            break;
          default:
            console.error("Unknown message type!");
            break;
        }
      },
    }
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];
  // ============
  return (
    <>
      {/* <Layout /> */}
      <div>
        <span>The WebSocket is currently {connectionStatus}</span>
        <p>{welcomeMessage}</p>
      </div>
      <button
        className="bg-gray-300 px-3 py-1"
        onClick={() => {
          sendJsonMessage({
            type: "greeting",
            message: "Hi!",
          });
        }}
      >
        Say Hi
      </button>
      <Signup />
    </>
  );
}

export default App;
