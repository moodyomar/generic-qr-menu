import { BottomNavbar, Footer, Hero, Navbar, ProductsArea, ProductsSlider } from '../components'

const Home = ({endPoint,lng}) => {


    return (

        <div className='Home'>
            <Navbar />
            <Hero endPoint={endPoint} />
            <ProductsSlider language={lng} endPoint={endPoint} />
            <ProductsArea language={lng} endPoint={endPoint} />
            <Footer />
            <BottomNavbar />
        </div>

    )
}

export default Home