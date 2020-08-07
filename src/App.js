import React, { useState, useEffect } from 'react';
import './App.css';
import CharacterCreator from './components/CharacterCreator';
import CharacterViewer from './components/CharacterViewer';
import * as characterAPI from './services/character-api';

function App() {
  const [view, setView] = useState('create');
  const [characters, setCharacters] = useState([]);
  
  const toggleView = () => {
    if (view === 'create') setView('view');
    else setView('create');
  }

  const handleAddCharacter = async newCharacterData => {
    const newCharacter = await characterAPI.create(newCharacterData);
    setCharacters([...characters, newCharacter])
  }

  useEffect(() => {
    const characters = characterAPI.getAll;
    setCharacters(characters);
  }, []);

  return (
    <div className="App">
      {view === 'create' ?
      <>
      <button onClick={toggleView}>View Characters</button>
      <CharacterCreator handleAddCharacter={handleAddCharacter}/>
      </>
      :
      <>
      <button onClick={toggleView}>Create New Character</button>
      <CharacterViewer />
      </>
  }

    </div>
  );
}

export default App;
