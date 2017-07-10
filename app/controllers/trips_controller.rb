class TripsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    clean_old_trips

    trip = Trip.create!(trip_params)

    render json: trip.to_json
  end

  def show
    trip = Trip.find_by!(viewer_uuid: params[:id])
    @trip_props = trip.attributes
    @trip_props.delete(:owner_uuid)
  end

  private

  def clean_old_trips
    Trip.where('created_at < ?', 2.days.ago).delete_all
  end

  def trip_params
    params.require(:trip).permit(:name)
  end
end
