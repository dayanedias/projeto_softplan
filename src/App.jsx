import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import Search from './components/template/Search'
import Cards from './components/template/Cards' 
import Header from './components/template/Header';

export default props =>
    <div className="app">
        <Header />
        <Search />
        <Cards />
        
    </div>