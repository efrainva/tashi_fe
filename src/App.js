import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Login from './pages/Login'
import StudentTable from './pages/StudentTable'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/students" component={StudentTable}/>
      </Switch>
    </div>
  );
}

export default App;
