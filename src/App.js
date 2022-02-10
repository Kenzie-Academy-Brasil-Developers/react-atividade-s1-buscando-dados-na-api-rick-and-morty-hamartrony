import './App.css';
import { useEffect, useState } from 'react';
import Characters from './components/Characters';


function App() {
  const [characterList, setCharacterList] = useState ([])

  useEffect(()=>{
  
    fetch('https://rickandmortyapi.com/api/character/')

      .then((response)=> response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err)=> alert(`Deu Merda! ${err}`))
  }, [])

  





    return (
      <div className="App">
        <div>
          <Characters characterList={characterList}/>
          
         
        </div>
        
      </div>
    );
}

export default App;


