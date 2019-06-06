import React, { Component } from 'react'
import './Nav.css'
import dbData from '../../data/db.json'
import { Button } from '@material-ui/core';

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newTag: '',
            tags: dbData.tags,
        }
        this.menuClick = this.menuClick.bind(this)
        this.updateState = this.updateState.bind(this)
    }

    countTags = (idCard) => {
        //debugger
        const count = this.props.cards.filter(card => {
            return card.tag.includes(parseInt(idCard))
        })
        return count.length
    }

    generateColor() {
        return '#' + Math.random().toString(16).substr(-6);
    }

    updateState(addTag) {

        const newTag = this.state.tags.concat(addTag)
        this.setState({
            tags: newTag
        })
        this.setState({ newTag: '' })
    }

    menuClick(id) {

        this.setState({
            chooseTag: id
        })
        console.log(id)
        id.clickTag(id)

    }
    render() {

        const props = this.props
        return (
                <aside className="menu-area">
                    <nav className="menu">
                        <div className="menu-iten">
                            <strong>Processos</strong>

                            <div className="process pt-3 menu-iten" style={{ backgroundColor: props.selectedTag === '' ? '#EAEAEA' : '#F4F4F4' }}>
                                <Button onClick={() => props.clickTag('')} >
                                    <i className="process-icon fa fa-bookmark" />
                                    <div className="ml-1 menu-text">Todos os Processos</div>
                                    <div>{props.cards.length}</div>
                                </Button>
                            </div>

                            <div className="tags pt-3 menu-iten">
                                Etiquetas
                        </div>

                            {props.tags.map(tag => {
                                return (
                                    <div className="menu-iten pt-3" style={{ backgroundColor: props.selectedTag === tag.id ? '#EAEAEA' : '#F4F4F4' }}>
                                        <Button onClick={() => props.clickTag(tag.id)} >
                                            <div key={tag.id} className="row" >
                                                <i className="fa fa-minus pt-1 pr-2" style={{ color: tag.background }}></i>
                                                <div> {tag.name} </div>
                                            </div>

                                            <div className="count-tags">
                                                {props.countCards(tag.id)}
                                                {this.countTags(tag.id)}
                                            </div>
                                        </Button>
                                    </div>
                                )
                            })}

                            <form onSubmit={(e) => {
                                e.preventDefault()

                                const addTag = {
                                    id: this.state.tags.length + 1,
                                    name: this.state.newTag,
                                    color: "#FFF",
                                    background: this.generateColor(),
                                }
                                this.updateState(addTag)
                                props.createTag(addTag)
                            }}>

                                <div className="col-xs-12">
                                    <i className="tag-icon fa fa-tag" />
                                    <input id='new-tag' className="newTag mt-3"
                                        placeholder=' Criar Etiqueta'
                                        onFocus={(e) => e.target.placeholder = ""}
                                        onBlur={(e) => e.target.placeholder = " Criar Etiqueta"}
                                        value={this.state.newTag}
                                        onChange={(e) => {
                                            this.setState({ newTag: e.target.value })
                                        }}
                                    />
                                    {/* <Button> */}
                                    <i className="check fa fa-check" />
                                    {/* </Button> */}

                                </div>
                            </form>

                        </div>

                        <hr />
                        <div className="done-process">
                            <strong>Feitos</strong>
                        </div>


                    </nav>
                </aside>
        )

    }

}

export default Nav