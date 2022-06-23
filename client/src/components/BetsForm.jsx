import { useState, useEffect } from "react";

function BetsForm({ bet, handleAddBet, handleDeleteBet }) {
  const [betFormSubmit, setBetFormSubmit] = useState(false);
  const [newUserBet, setNewUserBet] = useState({});

  //create state
  //handles the initial place bet submit
  async function handleBetSubmit(e) {
    e.preventDefault();

    const form = new FormData(document.querySelector("#bet-form"));
    form.append("bet_id", bet.id);

    const configObj = {
      method: "POST",
      body: form,
    };

    const req = await fetch("/user_bets", configObj);

    if (req.ok) {
      const data = await req.json();
      setNewUserBet(data);
      handleAddBet(data.bet.id, data.bet.current_bets, data);

      setBetFormSubmit((betFormSubmit) => !betFormSubmit);
    } else {
      const error = await req.json();
      console.error(error.error);
    }
  }

  //handle the update bet

  async function handleUpdateBet(e) {
    e.preventDefault();

    const updateBetForm = document.querySelector("#update-bet-form");
    const form = new FormData(updateBetForm);
    form.append("prev_bet", newUserBet.money_bet);

    const configObj = {
      method: "PATCH",
      body: form,
    };

    //console.log(form.get("prev_bet"));
    const req = await fetch(`/user_bets/${newUserBet.id}`, configObj);
    const data = await req.json();

    handleAddBet(data.bet.id, data.bet.current_bets, data);
    setBetFormSubmit((betFormSubmit) => !betFormSubmit);

    updateBetForm.reset();
  }

  //handle the delete bet
  async function handleDeleteClick() {
    const configObj = {
      method: "DELETE",
    };

    const req = await fetch(`/user_bets/${newUserBet.id}`, configObj);
    const data = await req.json();

    handleDeleteBet(data);
    setBetFormSubmit((betFormSubmit) => !betFormSubmit);
  }

  //timer useEffect for toggling the update and delete button for the bet
  useEffect(() => {
    if (betFormSubmit) {
      const timer = setTimeout(() => {
        setBetFormSubmit((betFormSubmit) => !betFormSubmit);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [betFormSubmit]);

  //conditional below for when the initla bet has been placed and if it has, allow the user to update and delete the bet
  return (
    <>
      {!betFormSubmit ? (
        <form id="bet-form" onSubmit={handleBetSubmit}>
          <label>
            How much money do you want to bet?
            <input type="number" name="money_bet"></input>
          </label>

          <button type="submit">Place Bet</button>
        </form>
      ) : (
        <>
          <form id="update-bet-form" onSubmit={handleUpdateBet}>
            <label>
              How much do you want to update your bet by?
              <input type="number" name="money_bet"></input>
            </label>
            <button type="submit">Update Bet</button>
          </form>
          <button onClick={handleDeleteClick} type="submit">
            Delete Bet
          </button>
        </>
      )}
    </>
  );
}

export default BetsForm;
