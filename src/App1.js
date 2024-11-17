import { createElement, useState } from "react"
import './tailwind.css'
import Button from "./components/Button"
import Tab from "./components/Tab"

function Profile () {
  console.log('profil tabına geldi')

  return (
    <div>
      Burası Profile Tabı
    </div>
  )
}

function App() {

  const todos = ['todo1', 'todo2', 'todo3']
 /* jsx örnekleri */
 
  // const h1 = createElement('h1', null, 'berdo')
  // const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))
  // const button = createElement(Button, {
  //   text: 'Buton testi'
  // }, null)
  // return createElement('main', {
  //   className: 'test',
  //   id: 'main'
  // }, h1, ul, button)

 
  const searchFunction = () => {
    alert("nerdesinn!")
  }
  const name = "Berdan";

  const style = {color: 'red', justifyContent: 'between', backgroundColor: 'yellow'}

  const [activeTab, setActiveTab] = useState(1)
  return (
    <>

    <div style={{padding: 20}}>
      <button onClick={() => setActiveTab(2)}>
        Aktif tabı değiştir
      </button>
      <Tab activeTab={activeTab} onChange={tabIndex => setActiveTab(tabIndex)}> 
        <Tab.Panel title="Profil"><Profile/></Tab.Panel>
        <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
        <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
      </Tab>
      {activeTab === 2 && (
        <div>
          Burası Ekstra Alan
        </div>
      )}
    </div>
    <div style={{padding: 20}}>
      <Button>
        Buton Örneği
      </Button>
      <Button variant="success">
        Buton Örneği
      </Button>
      <Button variant="danger">
        Buton Örneği
      </Button>
      <Button variant="warning">
        Buton Örneği
      </Button>
    </div>
    
      <h1 style={style}>berdo</h1>
      <label htmlFor="search" tabIndex="2" onClick={searchFunction}>Arama</label>
      <input type="text" id="search" tabIndex="1"/> 
      <ul>
        {name.toUpperCase()}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
