import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
        <About />
        <ProductList />
        <Contact />
        <Toggle />
      </header>
    </div>
  );
}

export default App;
