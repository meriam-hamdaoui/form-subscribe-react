import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";

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
    </div>
  );
}

export default App;
