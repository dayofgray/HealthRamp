Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      
    end
  end

  post "api/v1/login" => "api/v1/auth#login"
  delete 'api/v1/logout' => "api/v1/auth#destroy"

  get "api/v1/current_user" => "api/v1/auth#get_current_user"


end
