import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {fetchData, nextImage, prevImage, setArtId, reset} from './features/dataSlice';

function App() {
  const dispatch = useDispatch();
  const currentState = useSelector (state => state.data)
  const renderImage = () => {
   return currentState.apiData.primaryImage ?
  <img src = {currentState.apiData.primaryImage}/>:
  <h3>No Image Found</h3>
  }
  // your logic goes here!

  return (
    <div className="App">
      <div>
        <button onClick={() => {dispatch(fetchData())}}>Trigger Thunk</button>
        <button onClick={() => {}}>Clear</button>
        <button onClick={() => {}}>Next</button>
        <button onClick={() => {}}>Back</button>
      </div>
      <h1>{currentState.artId}</h1>
      <input onChange={(e) => { }} />
      <div>
        {
          renderImage()
        }
      </div>
    </div>
  );
}

export default App;
