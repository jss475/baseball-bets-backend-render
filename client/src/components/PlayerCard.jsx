import { useHistory, useLocation } from "react-router-dom";
import BetsCardForPlayers from "./BetsCardForPlayers";

const IMAGE_URL =
  "https://external-preview.redd.it/jWKncWstM5fxKth8CSIb_2RFtaR_karh35cqpWO_oUw.jpg?format=pjpg&auto=webp&s=1f8d40d3d134b94de661e6a54eefc0729e12bc65";

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
    if (pathname !== `/players/${id}`) {
      handleSetPlayerShow();
      history.push(`/players/${id}`);
    }
  }

  return (
    <>
      <div
        className="card mb-3"
        style={{ width: "100%" }}
        onClick={handleCardClick}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={IMAGE_URL} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <ul className="card-text">
                <li>{`Teamname:  ${team_name}`}</li>
                <li>{`Stats:  ${stats}`}</li>
                <li>{`Bets:  ${current_bets}`}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {playerShow
        ? bets.map((bet) => {
            return <BetsCardForPlayers bet={bet} />;
          })
        : null}
    </>
  );
}
