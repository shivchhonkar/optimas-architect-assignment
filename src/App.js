import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

function App() {
  const [route, setRoute] = useState("home");

  const renderRoute = () => {
    switch (route) {
      case "home":
        return <Login handleRoute={setRoute} />;
      case "dashboard":
        return <Dashboard />;
      default:
        return <></>;
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      {renderRoute()}
    </div>
  );
}

export default App;
