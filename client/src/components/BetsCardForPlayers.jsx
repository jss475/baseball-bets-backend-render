import React from "react";

function BetsCardForPlayers({ bet }) {
  const { id, odds, description, current_bets } = bet;

  return (
    <>
      <p>Description: {description}</p>
      <p>Odds : {odds}</p>
      <p>Current bets: ${current_bets}</p>
    </>
  );
}

export default BetsCardForPlayers;

