import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as helpers from '../../helpers';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
          currentPlayerId: 0,
          deck: [],
          numberOfPlayers: this.props.players.length,
          started: false,
          dealt: false,
        };
    }

    static propTypes = {
        deck: PropTypes.object.isRequired,
        players: PropTypes.object.isRequired,
        // functions
        shuffleDeck: PropTypes.func.isRequired,
        dealCard: PropTypes.func.isRequired,
        addPlayer: PropTypes.func.isRequired,
        bustPlayer: PropTypes.func.isRequired,
        removeCard: PropTypes.func.isRequired
    };

    startGame = () => {
        this.props.shuffleDeck(this.props.deck);
        this.props.addPlayer();

        this.setState({ 
            numberOfPlayers: this.props.players.length + 1,
            started: true, 
        });
    }

    dealCard = (playerId, card) => {
        this.props.dealCard(playerId, card);
        this.props.removeCard();
    }

    deal = () => {
        let cardsDealt = 0;
        const { players, deck } = this.props;
        const localDeck = deck;

        while (cardsDealt < (2 * this.state.numberOfPlayers)) {
            for (let index = 1; index < players.length; index++) {
                this.dealCard(index, localDeck[cardsDealt++]);
            }

            this.dealCard(0, localDeck[cardsDealt++]);
        }

        this.setState({ 
            currentPlayerId: 1,
            dealt: true, 
        });
    }

    checkBlackJacks = () => {
        const { players } = this.props; 

        for (let index = 0; index < players.length; index++) {
            const playersWithBlackJack = [];
            const player = players[index];
            const hasBlackJack = helpers.isBlackJack(player.hand);
            
            if(hasBlackJack) {
                playersWithBlackJack.push(player.playerId);
            }
        }
    }

    hit = (currentPlayerId) => {
        const { deck } = this.props;
        const localDeck = [...deck];
        
        this.dealCard(currentPlayerId, localDeck[0]);
    }

    stick = () => {
        const nextPlayerId = this.nextPlayer();
        this.setState({currentPlayerId: nextPlayerId});
    }

    finishGame = () => {
        const nextPlayerId = this.nextPlayer();
        this.setState({currentPlayerId: nextPlayerId});
    }

    nextPlayer = () => {
        const { players } = this.props;
        const lastPlayer = players[players.length - 1];
        let nextPlayerId = 0;

        if (this.state.currentPlayerId === players[lastPlayer] || this.state.currentPlayerId === 0) {
            nextPlayerId = 0;
        }
        else {
            for (let index = 1; index < players.length; index++) {
                const playerId = players[index].playerId;

                if (this.state.currentPlayerId === playerId) {
                    nextPlayerId = index + 1;
                    break;
                }
            }
        }

        return nextPlayerId;
    }

    getPlayerCards = (playerId) => {
        const player = this.props.players[playerId];
        
        if (!player) {
            return null;
        }

        const playerCards = player.hand.map((card) =>
            <li>{card.value}</li>
        )

        return playerCards;
    }

    render() {
        const topCard = this.props.deck[0];
        const playerCards = this.getPlayerCards(1);
        const dealerCards = this.getPlayerCards(0);
        const currentPlayerHand = this.props.players[this.state.currentPlayerId].hand;

        return(
            <div>
                <div>Cards = {this.props.deck.length}</div>
                <div>Top card = {topCard.value} of {topCard.suit}</div>
                <div>
                    <button type="button" disabled={this.state.started} onClick={this.startGame}>Start</button>
                    <button type="button" disabled={this.state.dealt} onClick={this.deal}>Deal</button>
                    <button type="button" onClick={this.checkBlackJacks}>Check BlackJack</button>
                </div>

                <div>
                    Dealer {helpers.calculateHand(this.props.players[0].hand)} {helpers.isBlackJack(this.props.players[0].hand).toString()}
                    <ul>{dealerCards}</ul>
                </div>
                <div>
                    Player {helpers.calculateHand(currentPlayerHand)} {helpers.isBlackJack(currentPlayerHand).toString()}
                    {helpers.isBust(currentPlayerHand) ? 'BUST!' : ''}
                    <ul>{playerCards}</ul>
                </div>

                <div>
                    <button type="button" onClick={() => this.hit(this.state.currentPlayerId)}>Hit</button>
                    <button type="button" onClick={this.stick}>Stick</button>
                    <button type="button" onClick={() => this.stick(this.state.currentPlayerId)}>Finish game</button>            
                </div>
            </div>
        );
    };
}
