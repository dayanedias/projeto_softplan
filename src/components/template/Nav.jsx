import React, { Component } from 'react'
import './Nav.css'
import dbData from '../../data/db.json'

class Nav extends Component {

    state = {
        name: ''
    }

    render() {

        return (
            <aside className="menu-area">
                <div className="menu">
                    <div className="process">
                        <strong>Processos</strong>

                        <div className="process pt-3">
                            <i className="process-icon fa fa-bookmark" />
                            <span className="ml-1"> Todos os Processos </span>
                        </div>

                        <div className="tags pt-3">
                            Etiquetas
                        </div>

                        {dbData.tags.map(tag => {
                            return (
                                <div key={tag.id} className="row pt-3">
                                    <i className="fa fa-minus pt-1 pr-2" style={{ color: tag.background }}></i>
                                    <td> {tag.name} </td>

                                </div>
                            )
                        })}

                        {dbData.cards.map(card => {
                            return (
                                <div>
                                    {/* <span>{card.id}</span> */}
                                    <span>{card.length}</span>
                                    {console.log(card.length)}
                                </div>
                            )
                        })}

                        <div className="col-xs-12">
                            <i className="tag-icon fa fa-tag" />
                            <input id='new-tag' className="newTag mt-3"
                                placeholder=' Criar Etiqueta'
                                onFocus={(e) => e.target.placeholder = ""}
                                onBlur={(e) => e.target.placeholder = " Criar Etiqueta"}
                                onChange={(e) => {
                                    this.setState({ name: e.target.value })
                                }}
                                value={this.state.name} />
                            <i className="check fa fa-check" />

                        </div>

                    </div>

                    <hr />
                    <div className="done-process">
                        <strong>Feitos</strong>
                    </div>


                </div>
            </aside>
        )
    }

}

export default Nav