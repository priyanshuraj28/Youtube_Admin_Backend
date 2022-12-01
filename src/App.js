import {Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from './Components/NavBar/Nav';
import AllVideos from './Components/AllVideos'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import videoReducer from './Reducers/Reducer'
import PostVideo from "./Components/PostVideo/PostVideo";
import Editpost from "./Components/Editpost";
import CustomizedDialogs from "./Components/Popup";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
  videoReducer,
  {},composeEnhancers
 (applyMiddleware(...middleware))
)
//const store = createStore(rootReducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
      {/* <div className="App">
      <Nav></Nav>
      <AllVideos></AllVideos>
    </div> */}
      <Nav></Nav>
      <Switch>
        <Route path='/dashboard' exact ><AllVideos></AllVideos><CustomizedDialogs></CustomizedDialogs></Route>
        <Route path='/add' exact><PostVideo></PostVideo></Route>
        <Route path="/editpost/:id" exact><Editpost></Editpost></Route>
      </Switch>
    </Provider>
  );
}

export default App;
