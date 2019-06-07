import React, { Component } from 'react'
import './Nav.css'
import dbData from '../../data/db.json'
import Button from '@material-ui/core/Button';

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newTag: '',
            tags: dbData.tags,
        }
        this.updateState = this.updateState.bind(this)
    }

    countTags = (idTag) => {
        const count = this.props.cards.filter(card => {
            return card.tag.includes(parseInt(idTag))
        })
        console.log(idTag, this.props.cards)
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

    render() {

        const props = this.props

        console.log(props)
        return (
            <aside className="menu-area">
                <nav className="menu">
                    <div className="menu-iten">
                        <strong>Processos</strong>

                        <div className="process pt-3 menu-iten">
                            <i className="process-icon fa fa-bookmark" />
                            <Button onClick={() => props.clickTag('')} >
                                Todos os Processos
                            </Button>
                            <div id="all-process" className="count-tags">{props.tags.reduce((currentCount,tag) =>  { 
                                return currentCount + this.countTags(tag.id)
                            },0
                            )}
                            </div>
                        </div>

                        <div className="tags pt-3 menu-iten">
                            Etiquetas
                        </div>

                        {props.tags.map(tag => {
                            return (
                                <div className="menu-iten pt-3" style={{ backgroundColor: props.clickTag === tag.id ? '#EAEAEA' : '#F4F4F4' }}>
                                    <i className="fa fa-minus pt-1 pr-2" style={{ color: tag.background }}></i>
                                    <Button onClick={() => props.clickTag(tag.id)} >
                                        {tag.name}
                                    </Button>
                                    <span className="count-tags">
                                        {this.countTags(tag.id)}
                                    </span>

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
                                <i className="check fa fa-check" />

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