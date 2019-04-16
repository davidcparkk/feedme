class Api::ArticlesController < ApplicationController
  before_action :require_login

  def show
    @article = Article.find(params[:id])
    # @source = @article.source
    render 'api/articles/show'
  end

  def index
    @articles = Article.all
    render 'api/articles/index'
  end
end
