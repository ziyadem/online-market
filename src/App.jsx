import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Categorys from "./pages/Categorys";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Products from "./pages/Products";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorys" element={<Categorys />} />
        <Route path="/categorys/:category_title" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:product_title" element={<Product />} />
      </Routes>
    </>
  );
}

export default App
