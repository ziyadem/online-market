import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category";
import Product from "./pages/Product";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:product_title" element={<Product />} />
      </Routes>
    </>
  );
}

export default App
