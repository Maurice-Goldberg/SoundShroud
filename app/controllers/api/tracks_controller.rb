class Api::TracksController < ApplicationController
  def create
    if(params[:track][:photo] == "null")
      render json: ["Please add album art (preferably a square .jpeg file)"], status: 422
    else
      @track = Track.new(create_track_params)
      if @track.save
        render "api/tracks/show"
      else
        render json: @track.errors.full_messages, status: 422
      end
    end
  end
  
  def show
    @track = Track.find_by_id(params[:id])
    render "api/tracks/show"
  end

  def update
    @track = Track.includes(track_file_attachment: :blob, photo_attachment: :blob).find_by_id(params[:id])
    if @track
      if @track.update_attributes(edit_track_params)
        render "api/tracks/show"
      end
    else
      render @track.errors.full_messages, status: 401
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
    params.require(:track).permit(:title, :artist, :description, :private, :track_file, :photo, :account_id)
  end
  
  def edit_track_params
    params.require(:track).permit(:title, :artist, :description, :private, :track_file, :photo, :account_id)
  end
end
