class Checkin < ApplicationRecord

  belongs_to :trip

  validates :trip_id, :lat, :lon, presence: true

end
