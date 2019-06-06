import React, { Component } from 'react'
import './Cards.css'
import PopOver from '../template/PopOver'
import dbData from '../../data/db.json'
import Nav from './Nav'

export default class Cards extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cards: dbData.cards,
            tags: dbData.tags,
            tarja: dbData.tarja,
            usuario: dbData.usuario,
            filterTag: '',
        }

        this.clickTag = this.clickTag.bind(this)
        this.filterTag = this.filterTag.bind(this)
        this.addNewTag =this.addNewTag.bind(this)
        this.setTag = this.setTag.bind(this)
    }

    filterTag = (tag) => {
        this.setState({
            filterTag: tag
        })
    }


    addNewTag(newTag) {
      
        this.setState({
            tags: newTag
        })
        console.log(this.state)
    }


    clickTag = (tag) => {
        this.setState({
            clickTag: tag
        })
    }

    setTag = (card) => {
        console.log(card)

    }

    loadCards() {
        const props = this.props

        const cards = this.state.cards.filter(card => {
            if (this.state.filterTag === '') return true
            return card.tag.includes(parseInt(this.state.filterTag))
        })

        return (
            <div>
                {cards.map(card => {
                    return (
                        <div className="cards-row" key={card.id}>
                            <div className="row">
                                <div className="column left col-md-6 divider">
                                    <div className="row">
                                        <i className="name fa fa-plus-circle text-success mt-1" /><div className="ml-2">{card.partes.ativa.name}</div>
                                        <i className="name fa fa-minus-circle text-danger ml-2 mt-1" /><div className="ml-2">{card.partes.passiva.name}</div>
                                    </div>

                                    <div className="row">
                                        <div>{card.classe}</div>
                                        <div className="mx-1">-</div>
                                        <strong>{card.assunto}</strong>
                                    </div>

                                    <div className="row">
                                        {card.numero}

                                        <div className="ml-2">
                                            {card.tarja.map(tarja => {
                                                return (
                                                    <span className="ml-2" style={{ backgroundColor: tarja.background, color: tarja.color }} >
                                                        {tarja.name}
                                                    </span>
                                                )
                                            })}
                                        </div>

                                    </div>
                                </div>


                                <div className="folder column mid col-md-3">
                                    <i className="fa fa-folder-open"></i>
                                    Abrir Pasta
                                </div>

                                <div className="add-tag column right col-md-3">
                                    <div className="row">

                                        <div>
                                            <PopOver tags={this.state.tags} card={this.state.cards} />
                                        </div>

                                        <div className="ml-2">
                                            {card.tag.map(idTag => {

                                                const tag = dbData.tags.find((tag) => {
                                                    return tag.id == idTag
                                                })

                                                return (
                                                    <div className="py-1">
                                                        <span className="tags row" style={{ backgroundColor: tag.background, color: tag.color }} >
                                                            {tag.name}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
                }
            </div>

        )
    }

    render() {
        return (
            <div>
                {this.loadCards()}

                <div className="content">

                    <Nav selectedTag={this.state.selectedTag}
                        clickTag={this.filterTag}
                        receivedTags={this.state.tags} 
                        addNewTag={this.addNewTag}/>
                </div>
            </div>
        )
    }
}