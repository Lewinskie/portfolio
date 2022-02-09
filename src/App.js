import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro />
        <About />
        <ProductList />
        <Contact/>
      </header>
    </div>
  );
}

export default App;
