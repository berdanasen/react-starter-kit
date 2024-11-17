import Test from './Test.js'
import { Title } from './Components.js'
import Bootstrap from './Bootstrap.js';
import Tailwind from './Tailwind.js';
import logo from './logo.svg';
import styles from './App.module.css'
import './tailwind.css'

function Styles() {
    return (
        <div className={styles.App}>
       <Title>{process.env.NODE_ENV}</Title>
       <Title theme="dark">{process.env.NODE_ENV}</Title>
       <p className="env">
          {process.env.REACT_APP_API_URL}
          <span>test</span>
        </p>
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
    ) 
}

export default Styles