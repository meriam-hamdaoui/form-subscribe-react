import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import HeaderNav from './headerNav/HeaderNav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       {/* add the title modification */}
       <Helmet>
          <meta charSet="utf-8" />
          <title>COCO Carnaval</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
          <meta name="description" content="coco carnaval react-app" />
      </Helmet>
      <HeaderNav />
    </div>
  );
}

export default App;
