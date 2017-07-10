class Trip < ApplicationRecord
  has_many :checkins

  validates :viewer_uuid, :owner_uuid, :name, presence: true

  before_validation :set_uuids, on: :create

  def set_uuids
    self.viewer_uuid = SecureRandom.uuid
    self.owner_uuid = SecureRandom.uuid
  end
end
