import {useHistory} from 'react-router-dom'

function BetsCard({bet}){
    //refactor the bet prop for the properties needed
    const { win, odds, description, current_bets, player} = bet
    //set up the useHistory to push to new form
    const history = useHistory()

    function handleBetClick(){
        //pushes the website to a new page while also sending the bet prop through the state key of history
        history.push({pathname:'/place_bets', state: {data: bet}})
    }
    
    return (
        <>
            <p>Player: {player.name}</p>
            <p>Team: {player.team_name}</p>
            <img src={player.image} alt = "hello"/>
            <p>Description: {description}</p>
            <p>Odds: {odds}</p>
            <p>Current bets: ${current_bets}</p>
            <p>Did the bet win? {win ? "Yes!" : "No!"}</p>

            <button onClick={handleBetClick}>Place Bet</button>
        </>
    )
}

export default BetsCard