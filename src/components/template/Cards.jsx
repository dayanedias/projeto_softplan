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
        this.addNewTag = this.addNewTag.bind(this)
        this.chooseTag = this.chooseTag.bind(this)
        this.createTag = this.createTag.bind(this)
        this.countCards = this.countCards.bind(this)
        this.removeTag = this.removeTag.bind(this)
    }

    createTag(addTag) {

        const newTag = this.state.tags.concat(addTag)

        this.setState({
            tags: newTag
        })
    }

    countCards = (idCard) => {
        const count = this.state.cards.filter(card => {
            return card.tag.includes(parseInt(idCard))
        })
        return count.length
    }

    filterTag = (tag) => {
        this.setState({
            filterTag: tag
        })
    }

    removeTag = i => {


        console.log("Excluir tag")

        //  this.setState(state => {
        //    const list = state.cards.tags.filter((card, j) => i !== j);

        //    return {
        //      list,
        //    }
        //  })
    }


    addNewTag(newTag) {

        this.setState({
            tags: newTag
        })
    }


    clickTag = (tag) => {
        this.setState({
            clickTag: tag
        })
    }

    chooseTag = (tagId, cardId) => {

        const updatedCards = this.state.cards.map((card) => {
            //debugger
            if (cardId.id === card.id) {
                return {
                    ...card,
                    tag: [...card.tag, tagId]
                }
            } else {
                return card
            }
        })

        this.setState({
            cards: updatedCards
        })
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
                                            {/* Chama o botão com Pop over */}
                                            <PopOver tags={this.state.tags} card={card} chooseTag={this.chooseTag} />
                                        </div>

                                        <div className="ml-2">
                                            {card.tag.map(idTag => {

                                                const tag = this.state.tags.find((tag) => {
                                                    return tag.id == idTag
                                                })

                                                return (
                                                    <div className="p-1">
                                                        <span className="tags row" style={{ backgroundColor: tag.background, color: tag.color }}>
                                                            <div >
                                                                {tag.name}
                                                                <button className="btn btn-md del-tags" onClick={this.removeTag}><i className="fa fa-times ml-1"></i> </button>
                                                            </div>
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
            <React.Fragment>
                <main className="menu-area">
                        {this.loadCards()}
                </main>

                <Nav selectedTag={this.state.selectedTag}
                    clickTag={this.filterTag}
                    receivedTags={this.state.tags}
                    addNewTag={this.addNewTag}
                    cards={this.state.cards}
                    createTag={this.createTag}
                    tags={this.state.tags}
                    countCards={this.countCards} />
            </React.Fragment>
        )
    }
}