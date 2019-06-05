import React, { Component } from 'react'
import './Cards.css'
import PopOver from '../template/PopOver'
import dbData from '../../data/db.json'
import Nav from './Nav'

export default class Cards extends Component {

    constructor(props) {
        super(props)
        // debugger

        this.inicialState = {
            cards: [],
            tags: [],
            tarja: [],
            usuario: [],
            selectedTag: '',
        }
    }

    state = {
        cards: dbData.cards,
        tags: dbData.tags,
    }
    // includeTag(cardId) {

    //     return (tagId) => {

    //         const modifiedCards = this.state.cards.map((card) => {
    //             if (card.id === cardId) {
    //                 return {
    //                     ...card,
    //                     tag: [...card.tag, tagId]
    //                 };
    //             } else {
    //                 return card;
    //             }
    //         });

    //         this.setState({
    //             cards: modifiedCards
    //         })
    //     }

    // }

    generateColor() {
        return '#' + Math.random().toString(16).substr(-6);
    }

    newTag(tag) {

        const addTag = {
            id: this.state.tags.length + 1,
            name: this.state.tag,
            color: "#FFF",
            background: this.generateColor(),
        }

        const newTags = this.state.tags.concat(addTag)

        this.setState({
            tags: newTags
        })
    }

    renderCards() {

       const props = this.state

        return (
            <div>
                {this.state.cards.map(card => {
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
                                            <PopOver tags={this.state.tags} includeTag={card.id} />
                                        </div>

                                        <div className="ml-2">
                                            {card.tag.map(idTag => {

                                                const tag = props.tags.find((tag) => {
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
        // debugger
        return (
            <React.Fragment>
                {this.renderCards()}

                <Nav tags={this.state.tags} 
                cards={this.state.cards} 
                onNewTag={this.newTag}/>

                {/* <main> {this.renderCards() </main> */}

            </React.Fragment>

        )
    }
}