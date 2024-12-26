import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <Router basename="/ela_coffee_shop">
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route
        path="/header"
        element={
          <> 
          <Navbar />
          <Header />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <AboutUs />
          </>
        }
      />
      <Route
        path="/menu"
        element={
          <>
            <Navbar />
            <SpecialMenu />
          </>
        }
      />
      <Route
        path="/intro"
        element={
          <>
            <Navbar />
            <Intro />
          </>
        }
      />
      <Route
        path="/team"
        element={
          <>
            <Navbar />
            <FindUs />
          </>
        }
      />
        <Route
        path="/store"
        element={
          <>
            <Navbar />
            <Gallery />
          </>
        }
      />
      <Route
        path="/footer"
        element={
          <>
            <Navbar />
            <Footer />
          </>
        }
      />
    </Routes>
  </Router>
);

export default App;
