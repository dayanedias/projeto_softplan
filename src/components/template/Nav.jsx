import React, { Component } from 'react'
import './Nav.css'
import dbData from '../../data/db.json'
import { Button } from '@material-ui/core';

class Nav extends Component {

    state = {
        newTag: '',
        chooseTag: 0,
        tags: dbData.tags,
    }

    countTags = (idCard) => {
        const count = dbData.cards.filter(card => {
            return card.tag.includes(parseInt(idCard))
        })
        return count.length
    }

    menuClick(id) {
        // console.log("Cliquei no menu!",id)

        this.setState({
            chooseTag: id
        })
        console.log(id)
        id.clickTag(id)

    }

    generateColor() {
        return '#' + Math.random().toString(16).substr(-6);
    }

    render() {

        const props = this.props
        // debugger

        // console.log(this.props)

        return (
            <React.Fragment>
                <aside className="menu-area">
                    <div className="menu">
                        <div className="menu-iten">
                            <strong>Processos</strong>

                            <div className="process pt-3 menu-iten" style = {{ backgroundColor: props.selectedTag === '' ? '#EAEAEA' : '#F4F4F4'}}>
                                <Button onClick={() => props.clickTag('')} >
                                    <i className="process-icon fa fa-bookmark" />
                                    <span className="ml-1"> Todos os Processos </span>
                                </Button>
                            </div>

                            <div className="tags pt-3 menu-iten">
                                Etiquetas
                        </div>

                            {this.state.tags.map(tag => {
                                return (
                                    <div className="menu-iten pt-3" style = {{ backgroundColor: props.selectedTag === tag.id ? '#EAEAEA' : '#F4F4F4'}}>
                                        <Button onClick={() => props.clickTag(tag.id)} >
                                            <div key={tag.id} className="row" >
                                                <i className="fa fa-minus pt-1 pr-2" style={{ color: tag.background }}></i>
                                                <div> {tag.name} </div>
                                            </div>

                                            <div className="count-tags">
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

                                const newTags = this.state.tags.concat(addTag)
                                this.setState({
                                    tags: newTags
                                })
                                props.addNewTag(this.state.tags)

                                this.setState({ newTag: '' })
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
                                    <i className="check fa fa-check"/>
                                    {/* </Button> */}

                                </div>
                            </form>

                        </div>

                        <hr />
                        <div className="done-process">
                            <strong>Feitos</strong>
                        </div>


                    </div>
                </aside>

            </React.Fragment>
        )

    }

}

export default Nav