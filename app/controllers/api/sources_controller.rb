class Api::SourcesController < ApplicationController

    def index
      @sources = Source.all
    end
    
    def new
      @source = Source.new
    end
  
    def create
      @source = Source.new(source_params)
      if @source.save
        render 'api/sources/show'
      else
        render json: @source.errors.full_messages, status: 400
      end
    end
  
    def edit
      @source = Source.find(params[:id])
    end
  
    def show
      @source = Source.find(params[:id])
      render 'api/sources/show'
    end
  
    def update
      @source = current_user.sources.find(params[:id])
      if @source.update(source_params)
        render 'api/sources/source'
      else
        render json: ['Invalid feed inputs'], status: 400
      end
    end
  
    def destroy
      feed = Source.find(params[:id])
      feed.destroy
      render 'api/sources/source'
    end
  
    private
    def source_params
      params.require(:source).permit(:source_name)
    end

  

end
