Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users

  post "/login" => "auth#login"

  get "/current_user" => "auth#logged_in_user"


end
