import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import Main from './components/template/Main'

import Nav from './components/template/Nav'
import Search from './components/template/Search'
import Cards from './components/template/Cards' 

export default props =>
    <div className="app">
        
        <Main title="APP">
                <Cards />
        </Main>
        <Search />
        <Nav />
        
    </div>