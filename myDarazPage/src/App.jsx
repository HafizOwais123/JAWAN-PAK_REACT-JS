
// // import HeroCarousel from './Components/HeroCarousel/HeroCarousel';
import Categories from './Components/Categories/Categories';
import FlashSale from './Components/FlashSale/FlashSale';

// import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';

import TopBar from './Components/TopBar/TopBar';
import MainNavbar from './Components/MainNavbar/MainNavbar';
import Slider from './Components/Slider/Slider';


const App = () => {
    return (
        <>
            <TopBar />
            <MainNavbar />
            <Slider />

            {/* <HeroCarousel /> */}
            {/* <Banner /> */}
            <Categories />
            <FlashSale /> 

             <Footer />
        </>
    );
};

export default App;
