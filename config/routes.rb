Rails.application.routes.draw do
  namespace :api, defaults:{format: :json} do
    resources :users, only:[:create]
    resource :session, only:[:create, :destroy]
    resources :feeds
    resources :sources
    resources :feed_source_items, only: [:create, :destroy, :index]
  end

  root to: 'static_pages#root'
end
