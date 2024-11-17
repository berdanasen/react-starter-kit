import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Test from './Test.js'
import { Title } from './Components.js'
import Bootstrap from './Bootstrap.js';
import Tailwind from './Tailwind.js';

import './tailwind.css'
import styles from './App.module.css'

function App() {
  useEffect(() => {
    console.log(styles);
    if (process.env.NODE_ENV === 'production'){

    }
  }, [])

  return (
    <div className={styles.App}>
       <Title>{process.env.NODE_ENV}</Title>
       <Title theme="dark">{process.env.NODE_ENV}</Title>
       <p>{process.env.REACT_APP_API_URL}</p>
       <Test/>
       {process.env.NODE_ENV === 'production' && (
        <>
          <img src="/logo192.png" alt=""/>
          <img src={logo} alt=""/>
        </>
       )}
      <Bootstrap />
      <Tailwind />
    </div>
  );
}

export default App;
