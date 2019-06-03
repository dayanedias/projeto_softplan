import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
    render() {
        return (

            <div className="search" >
               <i className="fa fa-search pl-3"/>
                <input type="text" className="input-search" placeholder="Buscar"/>
            </div>

            // <div className="search input-group flex-nowrap" >
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="addon-icon">
            //             <i className="fa fa-search "/>
            //         </span>
            //     </div>
            //     <input type="text" className="input-search form-control" placeholder="Buscar" aria-describedby="addon-wrapping"/>
            // </div>
        )
    }
}

