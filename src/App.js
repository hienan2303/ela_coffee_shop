import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Header />} />
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
        path="/chef"
        element={
          <>
            <Navbar />
            <Chef />
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
        path="/laurels"
        element={
          <>
            <Navbar />
            <Laurels />
          </>
        }
      />
      <Route
        path="/gallery"
        element={
          <>
            <Navbar />
            <Gallery />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <FindUs />
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
