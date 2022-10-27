import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStore } from './store/store';
import { setPostsState, selectPosts } from './store/postsSlice';

import { Header } from './Components/Header/Header';

import './App.css';

import { mockData_zelda } from './mockData';

function App() {
  const dispatch = useDispatch();
  const store = useSelector(selectStore);
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(setPostsState(mockData_zelda.posts));
  }, [dispatch]);

  const handleClick1 = () => {
    console.log(store);
  }

  const handleClick2 = () => {
    console.log(posts);
  }

  const handleClick3 = () => {
    dispatch(setPostsState(mockData_zelda.posts));
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
