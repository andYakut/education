import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() =>{
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrMessage(err.message)
    );
  }, []);

  let content;
  if(errMessage) {
    content = <div>Error: {errMessage}</div>
  } else if(lat) {
    content = <SeasonDisplay lat={lat}/>
  } else {
    content = <Spinner message="Please accept location request" />
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));