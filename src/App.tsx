import "./App.css";

import MainBackground from "./assets/image/index.png";
import Navigation from "./navigation";
import NavRouters from "./router";

function App() {
  return (
    <div className="App">
      <img
        className="mainBackground"
        src={MainBackground}
        alt="mainBackground"
      />
      <div className="contentWrapper">
        <div className="mainContainer">
          <Navigation />
          {/* <NavRouters /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
