import Header from '../components/Header'
import Footer from '../components/Footer'
import Information from '../components/Information'
import CategoryCart from '../components/CategoryCart';

const Category = () => {
      let obj2 = {
        title: "Как выбрать лучший разделочный нож",
        description:"При подборе такого изделия нужно учитывать несколько важных факторов Особенно обращать внимание на то, что ножи разделочные, цена которых намного выше своих аналогов не всегда являются качественными. Потому при выборе изделия учитываете следующие особенности:Рукоять такого инструмента должна обеспечивать плотный захват. При этом разделочный нож не только должен хорошо лежать в руке, но и не скользить при работе, независимо от того, чистый он, или чем-либо испачкан и намочен.Вторым моментом становится заточка, в частности ее тип и угол. Все изделия, представленные в нашем каталоге, обладают наиболее оптимальными характеристиками заточки, которая проводится с использованием лазерных технологий.И следующим важным фактором становится крепление лезвия к ручке, которое должно быть максимально надежным и создавать цельную систему.И если вы не знаете, какой разделочный нож выбрать, то рекомендуем проконсультироваться у наших специалистов, которые помогут принять решение и подобрать изделие, подходящее под Ваши нужды."
      };
  return (
    <>
      <Header />
      <CategoryCart />   
      <Information props={obj2} />
      <Footer />
    </>
  );
}

export default Category;
