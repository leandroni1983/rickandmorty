import imagenRickandMorty   from './img/rick-morty.png';
import './App.css';
import {useState} from 'react';
import Characters from './components/characters';

function App() {
  const [characters,setCharacter] = useState(null)
  
  const reqApi = async() =>{
    const api =  await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()

    setCharacter(characterApi.results)
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1  className='title'>Rick & Morty</h1>
       {characters 
        ?<Characters characters={characters} setCharacter={setCharacter}/>
        :<>
          <img src={imagenRickandMorty} alt='Rick & Morty' className='img-home'/>
          <button onClick={reqApi} className='btn-search'>Buscar personaje</button>
         </>
        }
        
       
      </header>
    </div>
  );


}

export default App;
