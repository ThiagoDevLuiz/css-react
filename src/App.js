import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const redTitle = true

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do app.js</p>

      {/* classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
