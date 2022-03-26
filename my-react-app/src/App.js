import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
// import HeaderNav from './headerNav/HeaderNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormSubscribe from './formSubscribe/FormSubscribe';

import FooterComponent from './footer/FooterComponent';
import NavBar from './navBar/NavBar';



function App() {
  return (
    <div className="App">
         
       {/* add the title modification */}
       <Helmet>
          <meta charSet="utf-8" />
          <title>Coco Carnaval</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
          <meta name="description" content="coco carnaval react-app" />
      </Helmet>
      <NavBar />
      {/* <HeaderNav /> */}
      <FormSubscribe/>
      <FooterComponent />
    </div>
  );
}

export default App;
