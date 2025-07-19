


import React from 'react';
import TopBar from './Components/TopBar/TopBar';
import Navbar from './Components/MainNavbar/MainNavbar';
import Slider from './Components/Slider/Slider';
import Footer from './Components/Footer/Footer';
import Academics from './Components/Academics/Academics';
import Cards from './Components/Cards/Cards';
import Welcome from './Components/Welcome/Welcome';







 // Import kiya Navbar

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Slider />
      <Academics />
      <Cards />
      <Welcome />
      <Footer />

    </div>
  );
};

export default App;

