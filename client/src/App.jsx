import React from 'react';
import {Loader, Services, Welcome, Transactions, Navbar, Footer} from './components';

const App = () => {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
  );
}

export default App;
