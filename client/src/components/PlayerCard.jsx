import {useHistory, useLocation} from 'react-router-dom'
import BetsCardForPlayers from './BetsCardForPlayers'
import '../player_bet_card.css'

export default function PlayerCard ({ player , handleSetPlayerShow, playerShow}) {
  const { id, name, team_name, image, stats, current_bets, bets } = player

  //initialize history for useHistory
  const history = useHistory()
  //get the pathname that we are currently on 
  const pathname = useLocation()


  function handleCardClick(){
    if(pathname !== `/players/${id}`){
      handleSetPlayerShow()
      history.push(`/players/${id}`)
    }
  }
  
  return ( 
    <>

        <div className="card mb-3" id="full-player-card" onClick={handleCardClick}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img 
                src="https://external-preview.redd.it/jWKncWstM5fxKth8CSIb_2RFtaR_karh35cqpWO_oUw.jpg?format=pjpg&auto=webp&s=1f8d40d3d134b94de661e6a54eefc0729e12bc65" 
                className="card-img_player" 
                id="player-card-img"
                alt="..."
                
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" id="player-card-title">{name}</h5>
                <div className='card-text'>
                  <p>{`Team: ${team_name}`}</p>
                  <p>{`Stats: ${stats}`}</p>
                </div> 
              </div>
            </div>
          </div>
        </div>  
        <div className="card-group">
          {playerShow ? bets.map(bet => {
            return <BetsCardForPlayers key={bet.id} bet={bet} /> 
          }) : null}
        </div>


    </>
  ) 
}
