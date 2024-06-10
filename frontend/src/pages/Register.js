import React, { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const register = { username, email, password, bio };
    const response = await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify(register),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      alert(error)
    }
    if (response.ok) {
      setUsername("");
      setEmail("");
      setPassword("");
      setBio("");
      setError(null);
      console.log("new workout added ", json);
    }
  };

  return (
    <div className="Reg ">
      <form className="form-reg" onSubmit={handleSubmit}>
        <h2>Registeration Form:</h2>
        <div>
          <input
            type="text"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
