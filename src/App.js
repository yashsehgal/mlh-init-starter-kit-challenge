import { HashRouter, Route } from "react-router-dom";
import "./Styles/main.css";
import Home from "./Views/Home/Home";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        
        <Route
          path="/" 
          exact component={Home} 
        />

      </HashRouter>
    </div>
  );
}

export default App;
