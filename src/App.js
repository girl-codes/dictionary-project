import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App 📖</header>
        <main>
          <Dictionary defaultKeyword="Hello" />
        </main>
        <footer>
          {" "}
          This project was coded with ❣️ by{" "}
          <a
            href="https://github.com/girl-codes"
            target="_blank"
            rel="noreferrer"
          >
            Komal Ahmed
          </a>
          , is{" "}
          <a
            href="https://github.com/girl-codes/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced{" "}
          </a>{" "}
          on GitHub and is hosted on{" "}
          <a
            href="https://dictionary-hq.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>{" "}
          👩🏻‍💻
        </footer>
      </div>
    </div>
  );
}
export default App;
