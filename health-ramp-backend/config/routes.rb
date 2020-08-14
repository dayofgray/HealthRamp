Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users

  post "/login" => "auth#login"
  delete '/logout' => "auth#destroy"

  get "/current_user" => "auth#get_current_user"


end
