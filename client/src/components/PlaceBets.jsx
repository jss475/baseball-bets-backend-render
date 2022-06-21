import {useHistory} from 'react-router-dom'
import {useEffect, useRef} from 'react'

function PlaceBets({bet}){
    const history = useHistory()
    const refContainer = useRef(history.location.state.data)


    
    const { win, odds, description, current_bets, player, id} = refContainer.current
   console.log(`Bet Id: ${id}`)
    function handleBetSubmit(e){
        e.preventDefault()
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bet_id: id,
                // user_id: 1, //set to 1 for TEST PURPOSES ONLY. PLEASE UPDATE ONCE YOU HAVE LOGIN
                money_bet: +e.target.money_bet.value})
        }
        fetch('/user_bets',configObj)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return(
        <>
            <p>Player: {player.name}</p>
            <p>Team: {player.team_name}</p>
            <img src={player.image} alt = "hello"/>
            <p>Description: {description}</p>
            <p>Odds: {odds}</p>
            <p>Current bets: ${current_bets}</p>

            <form onSubmit={handleBetSubmit}>
                <label>
                    How much do you want to bet?
                    <input type="text" name="money_bet"></input>
                </label>
                <button type="submit">Place Bet</button>
            </form>

        </>
    )
}

export default PlaceBets
