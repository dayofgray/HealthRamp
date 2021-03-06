Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[show update]
      resources :recipes, only: %i[index show]
    end
  end

  get 'api/v1/shoppinglist' => 'api/v1/ingredients#index'
  put 'api/v1/shoppinglistitems/:id' => 'api/v1/shopping_list_items#update'

  post 'api/v1/login' => 'api/v1/auth#login'
  delete 'api/v1/logout' => 'api/v1/auth#destroy'
  post 'api/v1/signup' => 'api/v1/users#create'
  get 'api/v1/current_user' => 'api/v1/auth#get_current_user'
end
