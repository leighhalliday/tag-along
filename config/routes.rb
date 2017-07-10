Rails.application.routes.draw do
  resources :trips, only: [:new, :create, :show]
end
