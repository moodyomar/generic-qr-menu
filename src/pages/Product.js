import { Link, useLocation } from 'react-router-dom';
import { BottomNavbar, Footer, Hero } from '../components'
import Button from '@mui/material/Button';


const Product = ({ endPoint }) => {

    const location = useLocation();
    const { product } = location.state;


    return (

        <div className='Product'>
            <Hero heroBg={product.picture} mt='0px' textInHero={'in-hero.svg'} endPoint={endPoint}/>
            <div className="product-data" style={{marginTop:'25px',minHeight:'80vh'}}>
                <h1>{product.name}</h1>
                <p>{product.desc}</p>
                <h2>{product.price}₪</h2>
                <Link to={`/`}>
                <Button variant="contained">BACK</Button>
                </Link>
            </div>
            <Footer />
            <BottomNavbar />
        </div>

    )
}

export default Product