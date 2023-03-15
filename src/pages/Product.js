import { Link, useLocation, useParams } from 'react-router-dom';
import { BottomNavbar, Footer, Hero, Navbar } from '../components'


const Product = ({ endPoint, lng }) => {

    const location = useLocation();
    const { product } = location.state;


    return (

        <div className='Product'>
            <Navbar />
            <Hero heroBg={product.picture} textInHero={''} endPoint={endPoint}/>
            <div className="product-data" style={{marginTop:'25px',minHeight:'80vh'}}>
                <h1>{product.name}</h1>
                <p>{product.desc}</p>
                <h2>{product.price}₪</h2>
                <Link to={`/`}>
                    <button>BACK</button>
                </Link>
            </div>
            <Footer />
            <BottomNavbar />
        </div>

    )
}

export default Product