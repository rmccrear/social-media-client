import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

import { Provider } from 'react-redux'
import store from './store/ReduxStore'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <div className="blur" style={{top: '-18%', right: '0'}}></div>
            <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
            
            <Auth/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
