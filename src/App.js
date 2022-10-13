import { useDispatch, useSelector } from 'react-redux';
import { selectStore } from './store/store';
import { selectSearchTerm, setSearchTerm } from './store/searchTermSlice';

import { Header } from './Components/Header/Header';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const store = useSelector(selectStore);
  const searchTerm = useSelector(selectSearchTerm);

  const handleClick1 = () => {
    console.log(store);
  }

  const handleClick2 = () => {
    console.log(searchTerm);
  }

  const handleClick3 = () => {
    dispatch(setSearchTerm('newSearchTermValue'));
    console.log('Action dispatched.');
  }

  return (
    <div className="App">
      {/*
      <button onClick={handleClick1}>Button 1</button>
      <button onClick={handleClick2}>Button 2</button>
      <button onClick={handleClick3}>Button 3</button>
      */}
      <Header />
    </div>
  );
}

export default App;
