import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Header from "./components/Header";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/login"
            element={localStorage.getItem("token") ? <Navigate to="/AuthorizedUser"/> : <Login />}
          />
          <Route path="/AuthorizedUser" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
