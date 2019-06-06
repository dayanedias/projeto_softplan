import React from 'react'
import './Main.css'
import Header from './Header'
import Cards from './Cards'
import Nav from './Nav';

export default props =>
    <React.Fragment>
        <Header />
            <div className="content">
                <Cards />
            </div>

    </React.Fragment>