import './App.css';
import Contador from './components/Contador';
import Controles from './components/Controles';
import FilterList from './components/FilterList';

function App() {
  return (
    <div className="App">
      <Contador />
      <Controles />
      <FilterList />
    </div>
  );
}

export default App;
