import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; 
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import './App.css';

class App extends Component  {
  render() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<HomePage />} exact></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/articles-list' element={<ArticlesList />}></Route>
            <Route path='/article/:name' element={<ArticlePage />}></Route>
          </Routes>
      </div>
    </div>
    </Router>

  );}
}

export default App;
