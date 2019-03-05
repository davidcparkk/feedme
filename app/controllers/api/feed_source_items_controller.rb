class Api::FeedSourceItemsController < ApplicationController
  def create
    @feed_source_item = FeedSourceItem.new(feed_source_item_params)
    if @feed_source_item.save
      render 'api/feed_source_items/show'
    else
      render json: @feed_source_item.errors.full_messages, status: 400
    end
    
  end

  def destroy
    @feed_source_item = FeedSourceItem.find(params[:id])
    @feed_source_item.destroy
    render 'api/feed_source_items/show'
  end

  def feed_source_item_params
    params.require(:feedSourceItem).permit(:feed_id, :source_id)
  end
end
