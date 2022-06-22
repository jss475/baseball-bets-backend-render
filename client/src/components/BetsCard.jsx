import { useHistory, useLocation } from 'react-router-dom'
import BetsForm from './BetsForm'

function BetsCard({ bet, show, handleSetShow, handleAddBet}){
    //refactor the bet prop for the properties needed
    const { id, win, odds, description, current_bets, player } = bet
    //set up the useHistory to push to new form
    const history = useHistory()
    const { pathname } = useLocation()

    function handleBetClick(){
      
      //pushes the website to a new page while also sending the bet prop through the state key of history
      //history.push({pathname:'/place_bets', state: {data: bet}})
      if(pathname !== `/bets/${id}`){
        handleSetShow()
        history.push(`/bets/${id}`)
      }
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

            {!show ? <button onClick={handleBetClick}>Place Bet</button> : null}
            {show ? <BetsForm bet={bet}
                    show={show}
                    handleSetShow={handleSetShow}
                    handleAddBet={handleAddBet}
            /> : null}
        </>
    )
}

export default BetsCard
