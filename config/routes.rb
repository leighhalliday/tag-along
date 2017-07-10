Rails.application.routes.draw do
  root 'trips#new'
  resources :trips, only: [:new, :create, :show]
end
