import { Component } from 'react';
import Counter2 from './components/Counter2';
import CounterAuto from './components/CounterAuto';
import Lista from './components/Lista';
import Nome, { Email } from './components/Nome';

class App extends Component {
  render() {
    return (
      <div className="application">
        <Counter2 value={0} />

        <Lista>
          <Nome>Leonardo</Nome>
          <Nome>Pedro</Nome>
          <Nome>Carla</Nome>
          <Email>leonardo@gmail.com</Email>
          <Nome>Olivia</Nome>
        </Lista>
      

        <CounterAuto />
      </div>
    );
  }
}

export default App;
