class Api::TracksController < ApplicationController
  def create
    # if(params[:track][:photo] == "null")
    #   debugger
    #   create_track_params.merge(photo: ActionController::Base.helpers.asset_path('loading-icon.svg'))
    # else
    #   debugger
    #   create_track_params.merge(photo: params[:track][:photo])
    # end

    # debugger
    @track = Track.new(create_track_params)
    # debugger
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
    #add "user: prof_pic_file: :blob" later
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
    if(params[:track][:photo] == "null")
      default_photo = ActionController::Base.helpers.asset_path('loading-icon.svg')
      # default_photo = default_photo.split('.')[0].split('-')[0..1].join("-") + '.svg'
      # debugger
      params.require(:track).permit(:title, :description, :private, :track_file, :photo, :account_id)
        .merge(photo: default_photo)
        #results in "invalid signature error"
    else
      # debugger
      params.require(:track).permit(:title, :description, :private, :track_file, :photo, :account_id)
      .merge(photo: params[:track][:photo])
    end
  end
  
  def edit_track_params
    params.require(:track).permit(:title, :description, :private, :track_file, :photo, :account_id)
  end
end
