class Api::TracksController < ApplicationController
  def create
    @track = Track.new(create_track_params)
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

  def update
    @track = Track.find_by_id(params[:id])
    if @track.update_attributes(edit_track_params)
      render "api/tracks/show"
    else
      render @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find_by_id(params[:id])
    if @track
      @track.destroy
    else
      render json: ["Track not found"], status: 422
    end
  end

  def index
    @tracks = Track.all
    render "api/tracks/index"
  end

  private
  def create_track_params
    params.require(:track).permit(:title, :description, :private, :track_file, :photo, :account_id)
  end
  
  def edit_track_params
    params.require(:track).permit(:title, :description, :private, :photo, :account_id)
  end
end
