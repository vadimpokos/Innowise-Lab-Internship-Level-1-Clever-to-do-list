import './App.css';
import React, { useEffect } from 'react';
import { getData } from './firebase/firebase';

function App() {

  useEffect(() => {
    getData()
  })

  return (
    <>hi</>
  );
}

export default App;
