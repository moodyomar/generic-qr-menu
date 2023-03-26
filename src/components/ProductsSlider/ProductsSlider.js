import './ProductsSlider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import heContent from "../../languages/hebrew.json"
import arContent from "../../languages/arabic.json"
import { Title } from '../';
import { CategoryCard } from '..';

const ProductsSlider = ({language,endPoint}) => {

  const contentLng = language === 'Ar' ? arContent : heContent


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  return (

    <div className='ProductsSlider'>
      <Title category={{
        "name": contentLng.catTitle,
        "desc": contentLng.catDesc
      }} />
      <Carousel responsive={responsive} autoPlay={true} showDots={true} swipeable={false} infinite={true}
        autoPlaySpeed={3000} partialVisible={false} rewind={true} rewindWithAnimation={true} rtl={true}>
        {contentLng.categories.map((category, i) => (
          <a href={`#${category.name}`} key={i}><CategoryCard category={category} endPoint={endPoint}/></a>
        ))}
      </Carousel>

    </div>

  )
}

export default ProductsSlider