import './App.css';
import {useEffect} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
import {fetchData, nextImage, prevImage, setArtId, reset} from './features/dataSlice';

//Defined function to map state to props
const mapStateToProps = (state) => ({
  artId: state.data.artId
})



function App(props) {
  const dispatch = useDispatch();
  const currentState = useSelector (state => state.data)

  useEffect (() => {
    dispatch(fetchData())
  },[props.artId, dispatch])


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
        <button onClick={() => {dispatch(reset())}}>Clear</button>
        <button onClick={() => {dispatch(nextImage())}}>Next</button>
        <button onClick={() => {dispatch(prevImage())}}>Back</button>
      </div>
      <h1>{currentState.artId}</h1>
      <input value ={currentState.artId} onChange={(e) => {dispatch(setArtId(e.target.value))}} />
      <div>
        {
          renderImage()
        }
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);

