class Trip < ApplicationRecord

  has_many :checkins

  validates :viewer_uuid, :owner_uuid, :name, presence: true

end
