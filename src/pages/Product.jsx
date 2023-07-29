import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCart from '../components/ProductCart'
import SpecialProduct from '../components/SpecialProduct'

const Product = () => {
       let obj = {
         name: "Похожие товары",
         site: "Все Похожие",
       };
       let obj1 = {
         name: "Рекомендуем",
         site: "Все Рекомендуем",
       };
  return (
    <>
      <Header />
      <ProductCart />
      <SpecialProduct props={obj} carouselId={9} />
      <SpecialProduct props={obj1} carouselId={10} />
      <Footer />
    </>
  );
}

export default Product
