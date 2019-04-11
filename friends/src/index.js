import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer/index";
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/friendsList'
import PrivateRoute from './components/PrivateRoute'
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Friends List</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </div>
    </Router>
      </div>
    );
  }
       

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
