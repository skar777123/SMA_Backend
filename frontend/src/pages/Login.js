import React, { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const HandleSubmit =  async (e) => {
    e.preventDefault();

    const login = { email, password };
    
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify(login),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      console.log(error);
    }
    if (response.ok) {
      setEmail("");
      setPassword("");
      setError(null);
      console.log("User verified", json);
      localStorage.setItem('token',json.token)
 
    }
  };

  return (
    <div className="Reg ">
      <form className="form-reg" onSubmit={HandleSubmit}>
        <h2>Login</h2>

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
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
