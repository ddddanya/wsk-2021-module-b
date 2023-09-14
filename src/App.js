import { useEffect, useState } from "react";
import MVP from "./views/MVP";
import Home from "./views/Home";

function App() {
  const [location, setLocation] = useState("mvp");

  useEffect(() => {
    setLocation(window.location.hash.replace("#", ""));
  }, []);

  return (
    <div className="App">
      {location == "" && <Home />}
      {location == "mvp" && <MVP />}
    </div>
  );
}

export default App;
