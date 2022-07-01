import logo from "./logo.svg";
import "./App.css";
import "animate.css";

//  https://javascript.plainenglish.io/how-to-animate-with-css-keyframes-in-react-2d76775b4d74
//  https://animate.style/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img
          src={logo}
          className="App-logo animate__animated animate__infinite animate__rubberBand"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link "
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
