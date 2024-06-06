import { useState, useEffect } from "react";
// Add useNavigate to import
import { Navigate, Outlet, useNavigate} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
    // Add code to mock user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () =>{
    setIsLoggedIn(true);
  }

  const logout = () =>{
    setIsLoggedIn(false);
  };

  const handleLoginClick = () =>{
    login();
  };
    // Add programmatic navigation for login and logout
  useEffect(() =>{
    if (isLoggedIn) {
        // navigates to Home route if user is logged in
      navigate("/");
    } else {
        // navigates to Login route if user is logged out
      navigate("/login");
    };
  }, [isLoggedIn, navigate]);

  return (
    <div className="app">
      <NavBar logout={logout} />
        { /*Pass login function to Outlet as context */}
      {isLoggedIn ? <Outlet /> : <Navigate  to="/login" />}
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default App;