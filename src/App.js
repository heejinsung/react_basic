import React from "react";
//import axios from "axios";
//import Movie from "./components/Movie";
import Home from "./routes/Home";
import About from "./routes/About";
import "./App.css";
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  //함수형이기때문에 render 안씀
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie_detail" component={Detail} />
    </HashRouter>
  );
} 

export default App;