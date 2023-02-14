// import logo from './logo.svg';
// import '../public/main.css';
import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Feature from './Components/Feature';
import WhoAreWe from './Components/WhoAreWe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Feature />
      <WhoAreWe />
      <Footer />
    </div>
  );
}

export default App;
