import "./App.scss";

import MainBackground from "./assets/image/index.png";
import Navigation from "./navigation";

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
          <h1>The currency converter</h1>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default App;
