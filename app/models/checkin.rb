class Checkin < ApplicationRecord

  belongs_to :trip

  validates :trip_id, :lat, :lon, :captured_at, presence: true

end
