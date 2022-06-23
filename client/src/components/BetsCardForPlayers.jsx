import React from 'react';
import '../player_bet_card.css'

function BetsCardForPlayers({bet}){

    const {odds, description, current_bets} = bet
    
    
    return (
            <div className = "full-card">
                <div className="card border-dark mb-3 text-center">
                    <img className="card-img_player_bets" src = "https://static.vecteezy.com/system/resources/previews/000/236/108/original/baseball-stadium-background-vector.jpg" alt = "background" />
                    <div className="card-img-overlay">
                        <div className ="card-body">
                            <p className="card-text">{description}</p>
                            <h3 className = "card-text"><p className = "badge bg-pill bg-primary">Odds: {odds}</p></h3>
                            <h3 className = "card-text"><p className = "badge bg-pill bg-primary">Current bets: ${current_bets}</p></h3>
                        </div>
                    </div>
                </div> 
            </div>
    )
}

export default BetsCardForPlayers