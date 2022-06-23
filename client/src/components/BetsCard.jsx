import { useHistory, useLocation } from 'react-router-dom'
import BetsForm from './BetsForm'
import '../bets_card.css'


function BetsCard({ bet, show, handleSetShow, handleAddBet, handleDeleteBet}){
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
          <div className="bets-card">  

            <figure className="bets-card-water">
              <div className="bets-card-img-container">
                <img className="bets-img" src={player.image} alt = "hello"/>
              </div>
              
              <figcaption className="bets-card-caption">
                <h1 className="bets-card-name">{player.name}</h1>

                <p>{description}</p>


                <div className="bets-card-money">
                  <h4 className="bets-card-money-child">
                    <span className="bets-card-label">Odds</span>
                    {odds}
                  </h4>
                  <h4 className="bets-card-money-child">
                    <span className="bets-card-label">Current Bets</span>
                    ${current_bets}
                  </h4>
                </div>
              </figcaption>
              <div className="bets-card-btn-container">
                {!show ? <button className="btn btn-light btn-lg btn-block" onClick={handleBetClick}>Place Bet</button> : null}
                  {show ? <BetsForm bet={bet}
                          handleAddBet={handleAddBet}
                          handleDeleteBet={handleDeleteBet}
                  /> : null}

              </div>
               
            </figure>
          </div>





        </>
    )
}

export default BetsCard

// {/* <div className="bets-card">  

// <figure className="bets-card-water">
//   <div class="bets-card-img-container">
//     <img src={player.image} alt = "hello"/>
//   </div>
  
//   <figcaption class="bets-card-caption">
//     <h1 class="bets-card-name">{player.name}</h1>

//     {/* <h3 class="card__type">
//       normal
//     </h3> */}

//     {/* <table class="card__stats">
//       <tbody><tr>
//         <th>HP</th>
//         <td>55</td>
//       </tr>
//       <tr>
//         <th>Attack</th>
//         <td>55</td>
//       </tr>
      
//       <tr>
//         <th>Defense</th>
//         <td>50</td>
//       </tr>

//       <tr>
//         <th>Special Attack</th>
//         <td>45</td>
//       </tr>
//       <tr>
//         <th>Special Defense</th>
//         <td>65</td>
//       </tr>
//       <tr>
//         <th>Speed</th>  
//         <td>55</td>
//       </tr>
//     </tbody></table> */}
    
//     <div class="bets-card-money">
//       <h4 class="bets-card-money-child">
//         <span class="bets-card-label">Odds</span>
//         {odds}
//       </h4>
//       <h4 class="bets-card-money-child">
//         <span class="bets-card-label">Current Bets</span>
//         ${current_bets}
//       </h4>
//     </div>
//   </figcaption>
// </figure> */}