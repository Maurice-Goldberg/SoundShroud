class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)
    if @track.save
      render "api/tracks/show"
    else 
      render json: @track.errors.full_messages, status: 422
    end
  end
  
  def show
    @track = Track.find_by_id(params[:id])
    render "api/tracks/show"
  end

  def destroy

  end

  def index
    @tracks = Track.all
    render "api/tracks/index"
  end

  private
  def track_params
    params.require(:track).permit(:title, :description, :private, :track_file, :photo)
  end
end
