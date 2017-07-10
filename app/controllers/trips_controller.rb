class TripsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    trip = Trip.create(trip_params)
    render json: trip.to_json
  end

  def show
    trip = Trip.find_by!(viewer_uuid: params[:id])
    @trip_props = trip.attributes
    @trip_props.delete(:owner_uuid)
  end

  private

  def trip_params
    params.require(:trip).permit(:name)
  end
end
