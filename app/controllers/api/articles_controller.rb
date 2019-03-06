class Api::ArticlesController < ApplicationController
  before_action :require_login

  def show
    @article = Article.find(params[:id])
    render :show
  end

  def index
    @articles = Article.all
    render :index
  end
end
