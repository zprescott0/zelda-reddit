import { useDispatch, useSelector } from 'react-redux';

import './App.css';

function App() {
  const handleClick1 = () => {
    console.log('Testing 1');
  }

  const handleClick2 = () => {
    console.log('Testing 2');
  }

  const handleClick3 = () => {
    console.log('Testing 3');
  }

  return (
    <div className="App">
      <button onClick={handleClick1}>Button 1</button>
      <button onClick={handleClick2}>Button 2</button>
      <button onClick={handleClick3}>Button 3</button>
    </div>
  );
}

export default App;
