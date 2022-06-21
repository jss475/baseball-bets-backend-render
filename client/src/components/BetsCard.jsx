import react from "react";

function BetsCard({bet}){
    const { win, price, odds, description, current_bets, player} = bet

    
    return (
        <>
            <p>Player: {player.name}</p>
            <p>Team: {player.team_name}</p>
            <img src={player.image} />
            <p>Description: {description}</p>
            <p>Odds: {odds}</p>
            <p>Current bets: ${current_bets}</p>
        </>
    )
}

export default BetsCard