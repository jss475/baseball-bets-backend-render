Rails.application.routes.draw do
  
  #namespace :api do
    resources :players, only: [:index, :show]
    resources :bets
    resources :users, only: [:index, :show, :create]
    post '/login', to: 'sessions#login'
  #end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
