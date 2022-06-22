import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import BetsCard from './BetsCard'


function BetsContainer(){

    const [allBets, setAllBets] = useState([])
    const [showBets, setShowBets] = useState([])
    const [show, setShow] = useState(false)

    let { id } = useParams()

    //if the id doesn't exist give it a value of 0
    //if(!id){
        //id = 0
    //}
    
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
    useEffect(()=> {
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
      console.log(show, id)
      if(!show){
        setShowBets([...allBets])
        } else {
            setShowBets(allBets.filter(bet => bet.id === +id))
        }

    }, [allBets, show])
   
   
  const handleSetShow = () => setShow(prev => !prev)

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
