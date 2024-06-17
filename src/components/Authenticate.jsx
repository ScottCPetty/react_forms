import { useState } from "react";

export default function Authenticate({ token }) {
    const [error, setError] = useState(null);
    async function handleClick() {
        try {
            //
        } catch (error) {
            setError(error.message)
        }
        console.log("handleClick ran")
    }
  return (
    <>
      <h2>Authenticate</h2>
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}
