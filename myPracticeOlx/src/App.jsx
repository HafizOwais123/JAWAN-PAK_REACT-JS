import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Astah from './Components/Astah/Astah';
import TopCategoriesBar from './Components/TopCategoriesBar/TopCategoriesBar';
import CardList from './Components/CardList/CardList';
import Footer from './Components/Footer/Footer';
import './App.css';  // ✅ App.css imported globally
const App = () => {
  return (
    <>

      <Navbar />
      {/* Your main content here */}

      <Astah />
      <TopCategoriesBar />
     <h1 style={{ textAlign: 'center' }}>Product Cards</h1>
      <CardList />
       <Footer />
    </>
  );
};

export default App;
