# Baseball Bets
> A betting service application where users can bet on baseball related statistics.  

## Table of contents
* [General info](#general-info)
* [Project Demo](#project-demo)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [License](#license)

## General info
Baseball Bets is a web application that allows users to bet on sports. This betting application is unique in that it allows users to update their bet within 15 seconds of making their initial bet.

<div align="center">Welcome to Baseball Bets. </div>
<div align="center">
<img src="./client/public/BaseballBetsLogo2.png"alt="Logo" width="150" height="150">rails s
</div>
<br/>
<div align="center">
<kbd>
<img src="./BB_home.png">
</kbd>
</div>

<br/>
<div align="center">
<kbd>
<img src="./client/public/screen_shot.png">
</kbd>
</div>

## Project Demo 
[Click to view site](https://lit-tundra-09875.herokuapp.com/about)

## Technologies
### Backend Development 
* Ruby
* Ruby on Rails
* PostgreSQL

### Frontend Development 
* JavaScript
* HTML
* CSS
* React.js
* React-DOM
* React-Router-DOM
* Bootstrap

## Setup
To try out this project: 
1. Clone the GitHub repository locally to your computer
1. In the command line, navigate to the root directory of the repository, and type the following: 
  $ npm install 
1. Navigate to the client folder, and in the root directory of the client folder, type the following: 
  $ npm install 
1. In the client folder, and in the root directory of the client folder, type the following: 
  $ npm start
1. Navigate back to the root directory of this project and type the following: 
  $ bundle install
1. In the root directory, start the server by typing the following: 
  $ rails s

## Code Examples
### Ruby/Rails
```Rails
def winnings
  current_bets = (bet.current_bets + money_bet).to_f
  bet.update!(current_bets: current_bets)

  if bet.win
    payout = money_bet * bet.odds
    money = user.money + payout
    winnings = user.winnings + payout
  else
    money = user.money - money_bet
    winnings = user.winnings - money_bet
  end

  user.update!(money: money, winnings: winnings)
end
```

### JavaScript/React.js 
```React.js
async function handleBetSubmit(e) {
  e.preventDefault();
  const betForm = document.querySelector("#bet-form");
  const form = new FormData(betForm);
  form.append("bet_id", bet.id);

  const configObj = {
    method: "POST",
    body: form,
  };

  const req = await fetch("/user_bets", configObj);
  const res = await req.json();
  if(res["error"]){
    if(res["status"] === 500){
      alert("Please add a bet!")
    }else{
      alert(res["error"]);
      if(res["error"].includes("enough money")){
        history.push("/add-money");
      }
    }
  }else{
    req.ok ? handleOkReq(res) : handleErrorReq(res);
    setBetFormSubmit((betFormSubmit) => !betFormSubmit);

    betForm.reset();
  }
}
```


## Features
* Full stack web application utilizing React.js and Ruby on Rails.
* Authorization and authenication implemented with bcrypt.
* Front-End styles built with Bootstrap and CSS.
* Users can create account through application. 
* Users can bet on statistics on players and see their winnings/losses on their profile.
* Users can updated or cancel their bet within a short timeframe after making their initial bet.

## Status
Project is finished with option to expand functionality, add a web scraper for live statistics, and DRY out code.

## Inspiration
The inspiration for Baseball Bets came along when my partner and I were discussing baseball. We wanted a fun way to have users interact with baseball and to increase the retention rate of people watching the games.

## Contact
Created by [Joseph Shin](https://www.linkedin.com/in/joseph-sw-shin/) and James Coffman
Feel free to contact me for any questions! 
