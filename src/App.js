import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
function App() {
  const [dataAdvice, setDataAdvice] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    setIsLoading(true);
    axios.get(`https://api.adviceslip.com/advice`).then(res => {
      const result = res.data.slip.advice;
      console.log(result);
      setDataAdvice(result);
      setIsLoading(false);
    });
  }
  return (
    <div className="App">
      <div className="wrapper">
        <p>{isLoading ? "Loading" : dataAdvice}</p>
        <button onClick={fetchAdvice}>Give Me Advice!</button>
      </div>
    </div>
  );
}

export default App;
