import './App.css';
import { useEffect,useState } from 'react';
import { MySQLTemperaturaService } from "./_Logic/Data/MySQLTemperaturaService"
import {BaseDatosMaterial} from "./_Presentation/Components/BaseDatosMaterial"

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    var prueba = new MySQLTemperaturaService();
    prueba.getAll()
    .then(res => console.log(res))
    .catch(err => console.log(err))

  },[]);
  return (
    <div className="App">
      <BaseDatosMaterial itemsMaterial={items}/>
    </div>
  );
}

export default App;
