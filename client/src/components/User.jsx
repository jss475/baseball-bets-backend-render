import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function User({ handleLogin }) {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const validateUser = async () => {
      let req = await fetch("/validate_user");

      if (req.ok) {
        setUser(await req.json());
      } else {
        handleLogin(false);
        history.push("/login");
      }
    };

    validateUser();
  }, [handleLogin, history]);

  const { user_bets, name, money, winnings } = user;

  console.log(user_bets);
  return (
    <div>
      <h3>Hello {name}</h3>
      <p>{`You have: ${money} dollars`}</p>
      <p>{`You've won: ${winnings} dollars`}</p>
      {user_bets ? (
        <ul>
          {user_bets.map((el, i) => (
            <li key={i}>{el.user_message}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
