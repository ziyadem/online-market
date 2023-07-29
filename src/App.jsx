import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Categorys from "./pages/Categorys";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Karzinka from "./pages/Karzinka";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorys" element={<Categorys />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/karzinka" element={<Karzinka />} />
        <Route path="/categorys/:category_title" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:product_title" element={<Product />} />
      </Routes>
    </>
  );
}

export default App
