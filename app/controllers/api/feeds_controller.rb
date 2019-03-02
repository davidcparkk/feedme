class Api::FeedsController < ApplicationController
  def index
    @feeds = Feed.all
  end
  
  def new
    @feed = Feed.new
  end

  def create
    @feed = Feed.new(feed_params)
    @feed.user_id = current_user.id
    if @feed.save
      render 'api/feeds/show'
    else
      render json: @feed.errors.full_messages, status: 400
    end
  end

  def edit
    @feed = Feed.find(params[:id])
  end

  def show
    @feed = Feed.find(params[:id])
  end

  def update
    @feed = current_user.feeds.find(params[:id])
    if @feed.update(feed_params)
      render 'api/feeds/feed'
    else
      render json: ['Invalid feed inputs'], status: 400
    end
  end

  def destroy
    feed = Feed.find(params[:id])
    feed.destroy
    render 'api/feeds/feed'
  end

  private
  def feed_params
    params.require(:feed).permit(:feed_title)
  end
end
