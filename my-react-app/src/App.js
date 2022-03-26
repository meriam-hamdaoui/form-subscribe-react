import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import HeaderNav from './headerNav/HeaderNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormSubscribe from './formSubscribe/FormSubscribe';
import VID1 from './VID1.mp4'
import FooterComponent from './footer/FooterComponent';



function App() {
  return (
    <div className="App">
         <video className='background-VID'
            autoPlay 
            loop
          >
              <source src={VID1} type='video/mp4'/>
          </video>
       {/* add the title modification */}
       <Helmet>
          <meta charSet="utf-8" />
          <title>Coco Carnaval</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
          <meta name="description" content="coco carnaval react-app" />
      </Helmet>
      
      <HeaderNav />
      <FormSubscribe/>
      <FooterComponent />
    </div>
  );
}

export default App;
