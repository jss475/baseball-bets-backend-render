import React from 'react';

function BetsCardForPlayers({bet}){

    const {id, odds, description, current_bets} = bet
    
    
    return (
        <>
            <div className="card border-dark mb-3 text-center" style = {{width: "30rem"}}>
                <div className ="card-body">
                    <p className="card-text">{description}</p>
                </div>
                <div className ="card-body">
                    <h3><span className = "badge bg-pill bg-primary">Odds: {odds}</span></h3>
                    <h3><span className = "badge bg-pill bg-primary">Current bets: ${current_bets}</span></h3>
                </div>
            </div> 
        </>
    )
}

export default BetsCardForPlayers