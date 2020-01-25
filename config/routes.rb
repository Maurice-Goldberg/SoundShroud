Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  
  namespace :api, defaults: { format: 'json' } do
    resource :session, only: [:create, :destroy] do
      member do 
        get '/email' => 'sessions#email'
      end
    end
    
    resources :users, only: [:create, :show, :update]
    resources :tracks, only: [:show, :index, :create, :destroy, :update] do
      resources :comments, only: [:index, :create]
    end
    resources :comments, only: [:destroy]
  end
end
