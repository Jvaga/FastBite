import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Hamburger from "./pages/hamburger/Hamburger";
import Hotdog from "./pages/hotdog/Hotdog";
import Menu from "./pages/menu/Menu";
import Pizza from "./pages/pizza/Pizza";
import ProductView from "./pages/productView/ProductView";
import Drink from "./pages/drink/Drink";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <section className="app">
      <Navbar />
      <div className="app__pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="hamburger" element={<Hamburger />} />
          <Route path="hotdog" element={<Hotdog />} />
          <Route path="pizza" element={<Pizza />} />
          <Route path="drink" element={<Drink />} />
          <Route path="product-view/:id" element={<ProductView />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
