
export default function PlayerCard ({ player }) {
  const { name, team_name, image, stats, current_bets } = player
  return ( 
    <div className="card mb-3" style={{ width: '100%'}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img 
            src="https://external-preview.redd.it/jWKncWstM5fxKth8CSIb_2RFtaR_karh35cqpWO_oUw.jpg?format=pjpg&auto=webp&s=1f8d40d3d134b94de661e6a54eefc0729e12bc65" 
            className="card-img" 
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <ul className='card-text'>
              <li>{`Teamname:  ${team_name}`}</li>
              <li>{`Stats:  ${stats}`}</li>
              <li>{`Bets:  ${current_bets}`}</li>
            </ul> 
          </div>
        </div>
      </div>
    </div>  
  ) 
}
