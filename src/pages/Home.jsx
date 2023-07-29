import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Articles from '../components/Articles'
import Information from '../components/Information'
import FreshProduct from '../components/FreshProduct'
import SpecialProduct from '../components/SpecialProduct'

const Home = () => {
  let obj = {
    name: "Хиты продаж",
    site: "Перейти в каталог",
  };
  let obj1 = {
    name: "Акции",
    site: "Все акции",
  };
  let obj2 = {
    name: "Новинки",
    site: "Больше новинок",
    description:
      "Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками.",
  };
  let obj3 = {
    name: "Фонари",
    site: "Перейти в каталог",
  };
  let obj4 = {
    title: "Златоустовские ножи интернет-магазин ЗЛАТМАКС",
    description:"Наш интернет-магазин ЗЛАТМАКС предлагает Вам ножи очень высокого качества из города оружейников - Златоуста. Златоустовские ножи известны и популярны среди потребителей как на российским рынке, так и за рубежом: ножи охотничьи, хозяйственные, туристические, рыбацкие, складные и метательные. Нож Златоуста - это идеальный друг и товарищ в повседневной жизни и в экстремальных ситуациях. На многую продукцию распространяется гарантия до 10 лет - это один из главных показателей качества. Для Вас на нашем сайте  предложен огромный ассортимент Златоустовских ножей. Наши менеджеры помогут определиться и подобрать самый лучший Златоустовский нож, ориентируясь на Ваши пожелания."
  };
  return (
    <>
      <Header />
      <Main />   
      <SpecialProduct props={obj} carouselId={1} />
      <FreshProduct props={obj2} carouselId={7} />
      <SpecialProduct props={obj1} carouselId={2} />
      <SpecialProduct props={obj1} carouselId={3} />
      <FreshProduct props={obj2} carouselId={8} />
      <SpecialProduct props={obj1} carouselId={4} />
      <SpecialProduct props={obj1} carouselId={5} />
      <Articles />
      <SpecialProduct props={obj3} carouselId={6} />
      <Information props={obj4} />
      <Footer />
    </>
  );
}

export default Home
