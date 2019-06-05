import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Nav from './components/template/Nav'
import Search from './components/template/Search'
import Cards from './components/template/Cards' 
import Header from './components/template/Header'

export default props =>
    <div className="app">
        
        <Header title="APP">
                <Cards />
        </Header>
        <Search />
        <Nav />
        
    </div>