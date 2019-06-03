import React from 'react'
import './Header.css'

export default props =>
    <header className="header">
        <h3 className="column-app">
            {props.title}
        </h3>
        <i className="column-icon fa fa-user-circle" />
    </header>