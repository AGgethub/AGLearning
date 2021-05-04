import User from'./User';
import Counter from './Counter';
import Counter2 from './Counter2';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Counter2/>
      <User userName='First name' tweet="what a nice day" working="none"/> 
      <User userName='John Brown' tweet="what a nice day"/>
      <User userName='Tony Stark' tweet="what a nice day"/>
      <User userName='Bob Marley' tweet="what a nice day"/>

    </div>
  );
}

export default App;
