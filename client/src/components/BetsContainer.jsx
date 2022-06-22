import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import BetsCard from './BetsCard'


function BetsContainer(){

    const [allBets, setAllBets] = useState([])
    const [showBets, setShowBets] = useState([])

    let { id } = useParams()

    const [show, setShow] = useState(() => {
      return id ? true : false
    })
    
    //const pageRenderCount = useRef(0)

  const handleAddBet = (id, newCb, userBet) => {
    const updatedBets = allBets.map(bet => {
      if(bet.id === +id){
        bet.current_bets = newCb  
        bet.user_bets.push(userBet)
      } else {
        return bet
      }
  })

    setAllBets(updatedBets)

  }
    //fetch all the bets data
    useEffect(() => {
        const getBets = async () => {
            let req = await fetch('/bets')
    
            if(req.ok){
                let res = await req.json()
                setAllBets(res)
            }else{
                console.log('hi')
            }
        }
        getBets()
    },[])


  useEffect(() => {

    if(allBets.length === 0) return

    if(!id || !show){

      setShowBets([...allBets])
      if (show) handleSetShow()

    } else {
      setShowBets(allBets.filter(bet => bet.id === +id))
    }

  }, [allBets, show, id])
   
   
  const handleSetShow = () => setShow(prev => !prev)

  //pageRenderCount.current += 1
  //console.log(pageRenderCount.current)

    return(
        <>
            {showBets.map(bet => {
                return <BetsCard 
                        key={bet.id} 
                        bet={bet} 
                        show={show}
                        handleSetShow={handleSetShow}
                        handleAddBet={handleAddBet}
                      />
            })}
        </>
    )

}

export default BetsContainer
