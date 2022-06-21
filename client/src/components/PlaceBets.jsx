import {useHistory} from 'react-router-dom'
import {useEffect, useRef} from 'react'

function PlaceBets({bet}){
    const history = useHistory()
    const refContainer = useRef(history.location.state.data)
    //access the data pushed by history
    // useEffect(()=> {
    //     data = history.location.state.data
    //     //refactor data pushed by the history
        
    // },[])

    
    const { win, odds, description, current_bets, player} = refContainer.current
   
    function handleBetSubmit(e){
        e.preventDefault()
        console.log(e)
        // const configObj = {
        //     method: 'UPDATE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify()
        // }
        // fetch('/user_bets',configObj)
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