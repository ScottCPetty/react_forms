import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div className="block">
        <SignUpForm setToken={setToken} />
      </div>
      <br />
      <div className="block">
        <Authenticate token={token} />
      </div>
    </>
  );
}

export default App;
