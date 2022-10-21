import { useDispatch, useSelector } from 'react-redux';
import { selectStore } from './store/store';
import { selectSearchTerm, setSearchTerm } from './store/searchTermSlice';
import { selectUpdateTime, setUpdateTime } from './store/updateTimeSlice';

import { Header } from './Components/Header/Header';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const updateTime = useSelector(selectUpdateTime);

  const handleClick1 = () => {
    console.log(updateTime);
  }

  const handleClick2 = () => {
    //console.log(updateTime.toLocaleTimeString());
  }

  const handleClick3 = () => {
    const newDate = new Date();
    dispatch(setUpdateTime(newDate.toLocaleTimeString()));
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
