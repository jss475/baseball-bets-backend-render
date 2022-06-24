import React from "react";
import {useHistory} from "react-router-dom"
import "../player_bet_card.css";


function BetsCardForPlayers({ bet }) {
    const { odds, description, current_bets } = bet;
    const history = useHistory();
    
    //when you click the Players Bet Card it redirects to the bets page associated with it so the user can bet
    function handlePlayersBetCardClick(){
        history.push(`/bets/${bet.id}`)
    }
  return (

    <div className="bets-card" onClick={handlePlayersBetCardClick}>
        <div className="bets-card-water">
          <p className="card-text">{description}</p>
          <div className="badge-container">
                <p className="badge bg-pill bg-success">Odds: {odds}</p>
                <p className="badge bg-pill bg-success">
                Current bets: ${current_bets}
                </p>
          </div>
    </div>
  </div>
    // <div className="bets-card">
    //   <div className="card border-dark mb-3 text-center">
    //     <img
    //       className="card-img_player_bets"
    //       src="https://static.vecteezy.com/system/resources/previews/000/236/108/original/baseball-stadium-background-vector.jpg"
    //       alt="background"
    //     />
    //     <div className="card-img-overlay">
    //       <div className="card-body">
    //         <p className="card-text">{description}</p>
    //         <h3 className="card-text">
    //           <p className="badge bg-pill bg-primary">Odds: {odds}</p>
    //         </h3>
    //         <h3 className="card-text">
    //           <p className="badge bg-pill bg-primary">
    //             Current bets: ${current_bets}
    //           </p>
    //         </h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default BetsCardForPlayers;
