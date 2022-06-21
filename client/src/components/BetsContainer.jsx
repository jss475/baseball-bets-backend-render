import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import BetsCard from './BetsCard'


function BetsContainer(){

    const [allBets, setAllBets] = useState([])
    let {id } = useParams()

    //if the id doesn't exist give it a value of 0
    if(!id){
        id = 0
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

    // useEffect(()=> {
    //     fetch('/bets')
    //         .then(res => res.json())
    //         .then(data => setAllBets(data))
    // },[])
   let filteredArr = []
    if(allBets.length > 0){
        if(id===0){
            filteredArr = allBets
        }else{
            filteredArr = allBets.filter(bet => bet.id === +id)
        }
    }
   
    return(
        <>
            {filteredArr.map(bet => {
                return <BetsCard key={bet.id} bet={bet} />
            })}
        </>
    )

}

export default BetsContainer