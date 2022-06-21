import { useEffect, useState } from 'react'
import PlayerCard from './PlayerCard'

export default function Players () {
  const [players, setPlayers] = useState([])
 
  useEffect(() => { 

    const getPlayers = async () => {
      const res = await fetch('/players')
      if (res.ok) {
        setPlayers(await res.json())
      }
    } 

    getPlayers()
  }, [])

  //console.log(players)

  return ( 
    //<div className='container'> 
    <>
      {players.map(player => (
        <PlayerCard 
          key={player.id}
          player={player}
        /> 
      ))}       
    </>
    //</div>
  )

}
