import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App</header>
        <main>
          <Dictionary defaultKeyword="Hello" />
        </main>
        <footer> Coded by Komal Ahmed</footer>
      </div>
    </div>
  );
}
export default App;
