import { useHistory, useLocation } from "react-router-dom";
import BetsCardForPlayers from "./BetsCardForPlayers";
import "../player_bet_card.css";
import "../player_card.css";


export default function PlayerCard({
  player,
  handleSetPlayerShow,
  playerShow,
}) {
  const { id, name, team_name, image, stats, current_bets, bets } = player;

  //initialize history for useHistory
  const history = useHistory();
  //get the pathname that we are currently on
  const pathname = useLocation();
  

  function handleCardClick() {
    if (pathname.pathname !== `/players/${id}`) {
      handleSetPlayerShow();
      history.push(`/players/${id}`);
    }
  }
  console.log(pathname.pathname)
  console.log(`/players/${id}`)
  console.log(playerShow)
  return (
    <>
      {/* <div className="card mb-3" id="full-player-card" onClick={handleCardClick}>
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
        </div> */}

      <div className="player-card" onClick={handleCardClick}>
        <div className="additional">
          <div className="user-card">
            <img
              src={image}
              alt="..."
            />
          </div>

          <div className="more-info">
            <h1>{name}</h1>
            <div className="coords">
              <span>{team_name}</span>
            </div>
            {/* <div className="coords">
                <span>Position/Role</span>
                <span>City, Country</span>
              </div> */}
            <div className="stats">
              <div>
                <div className="title">Average</div>
                <i className="fa fa-trophy"></i>
                <div className="value">{stats[0].toFixed(3)}</div>
              </div>
              <div>
                <div className="title">HR</div>
                <i className="fa fa-gamepad"></i>
                <div className="value">{stats[1]}</div>
              </div>
              <div>
                <div className="title">RBI</div>
                <i className="fa fa-group"></i>
                <div className="value">{stats[2]}</div>
              </div>
              <div>
                <div className="title">WAR</div>
                <i className="fa fa-coffee"></i>
                <div className="value">{stats[3]}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>{name}</h1>
          <span className="more">Mouse over the card for more info</span>
        </div>
      </div>

      <div className="card-group">
          {playerShow ? bets.map(bet => {
            return <BetsCardForPlayers key={bet.id} bet={bet} /> 
          }) : null}
      </div> 
    </>
  );
}
