import { createContext } from 'react';

import './App.css';
import Contador from './Contador';
import Pai from './Pai';

const nomes = {
  pai: 'Pedro Gomes',
  filho: 'Alan Rodrigues',
  neta: 'Aline Camargo',
};

export const Familia = createContext(nomes);

function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <Familia.Provider value={nomes}>
        <Pai />
      </Familia.Provider>
      <hr />
      <h1>Contador</h1>
      <Contador />
    </div>
  );
}

export default App;
