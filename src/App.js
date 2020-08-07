import React, { useState } from 'react';
import './App.css';
import CharacterCreator from './components/CharacterCreator';
import CharacterViewer from './components/CharacterViewer';

function App() {
  const [view, setView] = useState('create');
  
  const toggleView = () => {
    if (view === 'create') setView('view');
    else setView('create');
  }

  return (
    <div className="App">
      {view === 'create' ?
      <>
      <button onClick={toggleView}>View Characters</button>
      <CharacterCreator />
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
