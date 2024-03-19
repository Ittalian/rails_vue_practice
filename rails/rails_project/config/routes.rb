Rails.application.routes.draw do
  scope :api do
    get '/get_csrf_token', to: 'csrf_tokens#show'

    get '/sample_items', to: 'sample_items#index'
    post '/sample_items', to: 'sample_items#create'

    get 'signup', to: 'user#new'
    post 'signup', to: 'user#create'
    get '/login', to:  'sessions#new'
    post '/login', to: 'sessions#create'
    get '/logout', to: 'sessions#destroy'

    get '*path', to: 'application#not_found'
  end
end
