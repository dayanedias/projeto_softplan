import React, { Component } from 'react'
import './Cards.css'
import PopOver from '../template/PopOver'
import dbData from '../../data/db.json'

export default class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            tags: [],
            tarja: [],
            usuario: [],
            clickTag: '',
        }
        console.log(this.state)
    }

    
    clickTag = (tag) => {
        this.setState({
            clickTag: tag
        })
        console.log(this.state.clickTag)
    }

    // this.setState({
    //     cards: dbData.cards
    // })
    // console.log(this.state)


    setTag = (id) => {
        return (checkIdTag) => {

            const updateCards = this.state.cards.map((card) => {
                if (card.id === id) {
                    return {
                        ...card,
                        tag: [...card.tag, checkIdTag]
                    };
                } else {
                    return card;
                }
            });
            console.log(this.state)
            this.setState({
                cards: updateCards
            })
            console.log(this.state.cards)
        }
    }

    renderCards() {
        return (
            <div>
                {dbData.cards.map(card => {
                    return (
                        <div className="cards-row" key={card.id}>
                            <div className="row">
                                <div className="column left col-md-6 divider">
                                    <div className="row">
                                        <i className="name fa fa-plus-circle text-success mt-1" /><td className="ml-2">{card.partes.ativa.name}</td>
                                        <i className="name fa fa-minus-circle text-danger ml-2 mt-1" /><td className="ml-2">{card.partes.passiva.name}</td>
                                        {/* <div>{card.length}</div> */}
                                        {/* <div>{console.log(card.length)}</div> */}
                                    </div>

                                    <div className="row">
                                        <td>{card.classe}</td>
                                        <td className="mx-1">-</td>
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
                                            <PopOver tags={dbData.tags}
                                             addTag={this.setTag(card.id)}
                                            />
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
                    {this.renderCards()}
                </div>

        )
    }
}