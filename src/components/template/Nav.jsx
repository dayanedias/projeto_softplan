import React, { Component } from 'react'
import './Nav.css'
import dbData from '../../data/db.json'
import Cards from './Cards'
import PopOver from './PopOver'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Nav extends Component {

    initialState = {
        count: 0,
        tags: [],
        newTag: ''
    }

    countTags = (idCard) => {
        const count = this.props.cards.filter(card => {
            return card.tag.includes(parseInt(idCard))
        })
        return count.length
    }

    // handleSubmit(e) {
    //     const addTag = {

    //         id: this.state.tags.length + 1,
    //         name: e,
    //         color: "#FFF",
    //         background: "#49bdce",
    //     }

    //     const newTags = this.state.tags.concat(addTag)

    //     this.setState({
    //         tags: newTags
    //     })
    // }

    // generateColor() {
    //     return '#' + Math.random().toString(16).substr(-6);
    // }

    render() {

        const props = this.props

        console.log("Nav",props)

        return (
            <React.Fragment>
                <aside className="menu-area">
                    <div className="menu">
                        <div className="menu-iten">
                            <strong>Processos</strong>
                       
                            <div className="process pt-3 menu-iten" style={{ backgroundColor: props.selectedTag === '' ? '#EAEAEA' : '#F4F4F4' }}>

                                <Button className="button-menu">
                                    <i className="process-icon fa fa-bookmark" />
                                    <span className="ml-1"> Todos os Processos </span>
                                </Button>

                            </div>

                            <div className="tags pt-3 menu-iten">
                                Etiquetas
                            </div>

                           {props.tags.map(tag => {
                                return (
                                    <div className="menu-iten pt-3">
                                        <div key={tag.id} className="row">
                                            <i className="fa fa-minus pt-1 pr-2" style={{ color: tag.background }}></i>
                                            <div> {tag.name} </div>
                                        </div>

                                        <div className="count">
                                            {this.countTags(tag.id)}
                                        </div>
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
                                console.log(props)
                                // this.props.onNewTag(this.state.newTag)
                                { this.setState({ newTag: this.initialState.newTag }) }
                            }}>

                                <div className="col-xs-12">
                                    <i className="tag-icon fa fa-tag" />
                                    <input id='new-tag' className="newTag mt-3"
                                        placeholder=' Criar Etiqueta'
                                        onFocus={(e) => e.target.placeholder = ""}
                                        onBlur={(e) => e.target.placeholder = " Criar Etiqueta"}
                                        // value={this.state.newTag}
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


                    </div>
                </aside>
                {/* {console.log("Nav",this.state.tags)} */}
                {/* <PopOver tags={this.state.tags} /> */}
                {/* <Cards /> */}

            </React.Fragment>
        )

    }

}

export default Nav